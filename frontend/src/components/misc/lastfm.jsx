import React from "react";
import { useLastFM } from "use-last-fm";
import styled from "@emotion/styled";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
const Para = styled.div`
	font: Helvetica;
	color: #fff;
	font-size: 15px;
	user-select: none;
	opacity: 0.5;
	padding: 2px;
	text-align: right;
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
	margin-right: 2px;
`;

const RedCircle = styled.div`
	height: 9px;
	width: 9px;
	background-color: #cc3333;
	border-radius: 50%;
	display: inline-block;
	margin-right: 2px;
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
			<Para className="spotify-footer">
				<RedCircle className="red-circle" /> Spotify Offline
			</Para>
		);
	}
	return (
		<Para className="spotify-footer">
			<Circle className="green-circle" /> Listening to <b>{lastFM.song.name}</b>{" "}
			by{" "}
			<b>
				<i>{lastFM.song.artist}</i>
			</b>
		</Para>
	);
};

export default LastFM;
