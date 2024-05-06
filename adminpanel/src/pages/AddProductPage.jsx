import React, {useState} from 'react'
import './CSS/AddProductPage.css'
import upload_image_thumbnail from '../assets/upload_image_thumbnail.svg'

const AddProductPage = () => {
  const [image,setImage] = useState(false);
  const imageUploadHandler = (e) => {
    const file = e.target.files[0];
    if (image) { // If there was a previous image
        URL.revokeObjectURL(image); 
    }
    setImage(file);
  }

  //Track the values enter into form input field 
  const [productDetails,setProductDetails] = useState({
    product_name:"",
    product_image:"",
    product_category:"men",
    original_price:"",
    sale_price:"",
    product_trending:"no",
    product_description:""
  });
  const inputChangeHandler = (e) => {
    setProductDetails({...productDetails,[e.target.name]:e.target.value})
  }

  const addProductToDatabase = async () => {
    try {
        // 1. Upload Image
        const imageFormData = new FormData();
        imageFormData.append('product', image);
  
        const imageUploadResponse = await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json', 
            },
            body: imageFormData,
        });
        const imageUploadData = await imageUploadResponse.json();
  
        if (!imageUploadData.success) {
            throw new Error('Image upload failed'); 
        }
  
        // 2. Add Product Details (with Image URL)
        const productWithImage = { 
            ...productDetails,
            product_image: imageUploadData.image_url
        };
  
        const addProductResponse = await fetch('http://localhost:4000/addproduct', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(productWithImage),
        });
  
        const productSaveData = await addProductResponse.json();
  
        if (productSaveData.success) {
            alert("Product Added to Database");
        } else {
            alert("Product Added to Database: FAILED");
        }
      } catch (error) {
          console.error("Error adding product:", error);
          alert("Error adding product. Check console for details.");
      }
    }
    
  return (
    <div className='addproduct'>
      <h1>Add New Product</h1>
      <div className='addproduct-name'>
        <p>Product Name</p>
        <input value={productDetails.product_name} onChange={inputChangeHandler} type="text" name='product_name' placeholder='Enter Product Name'/>
      </div>
      <div className='addproduct-price'>
        <div className='addproduct-originalprice'>
          <p>Original Price</p>
          <input value={productDetails.original_price} onChange={inputChangeHandler} type="text" name='original_price' placeholder='Enter Original Price'/>
        </div>
        <div className='addproduct-saleprice'>
          <p>Sale Price</p>
          <input value={productDetails.sale_price} onChange={inputChangeHandler} type="text" name='sale_price' placeholder='Enter Sale Price'/>
        </div>
      </div>
      <div className='addproduct-category'>
        <p>Product Category</p>
        <select value={productDetails.product_category} onChange={inputChangeHandler} name="product_category" className='addproduct-category-selector'>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className='addproduct-trending'>
        <p>Product Trending Status</p>
        <select value={productDetails.product_trending} onChange={inputChangeHandler} name="product_trending" className='addproduct-trending-selector'>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      <div className='addproduct-description'>
        <p>Product Description</p>
        <input value={productDetails.product_description} onChange={inputChangeHandler} type="text" name='product_description' placeholder='Enter Product Description'/>
      </div>
      <div className='addproduct-image'>
        <label htmlFor="file-input" className='addproduct-image-input'>
        <img className='addproduct-image-thumbnail' 
          src={image ? URL.createObjectURL(image) : upload_image_thumbnail} 
          alt="" />
        </label>
        <input onChange={imageUploadHandler} type="file" name='image' id='file-input' hidden/>
      </div>
      <button onClick={()=>{addProductToDatabase()}} className='addproduct-button'>Add Product</button>
    </div>
  )
}

export default AddProductPage