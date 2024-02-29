import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const PinnedProjects = () => {
	return (
		<div className="all-projects-container">
			{INFO.projects.filter(project => project.pin).map((project, index) => (
				<div className="all-projects-project" key={index}>
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

export default PinnedProjects;
