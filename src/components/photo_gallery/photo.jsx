import React from "react";


import "./styles/photo.css";

const Photo = (props) => {
	const {title, description, imageLink } = props;

	return (
		<React.Fragment>
			<div className="photo-container">
				<img className="photo" src={imageLink} alt={title} />
                <div className="photo-title">{title}</div>
                <div className="photo-description">{description}</div>
			</div>
		</React.Fragment>
	);
};

export default Photo;
