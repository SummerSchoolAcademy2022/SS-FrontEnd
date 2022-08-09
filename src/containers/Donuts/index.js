import React from "react";
import { Link } from "react-router-dom";
import "../../containers/App/style.css";

const Donuts = () => {
  const product = "cocoa-donuts"; // or "cocoa-donuts"

  return (
    <>
      <Link to={`/product/${product}`} className="links">
        Kinder Bueno
      </Link>
    </>
  );
};

export default Donuts;
