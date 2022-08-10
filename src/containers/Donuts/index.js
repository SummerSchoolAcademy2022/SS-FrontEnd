import React from "react";
import { Link } from "react-router-dom";
import "../../containers/App/style.css";

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
    </>
  );
};

export default Donuts;
