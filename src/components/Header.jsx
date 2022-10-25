import React from "react";
import "../styles/header.css"

const Header = () => {
    return (
        <div className="header">
            <img src="/images/world.svg" alt="world" />
            <p className="title">my travel journal.</p>
        </div>
    )
}

export default Header