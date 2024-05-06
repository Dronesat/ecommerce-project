import React, { useContext } from 'react'
import './ProductDisplayDetail.css'
import rating_star_bright from '../../Assets/rating_star_bright.png'
import rating_star_dark from '../../Assets/rating_star_dark.png'
import { EcommerceContext } from '../../EcommerceContext/EcommerceContext'

const ProductDisplayDetail = (props) => {
    const {product} = props;
    const {addProductToCart} = useContext(EcommerceContext);

    const handleAddToCart = () => {
        if (localStorage.getItem('auth-token')) {
            addProductToCart(product.product_id);
        } else {
            alert("Please Login before proceed");
        }
    }

  return (
    <div className='productdisplaypage'>
        <div className='productdisplaypage-left'>
            <img src={product.product_image} alt="" />
        </div>
        <div className='productdisplaypage-right'>
            <h1>{product.product_name}</h1>
            <div className='productdisplaypage-right-ratingstar' >
                <img src={rating_star_bright} alt="" />
                <img src={rating_star_bright} alt="" />
                <img src={rating_star_bright} alt="" />
                <img src={rating_star_bright} alt="" />
                <img src={rating_star_dark} alt="" />
                <p>(25) Reviews</p>
            </div>
            <div className='productdisplaypage-right-prices'>
                <div className='productdisplay-right-original-price'>
                    Original Price: £{product.original_price}
                </div>
                <div className='productdisplaypage-right-sale-price'>
                    Sale Price: £{product.sale_price}
                </div>
            </div>
            <div className='productdisplaypage-right-description'>
                {product.product_description}
            </div>
            <div className='productdisplaypage-right-sizing'>
                <h1>Size:</h1>
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
            </div>
            <hr />
            <button onClick={handleAddToCart} className='productdisplaypage-right-addcart'>
                ADD TO SHOPPING CART
            </button>
        </div>
    </div>
  )
}

export default ProductDisplayDetail