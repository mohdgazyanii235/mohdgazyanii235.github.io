import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allArticles.css";

const AllArticles = () => {
	return (
		<div className="all-articles-container">
			{INFO.projects.map((project, index) => (
				<div className="all-articles-project" key={index}>
					<Project
						logos={project.logos}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllArticles;
