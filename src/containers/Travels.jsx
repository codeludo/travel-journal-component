import React from "react";
import "../styles/travels.css"
import Header from "../components/Header"
import Card from "../components/ Card";
import data from "../data"

const Travels = () => {
    return (
        <div className="travels">
            <Header />
            {data.map((travel) => {
                return < Card {...travel} />
            })}
        </div>
    )
}

export default Travels