const portNumber = 4000; //Intialise port number for express server
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jsonwebtoken = require("jsonwebtoken");
const multer = require("multer");
const path = require("path"); //Access to backend directory in ExpressApp
const cors = require("cors");

//Import dotenv allow access to .env 
require('dotenv').config();

//Import Models Schema 
const Product = require('./modelsSchema/productSchema');
const Customer = require('./modelsSchema/customerSchema');

app.use(express.json()); //All requests from response will auto pass through json
app.use(cors()); //Frontend(ReactJS) connects to backend(ExpressApp) on port 4000

//MongoDB database connection string
mongoose.connect(process.env.MONGODB_URI); //store in .env to prevent exposing connection string on github

//API Endpoint: Create Root
app.get("/",(req,res)=>{
    res.send("Express Web Server is running")
})

//Middleware: Configures disk storage for uploaded images and generates unique filenames
const imageStorage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './upload/images'); // Store images in './upload/images'
    },
    filename: function(req, file, callback) {
        const uniqueSuffix = Date.now(); // Timestamp for uniqueness
        const originalExtension = path.extname(file.originalname);
        const newFilename = `${file.fieldname}_${uniqueSuffix}${originalExtension}`;
        callback(null, newFilename); 
    }
});
const imageUpload = multer({ storage: imageStorage });

//API Endpoints: Upload images
app.use('/images', express.static('upload/images')); // Serve images from the upload directory
app.post('/upload', imageUpload.single('product'), (req, res) => {
    if (!req.file) { 
        return res.status(400).json({ errors: 'Please upload an image' });
    }
    const imageUrl = `http://localhost:${portNumber}/images/${req.file.filename}`;
    res.json({ success: 1, image_url: imageUrl }); 
});



// API Endpoint: Add product to database using schema
app.post('/addproduct', async (req, res) => {
    try {
        const existingProducts = await Product.find({});
        let nextProductId;
        if (existingProducts.length > 0) {
            const lastProduct = existingProducts[existingProducts.length - 1];
            nextProductId = lastProduct.product_id + 1;
        } else {
            nextProductId = 1;
        }

        const newProduct = new Product({
            product_id: nextProductId,
            product_name: req.body.product_name,
            product_image: req.body.product_image,
            product_category: req.body.product_category,
            sale_price: req.body.sale_price,
            original_price: req.body.original_price,
            product_trending: req.body.product_trending,
            product_description: req.body.product_description,
        });

        console.log(newProduct);
        await newProduct.save();
        console.log("Product saved to database");

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
        await Product.findOneAndDelete({ product_id: req.body.product_id });
        console.log("Product Removed"); 
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
app.get('/getallproducts', async (req, res) => {
    try{
        const allProducts = await Product.find({});
        console.log("Retrieved all products from database");
        res.send(allProducts);
    } catch (error) {
        console.error("Error retrieving products:", error);
        res.status(500).json({ error: "Failed to retrieve products" });
    }
});

//API Endpoint: Customer Account Sign Up 
app.post('/signup', async (req, res) => {
    try {
        // 1. Check for existing email
        const existingCustomer = await Customer.findOne({ customer_email: req.body.customer_email });
        if (existingCustomer) {
            return res.status(400).json({ success: false, errors: "Account already exists with this email" });
        }

        // 2. Create new customer with empty cart
        const initialCart = {};
        for (let i = 0; i < 300; i++) {
            initialCart[i] = 0;
        }

        const newCustomer = new Customer({
            customer_name: req.body.customer_name,
            customer_email: req.body.customer_email,
            customer_password: req.body.customer_password, 
            customer_cartData: initialCart,
        });
        await newCustomer.save();

        // 3. JWT Authentication
        const customerDataForToken = {
            customer: {
                id: newCustomer.customer_id 
            }
        };
        const token = jsonwebtoken.sign(customerDataForToken, process.env.JWT_TOKEN_KEY);
        res.json({ success: true, token });
    } catch (error) {
        console.error("Error creating account:", error);
        res.status(500).json({ success: false, error: "Error creating account" });
    }
});

//API Endpoint: Customer login to account
app.post('/login', async (req, res) => {
    try {
        // Attempt to find the user by email
        const existingUser = await Customer.findOne({ customer_email: req.body.customer_email });

        if (existingUser) {
            // Compare provided password with stored password
            const isPasswordMatch = req.body.customer_password === existingUser.customer_password;

            if (isPasswordMatch) {
                // Create payload for the JWT token
                const tokenPayload = {
                    user: {
                        id: existingUser.id 
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

const startServer = () => {
    app.listen(portNumber, (error) => {
        if (error) {
            console.error("Error starting server:", error);
        } else {
            console.log("Express Web Server is running on port: " + portNumber); 
        }
    });
}
// Call the function to start the server
startServer();