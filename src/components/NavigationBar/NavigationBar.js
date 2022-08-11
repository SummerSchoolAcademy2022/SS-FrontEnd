import React from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import "../../containers/App/style.css";
import Logo from "../../assets/logo.png";
import Account from "../../assets/account.png";
import AccountHover from "../../assets/accountHover.png";
import Basket from "../../assets/basket.png";
import BasketHover from "../../assets/basketHover.png";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const redirectBasket = () => {
    navigate('/basket');
  }

  const redirectAccount = () => {
    navigate('/account');
  }

  return (
    <>
      <div className="navbarContainer">
        <div className="tabletView">
          <BurgerMenu />
        </div>
        <div className="leftContainer">
          <Link to="/" className="links">
            <img
              className="gelatoLogo"
              src={Logo}
              alt="Logo"
            />
          </Link>
          <ul className="container">
            {/* We do not have Home page on Desktop, for Home we will use the logo and Gelato & Donuts. */}
            {/* <li>
            <Link to="/" className="links">Home</Link>
          </li> */}
            <li>
              <Link to="/donuts" className="links">
                Donuts
              </Link>
            </li>
            <li>
              <Link to="/donutsforspecialneeds" className="links">
                Donuts For Special Needs
              </Link>
            </li>
            <li>
              <Link to="/gelato" className="links">
                Gelato
              </Link>
            </li>
            <li>
              <Link to="/gelatoforspecialneeds" className="links">
                Gelato For Special Needs
              </Link>
            </li>
          </ul>
        </div>
        <div className="rightContainer">
          <div className="boxAccount" onClick={redirectAccount}>
            <div className="iconNormal">
              <img src={Account} alt="account" />
            </div>
            <div className="iconHover">
              <img src={AccountHover} alt="" />
            </div>
            Account
          </div>

          <div className="boxBasket" onClick={redirectBasket}>
            <div className="iconNormal">
              <img src={Basket} alt="Basket" />
            </div>
            <div className="iconHover">
              <img src={BasketHover} alt="" />
            </div>
            Basket
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
