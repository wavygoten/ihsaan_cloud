import React, { useState, Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
const home = lazy(() => import("../components/pages/Home"));
const blog = lazy(() => import("../components/pages/Blog"));
const Navbar = lazy(() => import("../components/Navbar.jsx"));
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
					<Route exact path="/blog" component={blog} />
					<Route exact path="/about-me" component={blog} />

					<Route component={home} />
				</Switch>
			</Suspense>
		</Router>
	);
};

export default Routes;
