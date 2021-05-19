import React, { useRef, useState } from "react";
import Burger from "./misc/burger/Burger";
import Menu from "./misc/burger/Menu";
import { useOnClickOutside } from "./misc/burger/hooks";
import { theme } from "./misc/burger/theme";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import ReactRotatingText from "react-rotating-text";
import clouds from "../images/cloudy.png";
const Navbar = () => {
	const [open, setOpen] = useState(false);

	const node = useRef();
	useOnClickOutside(node, () => setOpen(false));
	return (
		<>
			<div className="navbar">
				{/* <span>image</span> */}
				<div className="navbar-container">
					<li className="item">
						<NavLink to="/games" className="nav-links">
							Games <i />
						</NavLink>
					</li>

					<li className="item">
						<NavLink to="/home" className="nav-links">
							Home <i />
						</NavLink>
					</li>
					<div>
						<ReactRotatingText
							pause={2500}
							typingInterval={50}
							deletingInterval={50}
							cursor={false}
							items={["Welcome to my Cloud", "Feel Free to Look Around :)"]}
						/>
					</div>
				</div>
			</div>
			{/* <div className="mobile-navbar-container" ref={node}>
				<ThemeProvider theme={theme}>
					<Burger open={open} setOpen={setOpen} />
					<Menu open={open} setOpen={setOpen} />
				</ThemeProvider>
			</div> */}
		</>
	);
};

export default Navbar;

/*
.flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-content: space-between;
    align-items: flex-start;
    }

.flex-item:nth-child(1) {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
    }

.flex-item:nth-child(2) {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
    }

.flex-item:nth-child(3) {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
    }
	*/
