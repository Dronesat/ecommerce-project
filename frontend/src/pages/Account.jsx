import React from 'react'
import './CSS/Account.css'
import { useState } from 'react'

const Account = () => {
    const [customerData,setCustomerData] = useState({
        customer_name:"",
        customer_password:"",
        customer_email:""
    })

    const handleCustomerInputChange = (event) => {
        const { name, value } = event.target; 
      
        setCustomerData((prevCustomerData) => ({
            ...prevCustomerData,
            [name]: value
        }));
      };

    const accountLogin = async () => {
        console.log("Login",customerData);
        try {
            // Send a POST request to the login endpoint
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json', // Indicate we expect a JSON response
                    'Content-Type': 'application/json' // Specify our data is JSON
                },
                body: JSON.stringify(customerData) // Convert customer data to JSON for sending
            });
    
            // Parse the JSON response from the server
            const registrationData = await response.json(); 
    
            // If registration was successful
            if (registrationData.success) {
                // Store the authentication token in local storage 
                localStorage.setItem('auth-token', registrationData.token);
                window.location.replace("/home");
                alert("Logged In Successfully, Welcome Back");
     
            } else {
                alert(registrationData.errors);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('Registration failed. Please try again.'); 
        }
    }

    const accountRegister = async () => {
        console.log("Register", customerData);
        try {
            // Send a POST request to the registration endpoint
            const response = await fetch('http://localhost:4000/signup', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json', // Indicate we expect a JSON response
                    'Content-Type': 'application/json' // Specify our data is JSON
                },
                body: JSON.stringify(customerData) // Convert customer data to JSON for sending
            });
    
            // Parse the JSON response from the server
            const registrationData = await response.json(); 
    
            // If registration was successful
            if (registrationData.success) {
                // Store the authentication token in local storage 
                localStorage.setItem('auth-token', registrationData.token);
                window.location.replace("/home");
                alert("Account Registered Successfully");
     
            } else {
                alert(registrationData.errors);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('Registration failed. Please try again.'); 
        }
    };
    

  return (
    <div className='account'>
        <div className='account-login'>
            <h1>Login to Existing Account</h1>
            <div className='account-login-email'>
                <p>Email</p> 
                <input name='customer_email' value={customerData.customer_email} onChange={handleCustomerInputChange} type='email' placeholder='E-Mail Address'/>
            </div>
            <div className='account-login-password'>
                <p>Password</p>
                <input name='customer_password' value={customerData.customer_password} onChange={handleCustomerInputChange} type='password' placeholder='Password'/>
            </div>
            <button onClick={()=>{accountLogin()}}>LOGIN</button>
        </div>
        <div className='account-register'>
            <h1>Register New Account</h1>
            <div className='account-register-name'>
                <p>Name</p> 
                <input name='customer_name' value={customerData.customer_name} onChange={handleCustomerInputChange} type='name' placeholder='Your Name'/>
            </div>
            <div className='account-register-email'>
                <p>Email</p> 
                <input name='customer_email' value={customerData.customer_email} onChange={handleCustomerInputChange} type='email' placeholder='E-Mail Address'/>
            </div>
            <div className='account-register-password'>
                <p>Password</p>
                <input name='customer_password' value={customerData.customer_password} onChange={handleCustomerInputChange} type='password' placeholder='Password'/>
            </div>
            <button onClick={()=>{accountRegister()}}>REGISTER</button>
        </div>
    </div>
  )
}

export default Account 