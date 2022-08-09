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

    
    const location = useLocation();
    const splitPath = location?.pathname?.split("/");
    const productId = splitPath[splitPath.length - 1];
    const product = mockProducts.filter((prod) => prod.id === productId);
  
    console.log("product", product)
  
  
  
 
  return <>
  <div className="breadcrum">
    <Link to = "/" className="links">Home</Link>
    <div className="arrow"><img src={require("../../assets/arrow.png")} alt="arrow" /></div>
    <Link to = "/donuts" className="links">Donuts</Link>
    <div className="arrow"><img src={require("../../assets/arrow.png")} alt="arrow" /></div>
    <div className="product">Kinder Bueno</div>
  </div>
  <div className="mobileTablet">
    <div className="otherimages">
        <img src={require('../../assets/donut1.png')} className="images" alt='donut'></img>
        <img src={require('../../assets/donut2.png')} className="images" alt='donut'></img>
        <img src={require('../../assets/donut3.png')} className="images" alt='donut'></img>
        <img src={require('../../assets/donut4.png')} className="images" alt='donut'></img>
        <img src={require('../../assets/donut5.png')} className="images" alt='donut'></img>
    </div>
  
     <div className="imgshowcase">
        
     <img src={require('../../assets/arrowimg.png')} alt="arrow" width="40"  height="40" className='normal' />
     <img src={require('../../assets/arrowimg.png')} alt="arrow" width="40"  height="40" className="reverse"/>
 
     </div>
     <div className="imgshowcaseDesktop">
        
     </div>
  
  <div className="about">
  <div className="name">{produs.name}</div>
  <div className="ratingAndReviews">
    <div className="rating">
        <img src={require('../../assets/steaPlina.png')} alt="star" />
        <img src={require('../../assets/steaPlina.png')} alt="star" />
        <img src={require('../../assets/steaPlina.png')} alt="star" />
        <img src={require('../../assets/steaPlina.png')} alt="star" />
        <img src={require('../../assets/steaGoala.png')} alt="empty star" />
    </div>
    <div className="review">
        {produs.numberReviews} REVIEWS
    </div>
    
  </div>
  <div className="price">
        ${produs.price}
    </div>
    <div className="description">
        {produs.description}
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
            {produs.ingredients}
          </div>
          <div className="alergens">
            <h1>ALERGENS</h1>
            {produs.alergens}
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
