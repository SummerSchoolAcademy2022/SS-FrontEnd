import React from "react";
import "./style.css";

const ProductSection = (props) => {
    return (<div className="section-column" style={{ background: `url: ${props.src}` }}> 
                {console.log(props.src)}
                <p>{props.name}</p>
                <button className="explore-options">Explore options</button>
            </div>
    );
}

export default ProductSection;
