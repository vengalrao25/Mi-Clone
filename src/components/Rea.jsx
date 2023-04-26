import React from "react";

const Rea = ({ index, src, item }) => {
  return (
    <div>

      <a href={src}>
        <img src={src} alt={`${index} offer`} />
      </a>
      
    </div>
  );
};

export default Rea;
