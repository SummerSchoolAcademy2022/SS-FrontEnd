import React from "react";
import "../App/style.css";

let productsAddedToBasket = []; // array cu objects
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Card(props) {
    const {picture, name, description, price, link} = props;
    console.log("picture=",picture);

    function handleAddToBasket(event) {
      let infoProduct = (event.nativeEvent.path[2].innerText).split("\n");
      let p = new Product(infoProduct[0], infoProduct[4])

      productsAddedToBasket.push( p );
      console.log(productsAddedToBasket);
    }
  
  return (
    <div className="donut">
      <img src={picture} alt="Logo" />
      <h3>{name}</h3>
      <p>{description}</p>
      <h4>{price}</h4>
      <div className="Add" onClick={handleAddToBasket}>
        <a href={link}>Add to basket</a>
      </div>

    </div>
  );
}

export default Card;
export { productsAddedToBasket };