import "./styles.css";
import React, { useState, useEffect, useRef } from "react";

function isSnakeCell(cell, snake) {
	for (let snakeCell of snake) {
		if (cell.row === snakeCell.row && cell.col === snakeCell.col) {
			return true;
		}
	}

	return false;
}

function isValidDirection(newDirection, currentDirection) {
	if (currentDirection === "none") {
		return true;
	}

	if (["up", "down"].includes(currentDirection)) {
		return ["right", "left"].includes(newDirection);
	}

	if (["right", "left"].includes(currentDirection)) {
		return ["up", "down"].includes(newDirection);
	}

	return false;
}

function pickFoodCell(halfSize, snake) {
	let foodCandidate = pickRandomCell(halfSize);
	while (isSnakeCell(foodCandidate, snake)) {
		foodCandidate = pickRandomCell(halfSize);
	}

	return foodCandidate;
}

function pickRandomCell(halfSize) {
	const fullSize = halfSize * 2 + 1;
	const row = Math.floor(Math.random() * fullSize) - halfSize;
	const col = Math.floor(Math.random() * fullSize) - halfSize;

	return { row, col };
}

function isFoodCell(cell, food) {
	return cell.row === food.row && cell.col === food.col;
}

let movementTimer = null;
function clearMovementTimer() {
	if (!!movementTimer) {
		window.clearInterval(movementTimer);
	}
}

function isGameOver(newHead, halfSize, snake) {
	const { row, col } = newHead;
	// Check for out of bounds
	if (row > halfSize || row < -1 * halfSize) {
		return true;
	}

	if (col > halfSize || col < -1 * halfSize) {
		return true;
	}

	// Check for snake cell
	if (isSnakeCell(newHead, snake)) {
		return true;
	}

	return false;
}

function Grid({ halfSize, tickDuration }) {
	const fullSize = 2 * halfSize + 1;
	const [snake, setSnake] = useState([{ row: 0, col: 0 }]);
	const [direction, setDirection] = useState("none");
	const [food, setFood] = useState(() => pickFoodCell(halfSize, snake));
	const foodRef = useRef(food);
	const [gameOver, setGameOver] = useState(false);

	const restartGame = function () {
		const newSnake = [{ row: 0, col: 0 }];
		setSnake(newSnake);
		setDirection("none");
		const newFood = pickFoodCell(halfSize, newSnake);
		setFood(newFood);
		foodRef.current = newFood;
		setGameOver(false);
	};

	const onKeydownPress = function (e) {
		if (gameOver && e.code === "Space") {
			restartGame();
			return;
		}

		if (!gameOver) {
			switch (e.code) {
				case "ArrowLeft":
					tryPerformMovement("left", direction);
					break;
				case "ArrowRight":
					tryPerformMovement("right", direction);
					break;
				case "ArrowUp":
					tryPerformMovement("up", direction);
					break;
				case "ArrowDown":
					tryPerformMovement("down", direction);
					break;
			}
		}
	};

	const tryPerformMovement = function (newDirection, currentDirection) {
		if (isValidDirection(newDirection, currentDirection)) {
			setDirection(newDirection);
			moveSnake(newDirection);
			resetMovementTimer(newDirection);
		}
	};

	const moveSnake = function (direction) {
		if (gameOver) {
			return;
		}

		const head = snake[snake.length - 1];
		const newHead = calculateNewHead(head, direction);
		if (isGameOver(newHead, halfSize, snake)) {
			clearMovementTimer();
			setDirection("none");
			setGameOver(true);
			return;
		}

		snake.push(newHead);
		if (isFoodCell(newHead, foodRef.current)) {
			const newFood = pickFoodCell(halfSize, snake);
			foodRef.current = newFood;
			setFood(newFood);
		} else {
			snake.shift();
		}

		setSnake([...snake]);
	};

	const calculateNewHead = function (head, direction) {
		const { row, col } = head;
		switch (direction) {
			case "up":
				return { row: row - 1, col };
			case "down":
				return { row: row + 1, col };
			case "left":
				return { row, col: col - 1 };
			case "right":
				return { row, col: col + 1 };
			default:
				return { row, col };
		}

		return head;
	};

	const resetMovementTimer = function (direction) {
		clearMovementTimer();
		const onTick = function () {
			console.log(`Tick in direction: ${direction}`);
			console.log(`Food location: row = ${food.row}; col = ${food.col}`);
			console.log(
				`FoodRef location: row = ${foodRef.current.row}; col = ${foodRef.current.col}`
			);
			moveSnake(direction);
		};
		movementTimer = window.setInterval(onTick, tickDuration);
	};

	const registerKeydownHandler = function () {
		document.body.addEventListener("keydown", onKeydownPress);
		return () => document.body.removeEventListener("keydown", onKeydownPress);
	};
	useEffect(registerKeydownHandler);

	const rows = [];
	for (let i = 0; i < fullSize; i++) {
		const rowIndex = i - halfSize;
		const cells = [];
		for (let j = 0; j < fullSize; j++) {
			const columnIndex = j - halfSize;
			const key = `${rowIndex}-${columnIndex}`;
			const cellClasses = ["cell"];
			const c = { row: rowIndex, col: columnIndex };
			if (isSnakeCell(c, snake)) {
				cellClasses.push("snake");
			}

			if (isFoodCell(c, food)) {
				cellClasses.push("food");
			}

			const cell = (
				<div
					className={cellClasses.join(" ")}
					data-col={columnIndex}
					data-row={rowIndex}
					key={key}
				></div>
			);
			cells.push(cell);
		}

		const row = (
			<div className="row" data-row={rowIndex} key={rowIndex}>
				{cells}
			</div>
		);
		rows.push(row);
	}

	const gridClasses = ["grid"];
	if (gameOver) {
		gridClasses.push("game-over");
	}

	return (
		<div className="wrapper">
			<div className={gridClasses.join(" ")}>{rows}</div>
			<div className="score">Score: {snake.length * 10}</div>
			{gameOver ? (
				<div className="status">Game over. Press Space to restart!</div>
			) : null}
		</div>
	);
}

function Snake() {
	return <Grid halfSize="5" tickDuration="150" />;
}

export default Snake;
