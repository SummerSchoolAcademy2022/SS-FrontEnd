import BurgerMenu from './BurgerMenu'

function MobileNavbar(){
 
 


    
    return (
         
       
    <div className='mobileNav'>
       
      
      <ul className = 'navBar'>
        <li className='item'>
         <BurgerMenu/>
          Menu
        </li>
        
        <li>
      
        <img src={require('../../assets/logo.png')} alt="Logo" />
      
        </li>
  
      <li className='item'>
      
      <img src={require("../../assets/basket.png")} alt="basket" id ='basket'/>
      Basket
      
      </li>
      </ul>
    
      </div>
    );
  }


  export default MobileNavbar;