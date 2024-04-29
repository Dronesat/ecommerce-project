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
  return (
    <div className='addproduct'>
      <h1>Add Product to Website</h1>
      <div className='addproduct-name'>
        <p>Product Name</p>
        <input type="text" name='' placeholder='Enter Product Name'/>
      </div>
      <div className='addproduct-price'>
        <div className='addproduct-originalprice'>
          <p>Original Price</p>
          <input type="text" name='original_price' placeholder='Enter Original Price'/>
        </div>
        <div className='addproduct-saleprice'>
          <p>Sale Price</p>
          <input type="text" name='sale_price' placeholder='Enter Sale Price'/>
        </div>
      </div>
      <div className='addproduct-category'>
        <p>Product Category</p>
        <select name="category" className='addproduct-category-selector'>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className='addproduct-trending'>
        <p>Product Trending Status</p>
        <select name="trending" className='addproduct-trending-selector'>
          <option value="false">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      <div className='addproduct-description'>
        <p>Product Description</p>
        <input type="text" name='product_description' placeholder='Enter Product Description'/>
      </div>
      <div className='addproduct-image'>
        <label htmlFor="file-input" className='addproduct-image-input'>
        <img className='addproduct-image-thumbnail' 
          src={image ? URL.createObjectURL(image) : upload_image_thumbnail} 
          alt="" />
        </label>
        <input onChange={imageUploadHandler} type="file" name='image' id='file-input' hidden/>
      </div>
      <button className='addproduct-button'>Add Product</button>
    </div>
  )
}

export default AddProductPage