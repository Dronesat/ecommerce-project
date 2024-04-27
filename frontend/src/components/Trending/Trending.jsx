import React from 'react'
import './Trending.css'
import trending_products from '../../Assets/trending_products'
import ProductCard from '../ProductCard/ProductCard'

const Trending = () => {
  return (
    <div className='trending'>
        <hr/>
        <h1>Trending Products RIGHT NOW!!!</h1>
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

export default Trending