import React from "react";
import { useRouter } from "next/router";
import "../../styles/Navbar.module.css";

export default function Navbar() {
	return (
		<div>
			<nav className="navbar">
				<div className="navbar-container">
					<ul className="nav-menu">
						<li className="nav-products">
							<Link href="/products" className="nav-links">
								Products <i />
							</Link>
						</li>
						<li className="nav-faq">
							<Link href="/faq" className="nav-links">
								FAQ <i />
							</Link>
						</li>
						{/* <li className="nav-dashboard">
							<Link to="/dashboard" className="nav-links">
								Dashboard <i />
							</Link>
						</li> */}
						{/* <li className="nav-checkout">
							<Link to="/checkout" className="nav-links">
								Checkout <i />
							</Link>
						</li> */}
					</ul>
				</div>
			</nav>
		</div>
	);
}

const Link = ({ children, href }) => {
	const router = useRouter();
	return (
		<a
			href="#"
			onClick={(e) => {
				e.preventDefault();
				// typically you want to use `next/link` for this usecase
				// but this example shows how you can also access the router
				// and use it manually
				router.push(href);
			}}
		>
			{children}
			<style jsx>{`
				a {
					margin-right: 10px;
				}
			`}</style>
		</a>
	);
};
