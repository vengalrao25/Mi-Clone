import React from "react";
import "../styles/starProduct.css";

const StarProduct = ({ starProduct }) => {
  return (
    <div>
      <div className="startProduct">
        <div>
          <a href={starProduct[0].url}>
            <img src={starProduct[0].image} alt="1st Product" />
          </a>
        </div>
        <div>
          <a href={starProduct[1].url}>
            <img src={starProduct[1].image} alt="1st Product" />
            <img src={starProduct[2].image} alt="2st Product" />
            <img src={starProduct[3].image} alt="3st Product" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StarProduct;
