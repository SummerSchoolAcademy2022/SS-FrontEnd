import React from "react";
import "../../containers/App/style.css";
import { gelato } from "../../constants/constants.js";
import Card from "../../containers/Gelato/Card";
import { Link } from "react-router-dom";

const TopSellingGelato = ()=>{
    return (
        <>
        <section id="topSelling">
        <h2 id="b">TOP SELLING GELATO</h2>
        <div id="gelatoTop">
          {gelato.products.map((gelato, index) => (
            <Link to ={`/product/${gelato.htmlRef}`} className ='links' >
            <Card
              className="gelato"
              key={index}
              picture={gelato.picture}
              name={gelato.name}
              description={gelato.description}
              price={gelato.price}
            ></Card>
            </Link>
          ))}
        </div>
        </section>
        </>
    )
}
export default TopSellingGelato;