const request = require('supertest');
const app = require('./index'); 
const path = require("path"); 
const multer = require("multer");
const fs = require('fs');
const Product = require('./modelsSchema/productSchema');

describe("Express App Tests", () => {
    test("GET / should return 'Express Web Server is running'", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
        expect(response.text).toContain('Express Web Server is running');
    });

});

describe('Image Upload Endpoint', () => {
    it('should upload an image and return a URL', async () => {
        const filePath = path.join(__dirname, 'test-img.png');

        const upload = multer(); 
        const response = await request(app)
            .post('/upload')
            .field('product', '') 
            .attach('product', fs.readFileSync(filePath), 'sample_image.jpg');

        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(1); 
        expect(response.body.image_url).toBeDefined();
    });
});

describe('POST /signup', () => {
    it('should create a new customer and return a JWT token', async () => {
        const response = await request(app)
            .post('/signup')
            .send({
                customer_name: "John Doe",
                customer_email: "johndoe@example.com",
                customer_password: "123456"
            });
        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBeTruthy();
        expect(response.body.token).toBeDefined();
    });
});

describe('POST /login', () => {
    it('should login and return a JWT token', async () => {
        const response = await request(app)
            .post('/login')
            .send({
                customer_name: "John Doe",
                customer_email: "johndoe@example.com",
                customer_password: "123456"
            });
        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBeTruthy();
        expect(response.body.token).toBeDefined();
    });
});

describe('Product Endpoints', () => {
    it('should add a product to the database', async () => {
        const productData = {
            product_name: "Example Product",
            product_description: "Example Description",
            product_price: 19.99,
            product_trending: false, 
            original_price: 19.99, 
            sale_price: 19.99, 
            product_category: "Default Category", 
            product_image: "placeholder.jpg" 
        };
        const response = await request(app)
            .post('/addproduct')
            .send(productData);
  
        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBeTruthy();
        expect(response.body.product_name).toBe(productData.product_name);
    });
  
    it('should retrieve all products', async () => {
        const response = await request(app).get('/getproductlist');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });
});

describe('Delete Product Endpoint', () => {
    const existingProductId = 123; 
    const existingProductName = "Example Product";

    it('should remove a product and return a success response', async () => { 
        const requestData = { 
            product_id: existingProductId,
            product_name: existingProductName
        };

        const response = await request(app)
            .post('/removeproduct')
            .send(requestData);

        expect(response.statusCode).toBe(200);

        expect(response.body.success).toBe(true);
        expect(response.body.deletedProductName).toBe(existingProductName);

        const deletedProduct = await Product.findOne({existingProductId});
        expect(deletedProduct).toBeNull(); 
    });
});

afterAll(done => {
    done();
});
