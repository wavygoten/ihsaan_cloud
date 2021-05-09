// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";

// const Pixelbay = () => {
// 	const [pic, setpic] = useState([]);
// 	const sleep = (ms) => {
// 		return new Promise((resolve) => setTimeout(resolve, ms));
// 	};
// 	let allimages = [];
// 	let newimages = [];
// 	let json;
// 	useEffect(() => {
// 		axios({
// 			url: "https://pixabay.com/api/",
// 			method: "get",
// 			params: {
// 				key: `21469306-edc790036ae973e4705d39cac`,
// 				q: `water`,
// 				lang: `en`,
// 				orientation: `horizontal`,
// 				safesearch: true,
// 				order: `latest`, // or popular
// 				per_page: 200,
// 				callback: `JSONP callback`,
// 				// pretty: true,
// 			},
// 			response: "json",
// 		})
// 			.then((res) => {
// 				allimages.push(res.data);
// 				allimages.forEach((image, i) => {
// 					json = JSON.parse(image.substring(14, image.length - 1).toString());
// 				});
// 				for (let i = 0; i < 200; i++) {
// 					newimages.push(json["hits"][i]["webformatURL"]);
// 				}
// 				setInterval(() => {
// 					setpic(newimages[Math.floor(Math.random() * newimages.length)]);
// 				}, 3000);
// 				// while (true) {
// 				// 	sleep(5000);
// 				// }
// 				console.log(newimages);
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});

// 		// setpic(response.data);
// 		// pic.forEach((image, i) => {
// 		// 	json = JSON.parse(image.substring(14, image.length - 1).toString());
// 		// 	newimages.push(json["hits"][i]["webformatURL"]);
// 		// });
// 	}, []);

// 	return <img className="changing-images" src={pic} alt="" />;
// };

// export default Pixelbay;
