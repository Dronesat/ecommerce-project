app.post('/addproduct', async (req, res) => {});
app.post('/removeproduct', async (req, res) => {});
app.get('/getproductlist', async (req, res) => {});
app.post('/signup', async (req, res) => {});
app.post('/login', async (req, res) => {});
app.post('/addproducttocart', fetchCustomer, async (req, res) => {});
app.post('/removeproductfromcart', fetchCustomer, async (req, res) => {});
app.post('/getallproductsfromcart', fetchCustomer, async (req, res) => {});


const ProductSchema = new mongoose.Schema({
    product_id: {type: Number, required: true},
    product_name: {type: String, equired: true},
    product_image: {type: String, required: true},
    product_category: {type: String, required: true},
    sale_price: {type: Number,required: true},
    original_price: {type: Number, required: true},
    product_trending: {type: String, required: true},
    product_description: {type: String, required: true},
    product_date: {type: Date, default: Date.now},
});

const CustomerSchema = new mongoose.Schema({ 
    customer_name: {type: String},
    customer_email: {type: String, unique: true},
    customer_password: {type: String},
    customer_cartData: {type: Object},
    date: {type: Date, default: Date.now()}
});

<NavigationBar>
  <Link to="/">Home</Link>
  <Link to="/men">Men</Link>
  <Link to="/women">Women</Link>
  <Link to="/account">Account</Link>
</NavigationBar>

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
