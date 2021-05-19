import React, { useState, useEffect } from "react";
import "./App.css";
import Routes from "./routes/Router";
import { render } from "react-dom";

const sleep = async (ms) => {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
};

function App() {
	// const [isLoading, setLoading] = useState(true);
	// const [completed, setCompleted] = useState(0);

	// function fakeRequest() {
	// 	sleep(2500).then(() => {
	// 		const el = document.querySelector(".loader-container");
	// 		if (el) {
	// 			el.remove();
	// 			setLoading(!isLoading);
	// 		}
	// 	});
	// }

	// // const Progress = ({ isAnimating }) => {
	// // 	const { progress } = useNProgress({
	// // 		isAnimating,
	// // 	});

	// // 	return <Bar progress={progress} />;
	// // };

	// useEffect(() => {
	// 	fakeRequest();
	// }, [isLoading]);

	// if (isLoading) return null;

	// return (
	// 	<>
	// 		{isLoading === false ? (
	// 			<div>
	// 				<Routes />
	// 			</div>
	// 		) : (
	// 			<div>
	// 				<Progress />
	// 			</div>
	// 		)}
	// 	</>
	// );

	return (
		<>
			<Routes />
		</>
	);
}

export default App;
