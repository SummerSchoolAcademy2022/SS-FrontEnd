import React from "react";
import "../ProductSection/style.css";
import ProductSection from "../ProductSection/ProductSection";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import Gelato from "../../assets/Group_1443.png";
import Donuts from "../../assets/Group_1444.png";
import Family from "../../assets/Group_1445.png";

import useScreenSize from "../../hooks/useScreenSize";

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: {
    items: 3,
  },
  600: {
    items: 1,
  },
};

const items = [
    <ProductSection name="ICE CREAM & GELATO" src={Gelato} onDragStart={handleDragStart} />,
    <ProductSection name="DELICIOUS DONUTS" src={Donuts} onDragStart={handleDragStart} />,
    <ProductSection name="FAMILY / CORPORATE" src={Family} onDragStart={handleDragStart} />
];

const ComponentDesktopCarousel = () => {
  return (
    <div className="section-row">
      <ProductSection name="ICE CREAM & GELATO" src={Gelato} />
      <ProductSection name="DELICIOUS DONUTS" src={Donuts} />
      <ProductSection name="FAMILY / CORPORATE" src={Family} />
    </div>
  );
};

function ComponentCarousel() {
console.log(useScreenSize());
    if (useScreenSize() < 768) {
        return (<AliceCarousel  style={{border: "none"}}
                    mouseTracking
                    disableDotsControls
                    disableButtonsControls
                    autoWidth
                    responsive={responsive}
                    items={items}
                 />
            );
    } else {
        return <ComponentDesktopCarousel />
    }
};

export default ComponentCarousel;
