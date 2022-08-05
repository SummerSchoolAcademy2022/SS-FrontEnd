import React from "react";
import { Link } from "react-router-dom";
import BurgerMenu from './BurgerMenu'
import '../../containers/App/style.css'
function Navbar() {
    return (
      <>

      
      <div className="navbarContainer">
        <div className="tabletView">
          <BurgerMenu/>
        </div>
        <div className="leftContainer">
        <img className="gelatoLogo" src={require("../../assets/logo.png")} alt='Logo'/>{" "}
        <ul className="container">
        
        <li>
            <Link to="/" className="links">Home</Link>
          </li>
          <li>
            <Link to="/donuts" className="links">Donuts</Link>
          </li>
          <li>
            <Link to="/donutsforspecialneeds" className="links">Donuts For Special Needs</Link>
          </li>
          <li>
            <Link to="/gelato" className="links">Gelato</Link>
          </li>
          <li>
            <Link to="/gelatoforspecialneeds" className="links">Gelato For Special Needs</Link>
          </li>
        </ul>
        </div>
        <div className="rightContainer">
          <div className="boxAccount">
            <div className="iconNormal">
            <img src={require("../../assets/account.png")} alt='account'/> 
            </div>
            <div className="iconHover">
              <img src={require('../../assets/accountHover.png')} alt="" />
            </div>
            Account
          </div>
  
          <div className="boxBasket">
            <div className="iconNormal">
            <img src={require("../../assets/basket.png")} alt = 'Basket'/> 
            
            </div>
            <div className="iconHover">
              <img src={require('../../assets/basketHover.png')} alt="" />
              
            </div>
           Basket
          </div>
        </div>
      </div>
      </>
    );
  }
  export default Navbar
