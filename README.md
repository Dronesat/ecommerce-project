# SMEs E-commerce Platform
 (Final Year Project)
 An E-commerce platform designed  for small and medium businesses(SMEs) in clothing industry

## Feature
This E-commerce platform provides the following feature
- E-commerce website with product listings, product pages, shopping cart and login/register account
- Admin Panel: Interface for inventory management
- Backend: Use Node.js/ExpressJS with MongoDB database for scalability
- Customisable Design: The platform provides a templates to adapt the look and feel to your own brand

## Technologies
This project was built using the following technologies:
- Frontend: [ReactJS](https://reactjs.org/)
- Backend: [Node.js](https://nodejs.org/en), [ExpressJS](https://expressjs.com/)
- Database: [MongoDB](https://www.mongodb.com/)
- Other: [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) (authentication), 
         [multer](https://www.npmjs.com/package/multer) (image uploads),
         [cors](https://www.npmjs.com/package/cors)

## Installation
1. Clone the repository: `git clone https://github.com/Dronesat/ecommerce-project.git`
2. Install Dependencies:
    - Frontend: `cd frontend && npm install`
    - Admin Panel: `cd adminpanel && npm install`
    - Backend: `cd backend && npm install`
3. Environment Variables: 
    Create a .env file in the backend root directory. 
    Add the following (replace with your actual values): 
    - MONGODB_URI - Your MongoDB connection string
    - JWT_TOKEN_KEY - A secret key for JWT authentication
4. Start Servers: 
    - Frontend: `npm start` (Runs on http://localhost:3000 by default)
    - Admin Panel: `npm run dev` (Runs on http://localhost:5713 by default)
    - Backend (Server): `node .\index.js` (Runs on http://localhost:4000 by default)

## Usage
1. Access Admin Panel: Go to `http://localhost:5713` to and manage products.
2. Visit Storefront: Go to `http://localhost:3000` to see the customer-facing site.

## API Documentation
You can find this document in the root directory "API_Documentation.pdf"

## Contributing
Contributions are welcome! Please fork the repository and submit pull requests.

## Licence
ecommerce-project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
