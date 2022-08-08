import { Link } from "react-router-dom";
import '../../containers/App/style.css'
import { useState } from 'react';
const BurgerMenu = () =>{

  const [display,setState] = useState("none");
  const isClosed = () =>{
    if(setState(display) === "none")
    {setState("none");}
    else{ 
      setState("flex");}
  }
  const isOpen = () =>{
    if(setState(display) === "none")
    {setState("flex");}
    else{ 
      setState("none");}

  }


    return(
    <div className='cont'>
     <img src={require('../../assets/burger.png')} alt='menu' onClick={isClosed}/>
     <nav className='burgerMenu' style={{display:display}}>
     <div className="closeButton">
      <img src={require('../../assets/close.png')} alt="close" width='24' height='24' onClick={isOpen}/>
      </div> 
      <div className="menu">
      <h1><b>MENU</b></h1>
      </div>
      <div className="content" id='contentNav'>
        <ul>
          <li>
          <Link to="/" className="links">HOME</Link>
          </li>
          
          <li>
          <Link to="/gelato" className="links">GELATO</Link>
          </li>
          
          <li>
          <Link to="/gelatoforspecialneeds" className="links">GELATO FOR SPECIAL NEEDS</Link>
          </li>
          
          <li>
          <Link to="/donuts" className="links">DONUTS</Link>
          </li>
          
          <li>
          <Link to="/donutsforspecialneeds" className="links">DONUTS FOR SPECIAL NEEDS</Link>
          </li>
        
        </ul>

      </div>
      <div className="account" id='accountNav'>
        <img src={require('../../assets/account.png')} alt="account" />
        Account
      </div>
      <div className="basket" id='basketNav'>
       
        <img src={require("../../assets/basket.png")} alt="basket" />
       
        Basket
      </div>
      <div className="darken"></div>
     </nav>
     
    </div>
  );
  }
export default BurgerMenu