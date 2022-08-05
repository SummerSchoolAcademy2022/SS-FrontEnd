import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <h1>Navigation Bar</h1>
      <div className="link-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/donuts">Donuts</Link>
          </li>
          <li>
            <Link to="/donutsforspecialneeds">Donuts For Special Needs</Link>
          </li>
          <li>
            <Link to="/gelato">Gelato</Link>
          </li>
          <li>
            <Link to="/gelatoforspecialneeds">Gelato For Special Needs</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
