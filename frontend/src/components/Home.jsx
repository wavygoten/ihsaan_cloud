import React from "react";

import ReactRotatingText from "react-rotating-text";
// import Pixelbay from "./Pixelbay.jsx";
const Home = () => {
	return (
		<div style={{ overflowX: "none", overflowY: "none" }}>
			<header className="header">
				{/* <div class="typewriter">
					<h1>Ihsaan Bijapuri</h1>
				</div> */}
				<div className="custom">
					<ReactRotatingText
						pause={2500}
						typingInterval={50}
						deletingInterval={50}
						cursor={false}
						items={["Welcome to my Cloud", "Feel Free to Look Around :)"]}
					/>
				</div>
			</header>
			<div className="content">
				<div className="image-container">
					{/* <img
						className="changing-images"
						src="https://i.pinimg.com/564x/86/ff/b8/86ffb87572d657f335cd7cd828c70de3.jpg"
						alt=""
					/> */}
					{/* <Pixelbay /> */}
				</div>
			</div>
		</div>
	);
};

export default Home;
