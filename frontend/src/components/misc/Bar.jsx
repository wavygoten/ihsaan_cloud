import React from "react";

const Bar = (props) => {
	const { progress } = props;

	const containerStyles = {
		background: "#29d",
		height: 2,
		left: 0,
		position: "fixed",
		top: 0,
		zIndex: 1031,
		width: `${progress}%`,
	};

	const fillerStyles = {
		display: "block",
		height: "100%",
		opacity: 1,
		position: "absolute",
		right: 0,
		transform: "rotate(3deg) translate(0px, -4px)",
		transition: "width 1s ease-in-out",
		width: `100%`,
	};

	// const labelStyles = {
	// 	padding: 5,
	// 	color: "white",
	// 	fontWeight: "bold",
	// };
	return (
		<div style={containerStyles}>
			<div style={fillerStyles}></div>
		</div>
	);
};

export default Bar;
