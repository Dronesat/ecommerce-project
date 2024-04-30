import React, { createContext, useState } from "react";
import { useEffect } from "react";
//import productList from '../Assets/productList'; Transition from local to database

//Create the context any initialise with null 
export const EcommerceContext = createContext(null);

//Create one empty card
const initialiseEmptyCart  = () => {
    let initialCart  = {};
    let maxCartProducts = 301;
    for (let i = 0; i < maxCartProducts; i++) {
        initialCart[i] = 0; 
    }
    return initialCart ;
}

//Context provides a way to pass data through the component tree 
//without having to pass props down manually at every level.
//Access functions and values in any components
const EcommerceContextProvider = (props) => {
    const [shoppingCart,setshoppingCart] = useState(initialiseEmptyCart());
    const [productList,setProductList] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/getproductlist')
        .then((response)=>response.json())
        .then((data)=>setProductList(data))
    },[])

    //Function add product to cart
    const addProductToCart = (productID) => {
        setshoppingCart((previousCart) => {
            const newCart = { ...previousCart }; // Create a copy of the cart
            // Increment existing item or initialise if new
            if (newCart[productID]) {
                newCart[productID] += 1; 
            } else {
                newCart[productID] = 1; 
            }
            return newCart;
        });
        //Check if customer is logged in?
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/addproducttocart',{
                method:'POST',
                headers:{
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,  
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({"productId":productID}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }

    //Function remove product from cart
    const removeProductFromCart = (productID) => {
        setshoppingCart((previousCart) => {
            const updatedCart = { ...previousCart }; // Create a copy of the cart
            // Decrement item quantity
            updatedCart[productID] = Math.max(updatedCart[productID] - 1, 0);
            // Optionally remove items with 0 quantity
            if (updatedCart[productID] === 0) {
                delete updatedCart[productID]; 
            } 
            return updatedCart;
        });
        //Check if customer is logged in?
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/removeproductfromcart',{
                method:'POST',
                headers:{
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,  
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({"productId":productID}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }

    //Function calculate total prices for shopping cart
    const calculateCartTotal = () => {
        let totalCost = 0;
        for (const [productId, productQuantity] of Object.entries(shoppingCart)) {
            if (productQuantity > 0) {
                for (const product of productList) {
                    if (product.product_id === Number(productId)) {
                        totalCost += product.sale_price * productQuantity;
                        break; // Exit inner loop once product is found
                    }
                }
            }
        }
        return totalCost;
    }

    //Function calculate number of products in cart to display on navigation bar
    const calculateTotalProductInCart = () => {
        let totalProducts = 0;
        for (const productQuantity of Object.values(shoppingCart)) {
            if (productQuantity > 0) {
                totalProducts += productQuantity;
            }
        }
        return totalProducts;
    }

    const ecommercecontextValue = {
        productList,
        shoppingCart,
        addProductToCart,
        removeProductFromCart,
        calculateCartTotal,
        calculateTotalProductInCart
    };

    return (
        <EcommerceContext.Provider value={ecommercecontextValue}>
            {props.children}
        </EcommerceContext.Provider>
    )
}

export default EcommerceContextProvider;