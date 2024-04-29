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
        return res.status(400).json({ error: 'Please upload an image' });
    }
    const imageUrl = `http://localhost:${portNumber}/images/${req.file.filename}`;
    res.json({ success: 1, image_url: imageUrl }); 
});

//Mongo Schema: Product
const Product = mongoose.model("Product",{
    product_id:{
        type: Number,
        required: true,
    },
    product_name:{
        type: String,
        required: true,
    },
    product_image:{
        type: String,
        required: true,
    },
    product_category:{
        type: String,
        required: true,
    },
    sale_price:{
        type: Number,
        required: true,
    },
    original_price:{
        type: Number,
        required: true,
    },
    product_trending:{
        type: String,
        required: true,
    },
    product_description:{
        type: String,
        required: true,
    },
    product_date:{
        type: Date,
        default: Date.now,
    },
})

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