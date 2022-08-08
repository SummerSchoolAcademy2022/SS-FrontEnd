import React from "react";
import { Link } from "react-router-dom";
import '../../containers/App/style.css'
import Navbar from "../../components/NavigationBar/NavigationBar";
import { Nav } from "react-bootstrap";
const Donuts = () => {
  return <>
  <Link to="/product" className="links">Donuts</Link>
  </>
};

export default Donuts;
