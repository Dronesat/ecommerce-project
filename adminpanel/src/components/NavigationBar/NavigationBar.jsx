import React from 'react'
import './NavigationBar.css'
import {useNavigate} from 'react-router-dom'; 

const NavigationBar = () => {
    const navigate = useNavigate();

    const handleAddProductClick = () => {
        navigate('/addproduct');
    };
    
    const handleListProductClick = () => {
        navigate('/listproduct');
    };

  return (
    <div className='navigationbar'>
        <div className='navigationbar-title'>E-Commerce Admin Panel</div>
        <div className='navigationbar-button'>
            <button className='navigationbar-addproduct' onClick={handleAddProductClick}>Add Product</button>
            <button className='navigationbar-listproduct' onClick={handleListProductClick}>Product Listing</button>
        </div>
    </div>
  )
}

export default NavigationBar