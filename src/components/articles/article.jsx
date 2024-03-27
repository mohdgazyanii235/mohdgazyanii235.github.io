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

	const truncateDescription = (desc) => {
        const words = desc.split(/\s+/); // Split based on one or more whitespace
        if (words.length > 50) {
            return words.slice(0, 50).join(" ") + "...";
        } else {
            return desc;
        }
    };

	return (
		<React.Fragment>
			<div className="article" onClick={togglePopup}>
				<div className="article-container">
					<div className="article-title">{title}</div>
					<div className="article-description">{truncateDescription(description)}</div>
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
