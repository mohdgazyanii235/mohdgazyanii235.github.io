import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {

	const [year, setYear] = useState('');

	useEffect(() => {
		const d = new Date();
		setYear(d.getFullYear());
	}, []);

	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/home">Home</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">About</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">Projects</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© {year} Mohdgazyanii235. All Rights Reserved.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
