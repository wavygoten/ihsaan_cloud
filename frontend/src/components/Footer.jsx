import React from "react";
import LastFM from "./misc/lastfm.jsx";
import twitterlogo from "../images/twitter.svg";
import maillogo from "../images/envelope-solid-24.png";
import "../styles/Footer.css";

import styled from "@emotion/styled";
/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from "@emotion/react";

const Container = styled.div``;

const Footer = () => {
	// flex footer? maybe
	return (
		<>
			<footer className="footer">
				<div className="container">
					<div className="flexer">
						<div>
							<LastFM />
						</div>

						<li>Copyright © 2021 Naashi ~ Made With &#128153;</li>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
