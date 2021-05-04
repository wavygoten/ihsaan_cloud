import React, { useRef, useState } from "react";
import Burger from "./burger/Burger";
import Menu from "./burger/Menu";
import { useOnClickOutside } from "./burger/hooks";
import { theme } from "./burger/theme";
import { NavLink } from "react-router-dom";
import "./styles/Navbar.css";

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
						<NavLink to="/blog" className="nav-links">
							Blog <i />
						</NavLink>
					</li>
					<li className="item">
						<NavLink to="/about-me" className="nav-links">
							About <i />
						</NavLink>
					</li>
					<li className="item">
						<NavLink to="/home" className="nav-links">
							Home <i />
						</NavLink>
					</li>
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
