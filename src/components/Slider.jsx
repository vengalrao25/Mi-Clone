import React from "react";

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({data1}) => {
  return (
    <>
      <Carousel>
    {
    data1.map((item)=>(

      <Carousel.Item>
        <img src={item} className="d-block w-100"  alt="" />
      </Carousel.Item>
      

    ))
    
    }

    </Carousel> 
    

    </>
  );
};

export default Slider;



