const portNumber = 4000; //Intialise port number for express server
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jsonwebtoken = require("jsonwebtoken");
const multer = require("multer");
const path = require("path"); //Access to backend directory in ExpressApp
const cors = require("cors");
const { log } = require("console");
const { type } = require("os");

//Import dotenv allow access to .env 
require('dotenv').config();

app.use(express.json()); //All requests from response will auto pass through json
app.use(cors()); //Frontend(ReactJS) connects to backend(ExpressApp) on port 4000

//MongoDB database connection string
mongoose.connect(process.env.MONGODB_URI);

//API Endpoint: Create Root
app.get("/",(req,res)=>{
    res.send("Express Web Server is running")
})

//Middleware
//Configures disk storage for uploaded images and generates unique filenames
const configureImageUpload = () => {
    const imageStorage = multer.diskStorage({
        destination: './upload/images',
        filename: (req, file, callback) => {
            const timestamp = Date.now();
            const originalExtension = path.extname(file.originalname);
            const newFilename = `${file.fieldname}_${timestamp}${originalExtension}`;
            callback(null, newFilename); 
        }
    });

    return multer({ storage: imageStorage });
}

const imageUploadMiddleware = configureImageUpload();

//API Endpoints: Upload images
app.use('/images', express.static('upload/images')); 

app.post("/uploadimage", imageUploadMiddleware.single('product'), (req, res) => {
    res.json({
        success: 1,
        imageUrl: `http://localhost:${portNumber}/images/${req.file.filename}`
    });
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
        type: Boolean,
        required: true,
    },
    product_availability:{
        type: Boolean,
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

//API Endpoint: Add product to database using schema
app.post('/addproduct', async(req,res) => {
    let products = await Product.find({});
    let product_id;
    //Auto increment product id
    if (products.length > 0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        product_id = last_product.product_id+1;
    } else { //No product in db
        product_id = 1;
    }
    const product = new Product({
        product_id:product_id,
        product_name:req.body.product_name,
        product_image:req.body.product_image,
        product_category:req.body.product_category,
        sale_price:req.body.sale_price,
        original_price:req.body.original_price,
        product_trending:req.body.product_trending,
        product_availability:req.body.product_availability,
        product_description:req.body.product_description,
    });
    console.log(product);
    await product.save();
    console.log("Product saved to database");
    res.json({
        success: true,
        product_name:req.body.product_name,
    })
})

//API Endpoint: Remove product from database
app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({product_id:req.body.product_id});
    console.log("Product Removed");
    res.json({
        success:true,
        product_name:req.body.product_name,
    })
})

//API Endpoint: Retreive all products from database
app.get('/getallproducts',async (req,res)=>{
    let products = await Product.find({});
    console.log("Retreived all products from database");
    res.send(products);
})

//Start server on specified port and provide errors 
app.listen(portNumber,(error)=>{
    if(!error) {
        console.log("Express Web Server is running on port: " + portNumber)
    } else {
        console.log("Error: " + error)
    }
});