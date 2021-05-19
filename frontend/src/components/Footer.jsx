import React from "react";
import LastFM from "./misc/lastfm.jsx";
import twitterlogo from "../images/twitter.svg";
import maillogo from "../images/envelope-solid-24.png";
import "../styles/Footer.css";

const Footer = () => {
	// flex footer? maybe
	return (
		<>
			<footer className="footer">
				<div className="container">
					<div className="sm-logos">
						<li>
							<a
								href="https://twitter.com/dev_ihshuu"
								target="_blank"
								rel="noreferrer"
							>
								<img src={twitterlogo} alt="" />
							</a>
						</li>
						<li>
							{" "}
							<img src={maillogo} alt="" />
						</li>{" "}
						<LastFM />
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
