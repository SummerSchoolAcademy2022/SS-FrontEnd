import React from "react";
import "./style.css";

const ProductSection = (props) => {
    return (<div className="section-column">
                <img src={props.src} alt="" />
                <div class="section-column-content">
                    <p>{props.name}</p>
                    <button className="explore-options">Explore options</button>
                </div>
            </div>
    );
}

export default ProductSection;
