// Menu.js
import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { Link } from "react-router-dom";
const Menu = ({ open }) => {
	return (
		<StyledMenu open={open}>
			<Link to="/">
				<span aria-label="home"></span>
				Home
			</Link>
			<Link to="/products">
				<span aria-label="shop"></span>
				Shop
			</Link>

			<Link to="/cart">
				<span aria-label="cart"></span>
				Cart
			</Link>
			<Link to="/contact">
				<span aria-label="contact"></span>
				Contact
			</Link>
			<Link to="/faq">
				<span aria-label="faqs"></span>
				FAQs
			</Link>
		</StyledMenu>
	);
};
Menu.propTypes = {
	open: bool.isRequired,
};
export default Menu;
