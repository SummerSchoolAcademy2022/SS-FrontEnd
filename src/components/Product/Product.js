import React from "react";
import { Link } from "react-router-dom";
import "../../containers/App/style.css";
import { useState } from "react";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import mockProducts from "./mockProducts";
import { useLocation } from "react-router-dom";



const Product = () => {
    const [counter, setCounter] = useState(0);
    
    const increaseCounter = () =>{
        setCounter (count => count + 1);
    };
    
    const decreaseCounter = () =>{
      if(counter > 0){
        setCounter(count => count -1); }
    };

    const [imgIndex, setImgIndex] = useState(0);

   const increaseIndex = () =>{
    if(imgIndex === 4) {setImgIndex(0)}
    else{setImgIndex(imgIndex => imgIndex + 1)}
   }
   
   const decreaseIndex = () =>{
    if(imgIndex === 0){setImgIndex(4)}
    else{
        setImgIndex(imgIndex => imgIndex + -1)
    }
   }
  
   const images = [require('../../assets/donut1x2.png'),
   require('../../assets/donut2x2.png'),
   require('../../assets/donut3x2.png'),
   require('../../assets/donut4x2.png'),
   require('../../assets/donut5x2.png')]
  
   const location = useLocation();
   const splitPath = location?.pathname?.split("/");
   const productId = splitPath[splitPath.length - 1];
   const product = mockProducts.filter((prod) => prod.id === productId);
 
  return <>
  <div className="breadcrum">
    <Link to = "/" className="links">Home</Link>
    <div className="arrow"><img src={require("../../assets/arrow.png")} alt="arrow" /></div>
    <Link to = "/donuts" className="links">Donuts</Link>
    <div className="arrow"><img src={require("../../assets/arrow.png")} alt="arrow" /></div>
    <div className="product">Kinder Bueno</div>
  </div>
  <div className="mobileTablet">
    <div className="otherimagesgroup">
        <div className="otherimages">
        <img src={require('../../assets/donut1.png')} className="images" alt='donut' onClick={()=>{setImgIndex(0);}}/>
        <img src={require('../../assets/donut2.png')} className="images" alt='donut'  onClick={()=>{setImgIndex(1);}}/>
        <img src={require('../../assets/donut3.png')} className="images" alt='donut' onClick={()=>{setImgIndex(2);}}/>
        <img src={require('../../assets/donut4.png')} className="images" alt='donut' onClick={()=>{setImgIndex(3);}}/>
        <img src={require('../../assets/donut5.png')} className="images" alt='donut' onClick={()=>{setImgIndex(4);}}/>
        </div>
        <div className="imgshowcaseDesktop">
     <img src={images[imgIndex]} alt="donut" className="imageSlide" />
     </div>
        <div className="imgshowcase">
     <img src={images[imgIndex]} alt="donut" className="imageSlide" />
     <div className="pointers">
     <img src={require('../../assets/arrowimg.png')} alt="arrow" width="40"  height="40" className='normal' onClick={decreaseIndex} />
     <img src={require('../../assets/arrowimg.png')} alt="arrow" width="40"  height="40" className="reverse" onClick={increaseIndex}/>
     </div>
     </div>
     
    </div>
  
     
  
     

  
  <div className="about">
  <div className="name"></div>
  <div className="ratingAndReviews">
    <div className="rating">
        <img src={require('../../assets/steaPlina.png')} alt="star" />
        <img src={require('../../assets/steaPlina.png')} alt="star" />
        <img src={require('../../assets/steaPlina.png')} alt="star" />
        <img src={require('../../assets/steaPlina.png')} alt="star" />
        <img src={require('../../assets/steaGoala.png')} alt="empty star" />
    </div>
    <div className="review">
         REVIEWS
    </div>
    
  </div>
  <div className="price">
       
    </div>
    <div className="description">
       
    </div>

          <div className="quantityAndBasket">
            <div className="quantity">
              <div className="box1" onClick={decreaseCounter}>
                <img src={require("../../assets/-.png")} alt="-" />
              </div>
              <div className="box2">{counter}</div>
              <div className="box3" onClick={increaseCounter}>
                <img src={require("../../assets/+.png")} alt="+" />
              </div>
            </div>
            <button className="addBasket">Add to basket</button>
          </div>
          <div className="ingredients">
            <h1>INGREDIENTS:</h1>
            
          </div>
          <div className="alergens">
            <h1>ALERGENS</h1>
          
          </div>
          <div className="share">
            <h1>SHARE WITH YOUR FRIENDS</h1>
            <div className="socials">
              <FiFacebook className="facebook" />
              <AiOutlineInstagram className="instagram" />
            </div>
          </div>
        </div>
      </div>
    </>
  
};

export default Product;
