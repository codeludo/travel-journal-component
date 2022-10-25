import React from "react";
import "../styles/card.css"
import Info from "./Info"

const Card = () => {
    return (
        <div className="card-container">
            <div className="card">
                <img src="/images/mountain-bike.png" alt="travel photo" />
                <Info />
            </div>

        </div>
    )
}

export default Card