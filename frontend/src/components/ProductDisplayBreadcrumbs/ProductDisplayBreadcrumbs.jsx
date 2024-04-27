import React from 'react'
import './ProductDisplayBreadcrumbs.css'

const ProductDisplayBreadcrumbs = (props) => {
    const {product} = props;
  return (
    <div className='breadcrumb'>
        HOME `{'->'}` {product.product_category} `{'->'}` {product.product_name} 
    </div>
  )
}

export default ProductDisplayBreadcrumbs