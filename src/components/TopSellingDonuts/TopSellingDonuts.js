import React from "react";
import "../../containers/App/style.css";
import { donuts } from "../../constants/constants.js";
import Card from "../../containers/Donuts/Card";


const TopSellingDonuts = ()=>{
    
    return (
        <>
        <section id="topSelling">
        <h2 id="b">TOP SELLING DONUTS</h2>
        <div id="donutsTop">
          {donuts.products.map((donut, index) => (
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
export default TopSellingDonuts;