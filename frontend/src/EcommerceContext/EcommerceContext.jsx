import React, { createContext } from "react";
import productList from '../Assets/all_product';
import trendingProductList from '../Assets/trending_products';

//Create the context any initialise with null 
export const EcommerceContext = createContext(null);

//Context provides a way to pass data through the component tree 
//without having to pass props down manually at every level.
//Access functions and values in any components
const EcommerceContextProvider = (props) => {
    const ecommercecontextValue = {
        productList,
        trendingProductList
    };
    return (
        <EcommerceContext.Provider value={ecommercecontextValue}>
            {props.children}
        </EcommerceContext.Provider>
    )
}

export default EcommerceContextProvider;