import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/article.css";

const Article = (props) => {
	const { logos, title, description, linkText, link } = props;


	const logoImages = Array.isArray(logos) ? logos.map((logoUrl, index) => (
        <div key={index} className="article-logo">
            <img src={logoUrl} alt={`logo ${index}`} />
        </div>
    )) : null;

	return (
		<React.Fragment>
			<div className="article">
				<Link to={link}>
					<div className="article-container">
						<div className="article-logos">
							{logoImages}
						</div>
						<div className="article-title">{title}</div>
						<div className="article-description">{description}</div>
						<div className="article-link">
							<div className="article-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="article-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Article;
