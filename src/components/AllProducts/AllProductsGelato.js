import React from "react";
import "../../containers/App/style.css";
import { gelato } from "../../constants/constants.js";
import Card from "../../containers/Gelato/Card";


const AllProductsGelato= ()=>{
    
    return (
        <>
        <section className="all">
        <h2 id="b">ALL GELATO PRODUCTS</h2>
        <div className="gelatoAll">
          {gelato.productsall.map((gelato, index) => (
            <Card
              className="gelato"
              key={index}
              picture={gelato.picture}
              name={gelato.name}
              description={gelato.description}
              price={gelato.price}
            ></Card>
          ))}
        </div>
        </section>
        </>
    )
}
export default AllProductsGelato;