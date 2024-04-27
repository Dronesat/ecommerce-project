import React from 'react'
import './ProductCard.css'

const ProductCard = (product) => {
  return (
    <div className='product'>
        <img src={product.product_image} alt=''/>
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