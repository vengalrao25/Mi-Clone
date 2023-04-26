import React from 'react'
// import Offer from './Offer.jsx'
import Rea from '../components/Rea.jsx';
import '../styles/Offers.css'
// import Offer from './Offer.jsx';

const Offers = ({offer}) => {
  return (
    
    <div className='offerSection'> 

        {
        offer.map((item,index)=>(
           
 <Rea  key ={item.image} index={index} src={item.image}  link={item.url}   /> 
// {/* <Offer key ={item.image} index={index} src={item.image}  link={item.url}  /> */}
        // <a href={item.image} >
        // <img src={item.image} alt={`${index} offer`} />
        //  </a>


            
        )  )
        }      
    </div>
  )
}

export default Offers
