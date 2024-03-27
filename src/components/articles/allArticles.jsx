import React from "react";

import Article from "./article";

import INFO from "../../data/user";

import "./styles/allArticles.css";

const AllArticles = () => {


	const renderContentBasedOnCondition = (article, index) => {
		if (article.isArticle) {
			return (
				<div className="all-articles-article" key={index}>
					<Article
						title={article.title}
						description={article.description}
						location={article.location}
						dateWritten={article.dateWritten}
						authors={article.authors}
					/>
				</div>
			);
		} else if (article.isYoutubeVideo) {
			return (
				<div className="all-articles-article" key={index}>
					<Article
						title={article.title}
						description={article.description}
						location={article.location}
						dateWritten={article.dateWritten}
						authors={article.authors}
						video_id={article.video_id}
					/>
				</div>
			);
		} else {
			console.log("Error retrieving article.");
		}
	}

	const renderContent = (article, index) => {
		return (
			<div className="all-articles-article" key={index}>
				<Article
					title={article.title}
					description={article.description}
					location={article.location}
					dateWritten={article.dateWritten}
					authors={article.authors}
					isArticle={article.isArticle}
					isYoutubeVideo={article.isYoutubeVideo}
					video_id={article.video_id}
				/>
			</div>
		)
	}

	return (
		<div className="all-articles-container">
			{INFO.articles.map((article, index) => (
				renderContent(article, index)
			))}
		</div>
	);
};

export default AllArticles;
