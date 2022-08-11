import { Link } from "react-router-dom";
import "../../containers/App/style.css";
import { useState } from "react";
import Burger from "../../assets/burger.png";
import Close from "../../assets/close.png";
import Account from "../../assets/account.png";
import Basket from "../../assets/basket.png";

const BurgerMenu = () => {
  const [display, setState] = useState("none");
  const isClosed = () => {
    if (display === "none") {
      setState("none");
    } else {
      setState("flex");
    }
  };
  const isOpen = () => {
    if (display === "none") {
      setState("flex");
    } else {
      setState("none");
    }
  };

  return (
    <div className="cont">
      <img
        src={Burger}
        alt="menu"
        onClick={isOpen}
      />
      <nav className="burgerMenu" style={{ display: display }}>
        <div className="closeButton">
          <img
            src={Close}
            alt="close"
            width="24"
            height="24"
            onClick={isOpen}
          />
        </div>
        <div className="menu">
          <h1>
            <b>MENU</b>
          </h1>
        </div>
        <div className="content" id="contentNav">
          <ul>
            {/* Add onClick={isOpen} to each link so that the BurgerMenu closes when a page is clicked. */}
            <li>
              <Link to="/" className="links" onClick={isOpen}>
                HOME
              </Link>
            </li>

            <li>
              <Link to="/gelato" className="links" onClick={isOpen}>
                GELATO
              </Link>
            </li>

            <li>
              <Link
                to="/gelatoforspecialneeds"
                className="links"
                onClick={isOpen}
              >
                GELATO FOR SPECIAL NEEDS
              </Link>
            </li>

            <li>
              <Link to="/donuts" className="links" onClick={isOpen}>
                DONUTS
              </Link>
            </li>

            <li>
              <Link
                to="/donutsforspecialneeds"
                className="links"
                onClick={isOpen}
              >
                DONUTS FOR SPECIAL NEEDS
              </Link>
            </li>
          </ul>
        </div>
        <div className="account" id="accountNav">
          <img src={Account} alt="account" />
          Account
        </div>
        <div className="basket" id="basketNav">
          <img src={Basket} alt="basket" />
          Basket
        </div>
        <div className="darken"></div>
      </nav>
    </div>
  );
};
export default BurgerMenu;
