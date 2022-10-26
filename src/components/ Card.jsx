import React from "react";
import "../styles/card.css"
import Info from "./Info"

const Card = (props) => {
    return (
        <div className="card-container">
            <div className="card">
                <img src={props.imageUrl} className="travel-img" alt="travel photo" />
                <Info {...props} />
            </div>

        </div>
    )
}

export default Card