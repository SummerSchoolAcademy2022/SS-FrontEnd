import React from "react";
import "../../containers/App/style.css";
const Banner = (props) => {
  const {bannerText: text} = props;
  return ( 
    <>
      <div id="header">
      <div id="header-content">{text}</div>
      </div>
      </>
      );
};

export default Banner;