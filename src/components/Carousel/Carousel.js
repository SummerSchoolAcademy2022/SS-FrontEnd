import React from "react";
import "../ProductSection/style.css";
import ProductSection from "../ProductSection/ProductSection";

const Carousel = () => {
    return (<div className="section-row">
                <ProductSection name="ICE CREAM & GELATO" src="PicsCarousel/Group_1443.png"/>
                <ProductSection name="DELICIOUS DONUTS" src="PicsCarousel/Group_1444.png" />
                <ProductSection name="FAMILY / CORPORATE" src="PicsCarousel/Group_1445.png" />
            </div>
            );
}

export default Carousel;