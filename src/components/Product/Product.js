import React from "react";
import { Link } from "react-router-dom";
import "../../containers/App/style.css";
import { useState } from "react";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import mockProducts from "./mockProducts";
import { useLocation } from "react-router-dom";

const Product = () => {
  const [counter, setCounter] = useState(1);

  const increaseCounter = () => {
    setCounter((count) => count + 1);
  };

  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };

  const [imgIndex, setImgIndex] = useState(0);

  const increaseIndex = () => {
    if (imgIndex === 4) {
      setImgIndex(0);
    } else {
      setImgIndex((imgIndex) => imgIndex + 1);
    }
  };

  const decreaseIndex = () => {
    if (imgIndex === 0) {
      setImgIndex(4);
    } else {
      setImgIndex((imgIndex) => imgIndex + -1);
    }
  };

  const location = useLocation();
  const splitPath = location?.pathname?.split("/");
  const productId = splitPath[splitPath.length - 1];
  const product = mockProducts.filter((prod) => prod.id === productId);

  const images = [
    require(`../../assets/product-pictures/${product[0].id}/donut1x2.png`),
    require(`../../assets/product-pictures/${product[0].id}/donut2x2.png`),
    require(`../../assets/product-pictures/${product[0].id}/donut3x2.png`),
    require(`../../assets/product-pictures/${product[0].id}/donut4x2.png`),
    require(`../../assets/product-pictures/${product[0].id}/donut5x2.png`),
  ];

  return (
    <>
      <div className="breadcrum">
        <Link to="/" className="links">
          Home
        </Link>
        <div className="arrow">
          <img src={require("../../assets/arrow.png")} alt="arrow" />
        </div>
        <Link to="/donuts" className="links">
          Donuts
        </Link>
        <div className="arrow">
          <img src={require("../../assets/arrow.png")} alt="arrow" />
        </div>
        <div className="product">{product[0].name}</div>
      </div>
      <div className="mobileTablet">
        <div className="otherimagesgroup">
          <div className="otherimages">
            <img
              src={require("../../assets/product-pictures/kinder-bueno/donut1x2.png")}
              className="images"
              alt="donut"
              onClick={() => {
                setImgIndex(0);
              }}
            />
            <img
              src={require("../../assets/product-pictures/kinder-bueno/donut2x2.png")}
              className="images"
              alt="donut"
              onClick={() => {
                setImgIndex(1);
              }}
            />
            <img
              src={require("../../assets/product-pictures/kinder-bueno/donut3x2.png")}
              className="images"
              alt="donut"
              onClick={() => {
                setImgIndex(2);
              }}
            />
            <img
              src={require("../../assets/product-pictures/kinder-bueno/donut4x2.png")}
              className="images"
              alt="donut"
              onClick={() => {
                setImgIndex(3);
              }}
            />
            <img
              src={require("../../assets/product-pictures/kinder-bueno/donut5x2.png")}
              className="images"
              alt="donut"
              onClick={() => {
                setImgIndex(4);
              }}
            />
          </div>
          <div className="imgshowcaseDesktop">
            <img src={images[imgIndex]} alt="donut" className="imageSlide" />
          </div>
          <div className="imgshowcase">
            <img src={images[imgIndex]} alt="donut" className="imageSlide" />
            <div className="pointers">
              <img
                src={require("../../assets/arrowimg.png")}
                alt="arrow"
                width="40"
                height="40"
                className="normal"
                onClick={decreaseIndex}
              />
              <img
                src={require("../../assets/arrowimg.png")}
                alt="arrow"
                width="40"
                height="40"
                className="reverse"
                onClick={increaseIndex}
              />
            </div>
          </div>
        </div>

        <div className="about">
          <div className="name">{product[0].name}</div>
          <div className="ratingAndReviews">
            <div className="rating">
              <img src={require("../../assets/steaPlina.png")} alt="star" />
              <img src={require("../../assets/steaPlina.png")} alt="star" />
              <img src={require("../../assets/steaPlina.png")} alt="star" />
              <img src={require("../../assets/steaPlina.png")} alt="star" />
              <img
                src={require("../../assets/steaGoala.png")}
                alt="empty star"
              />
            </div>
            <div className="review">{product[0].numberReviews} REVIEWS</div>
          </div>
          <div className="price">${product[0].price}</div>
          <div className="description">{product[0].description}</div>

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
            {product[0].ingredients}
          </div>
          <div className="alergens">
            <h1>ALERGENS</h1>
            {product[0].alergens}
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
  );
};

export default Product;
