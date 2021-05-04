import React from "react";
import { useLastFM } from "use-last-fm";
import styled from "@emotion/styled";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
const Para = styled.div`
	font: Helvetica;
	color: #fff;
	position: fixed;
	bottom: 0;
	right: 0;
	font-size: 15px;
	user-select: none;
	opacity: 0.5;
	margin: 0 1.25rem 1.25rem 0;
	padding: 2px;
	&:hover {
		transition: 500ms;
		opacity: 1;
	}
`;
const Circle = styled.div`
	height: 9px;
	width: 9px;
	background-color: #37cc5a;
	border-radius: 50%;
	display: inline-block;
`;

const RedCircle = styled.div`
	height: 9px;
	width: 9px;
	background-color: #cc3333;
	border-radius: 50%;
	display: inline-block;
`;
// const ImgContainer = styled.div`
// 	position: fixed;
// 	top: 95%;
// 	left: 40%;
// 	width: 24px;
// `;

// const Img = styled.img`
// 	width: 100%;
// 	height: auto;
// `;

const LastFM = () => {
	const lastFM = useLastFM(
		"KnowGoten",
		`995da994675a3991898b54046f1c070f`,
		30000,
		"small"
	);

	if (lastFM.status !== "playing") {
		return (
			<div>
				<Para className="spotify-footer">
					<RedCircle /> Spotify Offline
				</Para>
			</div>
		);
	}
	return (
		<div>
			<Para className="spotify-footer">
				<Circle /> Listening to <b>{lastFM.song.name}</b> by{" "}
				<b>
					<i>{lastFM.song.artist}</i>
				</b>
			</Para>
		</div>
	);
};

export default LastFM;
