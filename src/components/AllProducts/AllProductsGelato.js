import React from "react";
import "../../containers/App/style.css";
import { gelato } from "../../constants/constants.js";
import Card from "../../containers/Gelato/Card";
import { Link } from "react-router-dom";

const AllProductsGelato= ()=>{
    
    return (
        <>
        <section className="all">
        <h2 id="b">ALL GELATO PRODUCTS</h2>
        <div className="gelatoAll">
          {gelato.productsall.map((gelato, index) => (
            <Link to ={`/product/${gelato.name}`} className ='links' >
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
export default AllProductsGelato;