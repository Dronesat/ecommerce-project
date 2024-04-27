import React from 'react'
import './ProductDisplayReview.css'
import rating_star_bright from '../../Assets/rating_star_bright.png'
import rating_star_dark from '../../Assets/rating_star_dark.png'

const ProductDisplayReview = () => {
  return (
    <div className='productdisplayreview'>
        <div className='productdisplayreview-overall'>
            <h1>Customer Overall Rating: </h1>
            <h1>4 out of 5 </h1>
            <div className='productdisplayreview-overall-ratingstar' >
                <img src={rating_star_bright} alt="" />
                <img src={rating_star_bright} alt="" />
                <img src={rating_star_bright} alt="" />
                <img src={rating_star_bright} alt="" />
                <img src={rating_star_dark} alt="" />
            </div>
        </div>
        <hr />
        <div className='productdisplayreview-first'>
            <div className='productdisplayreview-first-ratingstar' >
                <img src={rating_star_bright} alt="" />
                <img src={rating_star_bright} alt="" />
                <img src={rating_star_bright} alt="" />
                <img src={rating_star_bright} alt="" />
                <img src={rating_star_dark} alt="" />
            </div>
            
            <div className='productdisplayreview-first-name'>Adam Smith</div>
            <div className='productdisplayreview-first-title'>Great Quality for the Price</div>
            <div className='productdisplayreview-first-review'>This shirt is soft, the color looks just like the picture, and it fits well. Very pleased with my purchase, especially for the price! </div>
            <div className="review-date-verified"> 
                <div>Review Date: 15/02/2024</div>
                <span className="verified-purchase">Verified Purchase</span> 
            </div>
        </div>
        <hr />
        <div className='productdisplayreview-second'>
            <div className='productdisplayreview-second-ratingstar' >
                <img src={rating_star_bright} alt="" />
                <img src={rating_star_bright} alt="" />
                <img src={rating_star_bright} alt="" />
                <img src={rating_star_bright} alt="" />
                <img src={rating_star_dark} alt="" />
            </div>
            <div className='productdisplayreview-second-name'>John Lewis</div>
            <div className='productdisplayreview-second-title'>Bought this for my sister, and she loves it!</div>
            <div className='productdisplayreview-second-review'>Wasn't expecting much for the price, but this item has exceeded my expectations. It's held up really well, even with regular use. Definitely recommend!</div>
            <div className="review-date-verified"> 
                <div>Review Date: 22/3/2024</div>
                <span className="verified-purchase">Verified Purchase</span> 
            </div>
        </div>
    </div>
  )
}

export default ProductDisplayReview