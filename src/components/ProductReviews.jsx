import React from 'react'
import ProductReviewCard from './ProductReviewCard.jsx';
import "../styles/ProductReviews.css";

const ProductReviews = ({productReviews}) => {
  return (
    <div className='ProductReviews'>
        {
            productReviews.map((item,index)=>(
                <ProductReviewCard price ={item.price} image={item.image} review={item.review} name={item.name}/>
            ))
        }
      
    </div>
  )
}

export default ProductReviews
