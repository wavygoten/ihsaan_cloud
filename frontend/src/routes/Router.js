import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
// import home from "../components/pages/Home";
const home = lazy(() => import("../components/pages/Home"));
const about = lazy(() => import("../components/pages/About"));
const Navbar = lazy(() => import("../components/Navbar.jsx"));
const Footer = lazy(() => import("../components/Footer.jsx"));
const Routes = () => {
	const LazyLoad = () => {
		useEffect(() => {
			NProgress.start();

			return () => {
				NProgress.done();
			};
		}, []);

		return "";
	};

	return (
		<Router>
			<Suspense fallback={<LazyLoad />}>
				<Navbar />
				<Switch>
					<Route exact path="/" component={home} />
					<Route exact path="/about-me" component={about} />
					<Route component={home} />
				</Switch>
				<Footer />
			</Suspense>
		</Router>
	);
};

export default Routes;
