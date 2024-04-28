import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'

const ProductCard = (product) => {
  return (
    <div className='product'>
        <Link to = {`/product/${product.product_id}`}>
          <img onClick={window.scrollTo(0,0)} src={product.product_image} alt=''/>
        </Link>
        <p className='product-name'>{product.product_name}</p>
        <div className='product-prices'>
            <div className='product-price-original'>
                Original: £{product.original_price}
            </div>
            <div className='product-price-sale'>
                Sale: £{product.sale_price}
            </div>
        </div>
    </div>
  )
}

export default ProductCard