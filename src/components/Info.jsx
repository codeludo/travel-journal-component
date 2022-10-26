import React from "react"
import "../styles/info.css"

const Info = (props) => {

	return (
		<div className="card-info">
			<div className="info-location">
				<img
					className="img-location"
					src="/location.svg"
					alt="location"
				/>
				<p className="location">{props.location}</p>
				<a href={props.googleMapsUrl} className="google-location">View on Google Maps</a>
			</div>
			<div className="info">
				<h3 className="title-location">{props.title}</h3>
				<p className="date">{props.startDate} - {props.endDate}</p>
				<p className="description">
					{props.description}
				</p>
			</div>
		</div>
	)
}

export default Info
