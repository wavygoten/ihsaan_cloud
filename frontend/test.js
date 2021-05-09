const axios = require("axios");
const fs = require("fs");
const fetch = async (search) => {
	let allimages = [];
	let newimages = [];
	await axios({
		url: "https://pixabay.com/api/",
		method: "get",
		params: {
			key: `21469306-edc790036ae973e4705d39cac`,
			q: `${search}`,
			lang: `en`,
			orientation: `horizontal`,
			safesearch: true,
			order: `latest`, // or popular
			per_page: 200,
			callback: `JSONP callback`,
			// pretty: true,
		},
		response: "json",
	})
		.then((res) => {
			allimages.push(res.data);
			allimages.forEach((image) => {
				let json = JSON.parse(image.substring(14, image.length - 1).toString());
				for (let i = 0; i < 200; i++) {
					if (json["hits"][i]) {
						newimages.push(json["hits"][i]["webformatURL"]);
					}
				}
			});
		})
		.catch((err) => {
			console.log(err.data);
		});
	return newimages;
};

fetch();
