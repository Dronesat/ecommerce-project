import React, {useContext} from 'react'
import './Trending.css'
import ProductCard from '../ProductCard/ProductCard'
import { EcommerceContext } from '../../EcommerceContext/EcommerceContext'

const Trending = (props) => {
  const {productList} = useContext(EcommerceContext);
  const trendingStatus = 'yes';
  return (
    <div className='trending'>
        <hr/>
        <h1>{props.title}</h1>
        <hr/>
        <div className='trending-products'>
            {productList.map((product,i)=>{
              if (props.category === product.product_category && trendingStatus === product.product_trending){
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
    </div>
  )
}

export default Trending