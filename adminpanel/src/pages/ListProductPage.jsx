import React, { useEffect, useState } from 'react'
import './CSS/ListProductPage.css'

const ListProductPage = () => {
  const [productList,setProductList] = useState([]);

  const fetchAllProducts = async () => {
    try {
        const response = await fetch('http://localhost:4000/getproductlist');
        const productData = await response.json();
        setProductList(productData);
    } catch (error) {
        console.error("Error fetching products:", error); 
    }
    }
    //Effect hook makes sure fetchAllProducts is executed immediately after the page is rendered for the first time
    useEffect(() => {
      fetchAllProducts();
    }, []);

    const removeProductBtn = async(id) => {
      await fetch('http://localhost:4000/removeproduct',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify({product_id:id})
      })
      await fetchAllProducts();
    }

  return (
    <div className='listproduct'>
      <h1>Product Listings</h1>
      <div className='listproduct-titlerow'>
        <p>Products</p>
        <p>Name</p>
        <p>Category</p>
        <p>Trending</p>
        <p>Original Price</p>
        <p>Sale Price</p>
        <p>Remove</p>
      </div>
      <div className='listproduct-listing'>
        <hr />
        {productList.map((product,index)=>{
          return <div key={index} className="listproduct-main">
            <img className='listproduct-image' src={product.product_image} alt="" />
            <p>{product.product_name}</p>
            <p>{product.product_category}</p>
            <p>{product.product_trending}</p>
            <p>£{product.original_price}</p>
            <p>£{product.sale_price}</p>
            <button onClick={()=>{removeProductBtn(product.product_id)}}>Remove</button>
          </div>
        })}
      </div>
    </div>
  )
}

export default ListProductPage