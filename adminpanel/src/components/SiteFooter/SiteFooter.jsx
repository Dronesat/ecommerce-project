import React from 'react'
import './SiteFooter.css'

const SiteFooter = () => {
  return (
    <div className='sitefooter'>
        <div className='sitefooter-social'>
            <p>Connect with Us</p>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Whatsapp</li>
            </ul>
        </div>
        <div className='sitefooter-about'>
            <p>About Us</p>
            <ul>
                <li>Our Story</li>
                <li>Company</li>
                <li>Offices</li>
                <li>Partners</li>
            </ul>
        </div>
        <div className='sitefooter-help'>
            <p>Help</p>
            <ul>
                <li>FAQ</li>
                <li>Help Center</li>
                <li>Commnutiy Guidelines</li>
            </ul>
        </div>
        <div className='sitefooter-copyright'>
            <hr/>
            <p>2024 @ E-Commerce Limited</p>
        </div>
    </div>
  )
}

export default SiteFooter