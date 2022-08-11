import React from "react";
import "../App/style.css";
function Card(props) {
    const {picture, name, description, price, link} = props;
    console.log("picture=",picture)
  
  return (
    <div className="gelato">
      <img src={picture} alt="Logo" />
      <h3>{name}</h3>
      <p>{description}</p>
      <h4>{price}</h4>
      <div className="Add">
        <a href={link}>Add to basket</a>
      </div>

    </div>
  );
}

export default Card;