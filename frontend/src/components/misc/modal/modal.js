import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./modal.css";

const Popup = () => {
	const [check, setcheck] = useState(true);
	const [all, setall] = useState();

	const getExperience = () => {
		setcheck(false);
		return setall(
			<>
				<div className="modal-description">
					<ul>
						<li>Javascript</li>
						<li>Python</li>
						<li>React</li>
						<li>Django</li>
						<li>Express</li>
						<li>Node</li>
					</ul>
				</div>
				<span className="modal-footer" onClick={getAbout}>
					About ⇒
				</span>
			</>
		);
	};

	const getAbout = () => {
		setcheck(true);
		return setall(
			<>
				<div className="modal-description">
					Hello there! I'm a web developer based in Chicago. I'm 21 years old
					and a self taught programmer. Some things I enjoy in my free time
					other than coding are tennis/basketball, music, sneakers, fashion, and
					traveling. If you don't know me and want to get to know me more, or
					maybe become friends 😄 , message me directly thru my Twitter, E-mail,
					or Telegram!
				</div>
				<span className="modal-footer" onClick={getExperience}>
					Skills ⇒
				</span>
			</>
		);
	};
	useEffect(() => {
		getAbout();
		if (!check) {
			getExperience();
		}
	}, [check]);

	return (
		// fuck it just make ur own component
		<>
			<div className="modal-container">
				<div className="modal-content">
					<div id="modal-picture"></div>
					<div className="modal-title">Fullstack Developer</div>
					{/* <div className="modal-description">{all}</div> */}
					{all}
					{/* change to button and render state */}
					{/* <NavLink to="/experience" className="modal-footer">
						Experience &#8594;
					</NavLink> */}
					{/* <span className="modal-footer" onClick={getExperience}>
						Experience ⇒
					</span> */}
				</div>
			</div>
		</>
	);
};

export default Popup;
