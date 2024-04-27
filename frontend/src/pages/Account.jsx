import React from 'react'
import './CSS/Account.css'
const Account = () => {
  return (
    <div className='account'>
        <div className='account-login'>
            <h1>Login to existing account</h1>
            <div className='account-login-email'>
                <p>Email</p> 
                <input type='email' placeholder='E-Mail Address'/>
            </div>
            <div className='account-login-password'>
                <p>Password</p>
                <input type='password' placeholder='Password'/>
            </div>
            <button>LOGIN</button>
        </div>
        <div className='account-register'>
            <h1>Register new account</h1>
            <div className='account-register-name'>
                <p>Name</p> 
                <input type='name' placeholder='Your Name'/>
            </div>
            <div className='account-register-email'>
                <p>Email</p> 
                <input type='email' placeholder='E-Mail Address'/>
            </div>
            <div className='account-register-password'>
                <p>Password</p>
                <input type='password' placeholder='Password'/>
            </div>
            <button>REGISTER</button>
        </div>
    </div>
  )
}

export default Account 