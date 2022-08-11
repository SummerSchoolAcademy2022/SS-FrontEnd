import React from "react";
import "../../containers/App/style.css";
import  donuts  from "../../constants/constants.js";
import Card from "../../containers/Donuts/Card";


const AllProducts= ()=>{
    
    return (
        <>
        <section className="all">
        <h2 id="b">ALL DONUTS PRODUCTS</h2>
        <div className="donutsAll">
          {donuts.productsall.map((donut, index) => (
            <Card
              className="donut"
              key={index}
              picture={donut.picture}
              name={donut.name}
              description={donut.description}
              price={donut.price}
            ></Card>
          ))}
        </div>
        </section>
        </>
    )
}
export default AllProducts;