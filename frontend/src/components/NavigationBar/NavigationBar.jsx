import React, { useContext } from 'react';
import './NavigationBar.css'; 
import { Link, useNavigate } from 'react-router-dom'; 
import { EcommerceContext } from '../../EcommerceContext/EcommerceContext';


const NavigationBar = () => {
    const navigate = useNavigate();
    const {calculateTotalProductInCart} = useContext(EcommerceContext);

  const handleAccountClick = () => {
    navigate('/account');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  const isLoggedIn = localStorage.getItem('auth-token') !== null;
  function handleAuthClick() {
    if (localStorage.getItem('auth-token') !== null) {
      // User is logged in
      localStorage.removeItem('auth-token');
      window.location.replace('/home'); 
      alert("Logged Out");
    } else {
      // User is not logged in
      handleAccountClick(); 
    }
  }

  return (
    <nav className="navigationbar">
      <Link to="/home" className="navigationbar-title">
          The E-Commerce Project
        </Link>

        <ul className="navigation-links">
          <li>
            <Link to="/home">HomePage</Link>
          </li>
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
          <li>
            <Link to="/kid">Kid</Link>
          </li>
        </ul>

        <div className="navigation-account-cart"> 
            <button onClick={handleAuthClick}>
              {isLoggedIn ? 'Account Logout' : 'Account Login'} 
            </button>
            <button className="navigation-cart" onClick={handleCartClick}>Cart</button> 
            <p className='navigation-cart-count'>{calculateTotalProductInCart()}</p>
        </div>
    </nav>
  );
};

export default NavigationBar;