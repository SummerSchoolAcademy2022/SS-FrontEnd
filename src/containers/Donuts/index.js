import React from "react";
import { Link } from "react-router-dom";
import "../../containers/App/style.css";

const Donuts = () => {
  const product = "kinder-bueno"; // or "cocoa-donuts"

  return (
    <>
      <Link to={`/product/${product}`} className="links">
        {product}
      </Link>
    </>
  );
};

export default Donuts;
