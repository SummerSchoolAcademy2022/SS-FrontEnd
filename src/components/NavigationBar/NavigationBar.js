import MobileNavbar from "./MobileNavbar";
import BurgerMenu from './BurgerMenu'
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
        
          <li>Gelato</li>
          <li>Gelato for special needs</li>
          <li>Donuts</li>
          <li>Donuts for special needs</li>
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
            <img src={require("../../assets/basket.png")} alt = 'Basket'/> Basket
          </div>
        </div>
      </div>
      </>
    );
  }

export default Navbar