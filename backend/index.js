const portNumber = 4000; //Intialise port number for express server
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jsonwebtoken = require("jsonwebtoken");
const multer = require("multer");
const path = require("path"); //Access to backend directory in ExpressApp
const cors = require("cors"); //Provide access to ReactProject
const bcrypt = require('bcryptjs');

//Import dotenv allow access to .env 
require('dotenv').config();

//Import Models Schema 
const Product = require('./modelsSchema/productSchema');
const Customer = require('./modelsSchema/customerSchema');

app.use(express.json()); //All requests from response will auto pass through json
app.use(cors()); //Frontend(ReactJS) connects to backend(ExpressApp) on port 4000

//MongoDB database connection string
mongoose.connect(process.env.MONGODB_URI); //store in .env to prevent exposing connection string on github

// API Endpoint: Create Root
app.get("/",(req,res)=>{
    res.send("Express Web Server is running")
})

// Middleware: Configures disk storage for uploaded images and generates unique filenames
const imageStorage = multer.diskStorage({
    //Destination folder: store images in './upload/images'
    destination: function(req, file, callback) {
        callback(null, './upload/images'); 
    },
    //Generate a unique filename
    filename: function(req, file, callback) {
        const uniqueSuffix = Date.now(); 
        const originalExtension = path.extname(file.originalname);
        const newFilename = `${file.fieldname}_${uniqueSuffix}${originalExtension}`;
        callback(null, newFilename); 
    }
});
const imageUpload = multer({ storage: imageStorage });

// API Endpoints: Upload images
//1. Configure image serving: 'upload/images' publicly accessible via URLs starting with '/images'
app.use('/images', express.static('upload/images'));
//2. Image upload endpoint
app.post('/upload', imageUpload.single('product'), (req, res) => {
    //Check if a file was actually uploaded
    if (!req.file) { 
        return res.status(400).json({ errors: 'Please upload an image' });
    }
    //Image URL accessible to the client frontend
    const imageUrl = `http://localhost:${portNumber}/images/${req.file.filename}`;
    res.json({ success: 1, image_url: imageUrl }); 
});

// API Endpoint: Add product to database using schema
app.post('/addproduct', async (req, res) => {
    try {
        //Fetch all existing products 
        const existingProducts = await Product.find({});

        let nextProductId;
        if (existingProducts.length > 0) {
            //If there are existing products, get the last product's ID and increment
            const lastProduct = existingProducts[existingProducts.length - 1];
            nextProductId = lastProduct.product_id + 1;
        } else {
            //If no products exist yet, start with ID 1
            nextProductId = 1;
        }

        //Create a new product object:
        const newProduct = new Product({
            product_id: nextProductId,
            ...req.body, // Spread the product data from the request body
        });
        console.log(newProduct); 

        //Save the product to the database
        await newProduct.save();
        console.log("Product saved to database");

        //Send a success response
        res.json({
            success: true,
            product_name: req.body.product_name,
        });

    } catch (error) {
        console.error("Error saving product:", error); 
        res.status(500).json({ error: "Failed to save product" }); 
    }
});

// API Endpoint: Remove product from database
app.post('/removeproduct', async (req, res) => {
    try {
      //Find and delete a product that match the productID
      await Product.findOneAndDelete({ product_id: req.body.product_id });
      console.log("Product Removed"); 
  
      //Send a success response with the deleted product's name 
      res.json({
        success: true,
        deletedProductName: req.body.product_name 
      });
  
    } catch (error) {
      console.error("Error deleting product:", error);
      res.status(500).json({ error: "Failed to delete product" }); 
    }
});
  
// API Endpoint: Retrieve all products from database
app.get('/getproductlist', async (req, res) => {
    try{
      //Fetch all products from the database
      const productList = await Product.find({}); 
      console.log("Retrieved all products from database");
  
      //Send the retrieved product list as the response
      res.send(productList); 
    } catch (error) {
      console.error("Error retrieving products:", error);
      res.status(500).json({ error: "Failed to retrieve products" });
    }
});

// API Endpoint: Customer Account Sign Up 
app.post('/signup', async (req, res) => {
    try {
        //1. Check for existing email
        const existingCustomer = await Customer.findOne({ customer_email: req.body.customer_email });
        if (existingCustomer) {
            return res.status(400).json({ success: false, errors: "Account already exists with this email. Please try signing in or use a different email" });
        }

        // Hash the password
        const saltRounds = 10; // Controls cost of hashing; higher = more secure but slower
        const hashedPassword = await bcrypt.hash(req.body.customer_password, saltRounds);
        
        //2. Create new customer with empty cart
        const initialCart = {};
        for (let i = 0; i < 300; i++) {
            initialCart[i] = 0;
        }
        const newCustomer = new Customer({
            customer_name: req.body.customer_name,
            customer_email: req.body.customer_email,
            //customer_password: req.body.customer_password,
            customer_password: hashedPassword, 
            customer_cartData: initialCart,
        });
        await newCustomer.save();

        //3. JWT Authentication
        const customerDataForToken = {
            user: {
                id: newCustomer.id
            }
        };
        const token = jsonwebtoken.sign(customerDataForToken, process.env.JWT_TOKEN_KEY);
        res.json({ success: true, token });
    } catch (error) {
        console.error("Error creating account:", error);
        res.status(500).json({ success: false, error: "Error creating account" });
    }
});

