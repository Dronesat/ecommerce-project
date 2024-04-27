import React, { useContext } from 'react'
import './CSS/CategoryPage.css'
import { EcommerceContext } from '../EcommerceContext/EcommerceContext'
import ProductCard from '../components/ProductCard/ProductCard'

const WomenPage = () => {
  const pageCategory = 'women';
  const {productList} = useContext(EcommerceContext);
  return (
    <div className='page-category'>
      <h1>Discover the latest women's fashion trends and timeless essentials</h1>
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
      <p>Your wardrobe refresh starts here! New women's styles dropping soon</p>
    </div>
  )
}

export default WomenPage