import React from "react";
import "../../containers/App/style.css";
import { donuts } from "../../constants/constants.js";
import Card from "../../containers/Donuts/Card";
import { Link } from "react-router-dom";

const TopSellingDonuts = ()=>{
    
    return (
        <>
        <div className="topSellingDiv">
        <h2 id="b">TOP SELLING DONUTS</h2>
        </div>
        <section id="topSelling">
        <div id="donutsTop">
          {donuts.products.map((donut, index) => (
            <Link to ={`/product/${donut.name}`} className ='links' >
            <Card
              className="donut"
              key={index}
              picture={donut.picture}
              name={donut.name}
              description={donut.description}
              price={donut.price}
            ></Card>
            </Link>
          ))}
        </div>
        </section>
        </>
    )
}
export default TopSellingDonuts;