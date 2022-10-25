import React from "react"
import "../styles/info.css"

const Info = () => {
	return (
		<div className="card-info">
			<div className="info-location">
				<img
					className="img-location"
					src="/images/location.svg"
					alt="location"
				/>
				<p className="location">JAPAN</p>
				<a href="" className="google-location">View on Google Maps</a>
			</div>
			<div className="info">
				<h3 className="title-location">Mount Fuji</h3>
				<p className="date">12 Jan, 2021 - 24 Jan, 2021</p>
				<p className="description">
					Mount Fuji is the tallest mountain in Japan, standing at
					3,776 meters (12,380 feet). Mount Fuji is the single most
					popular tourist site in Japan, for both Japanese and foreign
					tourists.
				</p>
			</div>
		</div>
	)
}

export default Info
