import React, { useContext } from 'react'
import './CSS/ShoppingCartPage.css'
import { EcommerceContext } from '../EcommerceContext/EcommerceContext'

const ShoppingCartPage = () => {
    const {productList, shoppingCart, removeProductFromCart, calculateCartTotal} = useContext(EcommerceContext);
  return (
    <div className='shoppingcart'>
        <div className='shoppingcart-titlerow'>
            <p>Products</p>
            <p>Name</p>
            <p>Product Price</p>
            <p>Quanity</p>
            <p>Total Price</p>
            <p>Remove Product</p>
        </div>
        <hr />
        {productList.map((product)=>{
            if(shoppingCart[product.product_id] > 0)
            {
                return <div>
                <div className='shoppingcart-productlisting'>
                    <img className='shoppingcart-productlisting-icon' src={product.product_image} alt="" />
                    <p>{product.product_name}</p>
                    <p>£{product.sale_price}</p>
                    <p className='shoppingcart-productlisting-quantity'>{shoppingCart[product.product_id]}</p>
                    <p>£{product.sale_price * shoppingCart[product.product_id]}</p>
                    <button className='shoppingcart-productlisting-remove' onClick={()=>{removeProductFromCart(product.product_id)}}>Remove</button>
                </div>
                <hr />
            </div>
            } return null;
        })}
        <div className='shoppingcart-bottom'>
            <div className='shoppingcart-total'>
                <h1>SUMMARY</h1>
                <div>
                    <div className='shoppingcart-subtotal'>
                        <p>Subtotal</p>
                        <p>£{calculateCartTotal()}</p>
                    </div>
                    <hr />
                    <div className='shoppingcart-shipping'>
                        <p>Delivery Fee</p>
                        <p>£{0}</p>
                    </div>
                    <hr />
                    <div className='shoppingcart-totalprice'>
                        <h3>TOTAL</h3>
                        <h3>£{calculateCartTotal()}</h3>
                    </div>
                    <button>CHECKOUT</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShoppingCartPage