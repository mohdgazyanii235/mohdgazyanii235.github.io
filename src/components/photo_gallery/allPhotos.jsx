import React from "react";

import INFO from "../../data/user";

import "./styles/allPhotos.css";
import Photo from "./photo";

const AllPhotos = () => {
	return (
		<div className="all-photos-container">
			{INFO.about.photos.map((photo, index) => (
				<div className="all-photos-photo" key={index}>
					<Photo
						title={photo.title}
						description={photo.description}
						imageLink={photo.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllPhotos;
