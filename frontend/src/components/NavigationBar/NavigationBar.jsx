import React from 'react';
import './NavigationBar.css'; 
import { Link, useNavigate } from 'react-router-dom'; 


const NavigationBar = () => {
    const navigate = useNavigate();

  const handleAccountClick = () => {
    navigate('/account');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <nav className="navigationbar">
      <Link to="/home" className="navigationbar-title">
          E-Commerce Website 
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
            <button className="navigation-account" onClick={handleAccountClick}>Account</button> 
            <button className="navigation-cart" onClick={handleCartClick}>Cart</button> 
        </div>
    </nav>
  );
};

export default NavigationBar;