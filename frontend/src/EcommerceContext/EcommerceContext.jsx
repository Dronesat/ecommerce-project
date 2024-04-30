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

    useEffect(() => {
        // Function to fetch product list from the backend
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:4000/getproductlist');
                const data = await response.json();
                setProductList(data);
            } catch (error) {
                console.error('Error fetching products:', error);
                // Handle the error appropriately (e.g., display an error message)
            }
        };
        // Function to fetch shopping cart data if the user is logged in
        const fetchCartData = async () => {
            try {
                const authToken = localStorage.getItem('auth-token');
                if (!authToken) return; //exit if no auth token is found
    
                const response = await fetch('http://localhost:4000/getallproductsfromcart', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/form-data',
                        'auth-token': authToken,
                        'Content-Type': 'application/json',
                    },
                    body: "", 
                });
    
                const productCartData = await response.json();
                setshoppingCart(productCartData);
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        };
        //Fetch products 
        fetchProducts(); 
        //Fetch cart data only if the user has an auth token
        if (localStorage.getItem('auth-token')) {
            fetchCartData(); 
        }
    }, []); 
    
    //Helper function: Modifies the quantity of a product in the cart 
    //or initialises it if new
    const updateCartQuantity = (cartState, productId, modifier) => {
        const updatedCart = { ...cartState };
        updatedCart[productId] = Math.max(updatedCart[productId] || 0, 0) + modifier;

        if (updatedCart[productId] === 0) {
            delete updatedCart[productId];
        }
        return updatedCart;
    };

    //Function Add product to cart
    const addProductToCart = (productId) => {
        setshoppingCart((currentCart) => updateCartQuantity(currentCart, productId, 1));

        if (localStorage.getItem('auth-token')) {
            updateServerCart(productId, 'addproducttocart');
        }
    };
    //Function Remove product from cart
    const removeProductFromCart = (productId) => {
        setshoppingCart((currentCart) => updateCartQuantity(currentCart, productId, -1));

        if (localStorage.getItem('auth-token')) {
            updateServerCart(productId, 'removeproductfromcart');
        }
    };

    //Update cart on server via endpoint (/add... or /remove...)
    const updateServerCart = async (productId, action) => {
        try {
            const authToken = localStorage.getItem('auth-token');
            // Ensure there's a token before making the request 
            if (!authToken) return;

            const response = await fetch(`http://localhost:4000/${action}`, {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': authToken,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productId }), 
            });

            const productData = await response.json();
            console.log(productData);
        } catch (error) {
            console.error(`Error updating server cart (${action})`, error);
        }
    };

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