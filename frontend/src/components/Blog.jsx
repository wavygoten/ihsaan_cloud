import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Blog.css";

const Blog = () => {
	const [blogs, setBlogs] = React.useState([]);

	React.useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const res = await axios.get(
					`${process.env.REACT_APP_API_URL}/api/article/`
				);
				setBlogs(res.data);
				// console.log(blogs[0]);
			} catch (err) {}
		};
		fetchBlogs();
	}, []);

	const getBlogs = () => {
		let list = [];
		let result = [];

		blogs.map((blogPost) => {
			return list.push(
				<>
					<h2 className="post-title">{blogPost.title}</h2>
					<h3 className="post-subtitle">
						{blogPost.content.substring(0, 250)} ...
					</h3>
					<Link to={`/blog/${blogPost.id}`} className="cont-read">
						Continue reading
					</Link>
					<p className="post-meta">{blogPost.date_created}</p>
				</>
			);
		});
		// figure out own logic here idk lol
		for (let i = 0; i < list.length; i += 1) {
			result.push(
				<>
					<div className="article-column">{list[i]}</div>
					{/* <div className="article-column">
						{list[i + 1] ? list[i + 1] : null}
					</div>
					<div className="article-column">
						{list[i + 2] ? list[i + 2] : null}
					</div> */}
				</>
			);
		}

		// return (
		// 	<InfiniteScroll
		// 		loader={<h4>Loading...</h4>}
		// 		endMessage={
		// 			<p style={{ textAlign: "center", color: "white" }}>
		// 				<b>Yay! You have seen it all</b>
		// 			</p>
		// 		}
		// 	>
		// 		{result}
		// 	</InfiniteScroll>
		// );
		return result;
	};

	return (
		<div>
			<div className="container">{getBlogs()} </div>
		</div>
	);
};

export default Blog;
