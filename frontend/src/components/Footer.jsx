import React from "react";
import LastFM from "./misc/lastfm.jsx";
import twitterlogo from "../images/twittericon.png";
import maillogo from "../images/envelope-solid-24.png";
import "../styles/Footer.css";

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<a
					href="https://twitter.com/dev_ihshuu"
					target="_blank"
					rel="noreferrer"
				>
					{" "}
					<img src={twitterlogo} alt="twitter-icon" />
				</a>
				<a href="mailto:ihsaan.b@yahoo.com" target="_blank" rel="noreferrer">
					{" "}
					<img src={maillogo} alt="mail-icon" />
				</a>
				<LastFM />
			</footer>
		</>
	);
};

export default Footer;
