import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import ArticleContent from "./ArticleContent";

import "./styles/article.css";

const Article = (props) => {
	const { title, description, location, dateWritten, authors, video_id, isArticle, isYoutubeVideo } = props;

	const [isPopUpVisible, setPopUpVisible] = useState(false);

	const togglePopup = () => {
		setPopUpVisible(!isPopUpVisible);
	};

	const truncateText = (desc, maxLength) => {
		if (desc.length > maxLength) {
			let trimmedString = desc.substr(0, maxLength);
			trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
			return trimmedString + "...";
		} else {
			return desc;
		}
    };

	return (
		<React.Fragment>
			<div className="article" onClick={togglePopup}>
				<div className="article-container">
					<div className="article-title">{truncateText(title, 32)}</div>
					<div className="article-description">{truncateText(description, 300)}</div>
				</div>
			</div>
			{isPopUpVisible && 
			< ArticleContent 
				title={title} 
				description={description} 
				location={location} 
				dateWritten={dateWritten} 
				authors={authors} 
				togglePopup={togglePopup}
				isArticle={isArticle}
				isYoutubeVideo={isYoutubeVideo}
				video_id={video_id}
			/>}
		</React.Fragment>
	);
};

export default Article;
