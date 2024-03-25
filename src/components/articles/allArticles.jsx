import React from "react";

import Article from "./article";

import INFO from "../../data/user";

import "./styles/allArticles.css";

const AllArticles = () => {
	return (
		<div className="all-articles-container">
			{INFO.articles.map((article, index) => (
				<div className="all-articles-article" key={index}>
					<Article
						title={article.title}
						description={article.description}
						location={article.location}
						dateWritten={article.dateWritten}
						authors={article.authors}
					/>
				</div>
			))}
		</div>
	);
};

export default AllArticles;
