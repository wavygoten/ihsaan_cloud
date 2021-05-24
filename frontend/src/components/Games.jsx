import React, { useEffect, useState } from "react";
import "../styles/Games.css";
import styled from "@emotion/styled";
/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from "@emotion/react";

import Mario from "./Mario.jsx";
import Snake from "./games/snake/Snake.jsx";

const BackButton = styled.button`
	border: none;
	color: white;
	background-color: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	align-text: center;
	cursor: pointer;
	font-size: 22px;
`;
const Games = () => {
	// interesting...

	//lets do all the work in this function so we can shorten the return statment
	// let keys = [];
	// document.querySelectorAll(".game-title").forEach((key) => {
	// 	keys.push(key.textContent);
	// });
	function findMatch(arraySmall, arrayLarge) {
		var res = [];
		for (var i = 0; i < arrayLarge.length; i++) {
			for (var j = 0; j < arraySmall.length; j++) {
				if (arrayLarge[i] === arraySmall[j]) {
					res.push(i);
				}
			}
		}
		return res;
	}

	const [check, setcheck] = useState(true);

	const getMemoryMatch = () => {
		setcheck(false);
		return setgame(
			<>
				<BackButton
					onClick={() => {
						setcheck(true);
					}}
				>
					Back
				</BackButton>
				<Mario />
			</>
		);
	};

	const getSlitherySnake = () => {
		setcheck(false);
		return setgame(
			<>
				<BackButton
					onClick={() => {
						setcheck(true);
					}}
				>
					Back
				</BackButton>
				<Snake />
			</>
		);
	};

	const initialState = (
		<>
			<ul className="ul-flex">
				<div>
					<div className="game-title">Memory Match</div>
					<div>
						<button className="play-btn" onClick={getMemoryMatch}>
							Play Now
						</button>
					</div>
				</div>
				<div>
					{" "}
					<div className="game-title">Blazin Blackjack</div>
					<div>
						<button className="play-btn">Play Now</button>
					</div>
				</div>
				<div>
					{" "}
					<div className="game-title">Slithery Snake</div>
					<div>
						<button className="play-btn" onClick={getSlitherySnake}>
							Play Now
						</button>
					</div>
				</div>
				<div>
					{" "}
					<div className="game-title">Mario Memory</div>
					<div>
						<button className="play-btn">Play Now</button>
					</div>
				</div>
				<div>
					{" "}
					<div className="game-title">Mario Memory</div>
					<div>
						<button className="play-btn">Play Now</button>
					</div>
				</div>
				<div>
					{" "}
					<div className="game-title">Mario Memory</div>
					<div>
						<button className="play-btn">Play Now</button>
					</div>
				</div>
				<div>
					{" "}
					<div className="game-title">Mario Memory</div>
					<div>
						<button className="play-btn">Play Now</button>
					</div>
				</div>
				<div>
					{" "}
					<div className="game-title">Mario Memory</div>
					<div>
						<button className="play-btn">Play Now</button>
					</div>
				</div>
				<div>
					{" "}
					<div className="game-title">Mario Memory</div>
					<div>
						<button className="play-btn">Play Now</button>
					</div>
				</div>
			</ul>
		</>
	);

	const [game, setgame] = React.useState(initialState);

	useEffect(() => {
		if (check) {
			setgame(initialState);
		}
	}, [check]);

	return <>{game}</>;
};

export default Games;