// API Endpoint: Customer login to account
app.post('/login', async (req, res) => {
    try {
        //Find the user by email
        const existingCustomer = await Customer.findOne({ customer_email: req.body.customer_email });

        if (existingCustomer) {
            // Compare provided password with stored password
            //const isPasswordMatch = req.body.customer_password === existingCustomer.customer_password;
            const isPasswordMatch = await bcrypt.compare(req.body.customer_password, existingCustomer.customer_password);

            if (isPasswordMatch) {
                // Create payload for the JWT token
                const tokenPayload = {
                    user: {
                        id: existingCustomer.id 
                    }
                };

                // Generate the JWT token
                const token = jsonwebtoken.sign(tokenPayload, process.env.JWT_TOKEN_KEY);
                res.json({ success: true, token }); 
            } else {
                res.json({ success: false, errors: "Wrong Password" });
            }
        } else {
            res.json({ success: false, errors: "Wrong Email Address" });
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ success: false, errors: "Error during login" });
    }
});

// Middleware: authenticate customer based on JWT token
const fetchCustomer = async (req, res, next) => {
    //Extract the auth token from the request header
    const authToken = req.header('auth-token');

    //If no token is found, send an authentication error response
    if (!authToken) {
        return res.status(401).send({ errors: "Authentication Failed: Invalid Token" });
    }

    try {
        //Verify the JWT token
        const decodedToken = jsonwebtoken.verify(authToken, process.env.JWT_TOKEN_KEY);

        //If the token doesn't contain a user or a user ID, send an error
        if (!decodedToken.user || !decodedToken.user.id) {
            return res.status(401).send({ errors: "Authentication Failed: Invalid Token" });
        }

        //Token is valid, attach user data to the request object
        req.user = decodedToken.user;
        next(); 
    } catch (error) {
        console.error("Error in fetchCustomer:", error);
        res.status(401).send({ errors: "Authentication Failed: Invalid Token" });
    }
};


// API Endpoint: Add Product to Cart
app.post('/addproducttocart', fetchCustomer, async (req, res) => {
    try {
        console.log("Product Added to Cart", req.body.productId);
        //Get customer ID from the authenticated request
        const customerId = req.user.id; 
        const productId = req.body.productId;

        //Update the customer's cart in the database, incrementing the product quantity 
        await Customer.findOneAndUpdate(
            { _id: customerId },
            { $inc: { [`customer_cartData.${productId}`]: 1 } } 
        ); 

        res.json({ message: "Product Added to Cart and Database" }); 
    } catch (error) {
        console.error("Error adding product to cart:", error);
        res.status(500).send({ errors: "Failed to add product" }); 
    }
});

// API Endpoint: Remove Product from Cart
app.post('/removeproductfromcart', fetchCustomer, async (req, res) => {
    try {
        console.log("Product Removed from Cart", req.body.productId);
        //Get customer ID from the authenticated request
        const customerId = req.user.id;
        const productId = req.body.productId;

        //Update customer's cart, decrement the product quantity (only if quantity > 0)
        await Customer.findOneAndUpdate(
            { 
                _id: customerId, 
                [`customer_cartData.${productId}`]: { $gt: 0 } 
            },
            { $inc: { [`customer_cartData.${productId}`]: -1 } }
        );  

        res.json({ message: "Product Removed to Cart and Database" }); 
    } catch (error) {
        console.error("Error removing product from cart:", error);
        res.status(500).send({ errors: "Failed to remove product" }); 
    }
});

// API Endpoint: Get Shopping Cart Data
app.post('/getallproductsfromcart', fetchCustomer, async (req, res) => {
    try {
      //Fetch customer document with only the cart data (Use lean to improve performance)
      const customer = await Customer.findOne({ _id: req.user.id }).lean();
  
      //Send the customer's cart data as the JSON response
      res.json(customer.customer_cartData); 
  
    } catch (error) {
      console.error("Error fetching shopping cart:", error);
      res.status(500).send({ errors: "Failed to fetch cart" });
    }
});

const startServer = () => {
    app.listen(portNumber, (error) => {
        if (error) {
            console.error("Error starting server:", error);
        } else {
            console.log("Express Web Server is running on port: " + portNumber); 
        }
    });
}
//Call the function to start the server
startServer();