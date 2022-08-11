import React from "react";
import { Link } from "react-router-dom";
import "../App/style.css";
import { donuts } from "../../constants/constants.js";
import Card from "./Card";
import TopSellingDonuts from "../../components/TopSellingDonuts/TopSellingDonuts";
import AllProducts from "../../components/AllProducts/AllProducts";
import Banner from "../../components/Banner/Banner";
const Donuts = () => {
  const product1 = "kinder-bueno";
  const product1Name = "Kinder Bueno";
  const product2 = "cocoa-donuts";
  const product2Name = "Cocoa Donuts";

  return (
    <>
      <Link to={`/product/${product1}`} className="links">
        {product1Name}
      </Link>
      <br />
      <Link to={`/product/${product2}`} className="links">
        {product2Name}
      </Link>
       <Banner bannerText="Donuts"/>
       <TopSellingDonuts/>
       <AllProducts/>
    </>
  );
};

export default Donuts;
