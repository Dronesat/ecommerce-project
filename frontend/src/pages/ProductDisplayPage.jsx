import React, { useContext } from 'react'
import { EcommerceContext } from '../EcommerceContext/EcommerceContext'
import { useParams } from 'react-router-dom';
import ProductDisplayBreadcrumbs from '../components/ProductDisplayBreadcrumbs/ProductDisplayBreadcrumbs';
import ProductDisplayDetail from '../components/ProductDisplayDetail/ProductDisplayDetail';
import ProductDisplayReview from '../components/ProductDisplayReview/ProductDisplayReview';
import ProductDisplaySuggestion from '../components/ProductDisplaySuggestion/ProductDisplaySuggestion';

const ProductDisplayPage = () => {
    //Get productList from Context (EcommerceContextProvider)
    const {productList} = useContext(EcommerceContext);
    //Get productID using Route defined in App.js
    const {productID} = useParams();
    //Find the particular product in productList
    const numberProductID = Number(productID);
    const product = productList.find((e) => e.product_id === numberProductID)
  return (
    <div>
        <ProductDisplayBreadcrumbs product={product}/>
        <ProductDisplayDetail product={product}/>
        <ProductDisplayReview/>
        <ProductDisplaySuggestion/>
    </div>
    
  )
}

export default ProductDisplayPage