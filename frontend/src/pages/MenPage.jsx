import React, { useContext } from 'react'
import './CSS/CategoryPage.css'
import { EcommerceContext } from '../EcommerceContext/EcommerceContext'
import ProductCard from '../components/ProductCard/ProductCard'

const MenPage = () => {
  const pageCategory = 'men';
  const {productList} = useContext(EcommerceContext);
  return (
    <div className='page-category'>
      <h1>Explore our extensive collection of men's fashion, featuring the latest styles and trends</h1>
      <hr/>
      <div className='page-category-product'>
        {productList.map((product,i)=>{
          if (pageCategory === product.product_category){
            return <ProductCard
            key={i} 
            product_id={product.product_id} 
            product_name={product.product_name}
            product_image={product.product_image}
            sale_price={product.sale_price}
            original_price={product.original_price}/>
          } else {
            return null;
          }
        })}
      </div>
      <hr/>
      <p>Get ready - more amazing menswear styles are on the way!</p>
    </div>
  )
}

export default MenPage