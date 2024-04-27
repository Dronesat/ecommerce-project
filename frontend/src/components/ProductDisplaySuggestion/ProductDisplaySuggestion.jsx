import React from 'react'
import './ProductDisplaySuggestion.css'
import trending_products from '../../Assets/trending_products'
import ProductCard from '../ProductCard/ProductCard'

const ProductDisplaySuggestion = () => {
  return (
    <div className='trending'>
        <hr/>
        <h1>You Might Also Like</h1>
        <hr/>
        <div className='trending-products'>
            {trending_products.map((product,i)=>{
                return <ProductCard 
                key={i} 
                product_id={product.product_id} 
                product_name={product.product_name}
                product_image={product.product_image}
                sale_price={product.sale_price}
                original_price={product.original_price}/>
            })}
        </div>
    </div>
  )
}

export default ProductDisplaySuggestion