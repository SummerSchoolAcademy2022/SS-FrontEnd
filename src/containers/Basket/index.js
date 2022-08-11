import React from "react";
import "./style.css";
import { productsAddedToBasket } from  "../Donuts/Card";

function Basket() {

    function showProduct(product) {
        console.log(productsAddedToBasket)
        return <li className="productFromBasket">{product}</li>
    }

    return (
        <ul class="basket" style={{border: "2px solid black"}}>
           {  productsAddedToBasket.forEach(showProduct) }
        </ul>
    );
}

export default Basket;