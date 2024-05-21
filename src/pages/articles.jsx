import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllArticles from "../components/articles/allArticles";

import "./styles/articles.css"

import INFO from "../data/user";


const Articles = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Articles | ${INFO.main.title}`}</title>
				<meta
					name="keywords"
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="articles" />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={70.8} />
						</div>
					</div>
					<div className="articles-container">
						<div className="title articles-title">
							{INFO.article.title}
						</div>

						<div className="subtitle articles-subtitle">
							{INFO.article.description}
						</div>

						<div className="articles-list">
							<AllArticles pinned={false}/>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Articles;
