import React from "react";
import { Link } from "react-router-dom";
import "../App/style.css";
import Card from "./Card";
import TopSellingGelato from "../../components/TopSellingGelato/TopSellingGelato";
import AllProductsGelato from "../../components/AllProducts/AllProductsGelato";
import Banner from "../../components/Banner/Banner";

const Gelato = () => {


  return (
    <>
      
       <Banner bannerText="Gelato"/>
       <TopSellingGelato/>
       <AllProductsGelato/>
    </>
  );
};

export default Gelato;