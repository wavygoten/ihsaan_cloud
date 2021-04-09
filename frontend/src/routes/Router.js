import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const home = lazy(() => import("../components/pages/Home"));

const Routes = () => {
	return (
		<Router>
			<Suspense fallback={<></>}>
				<Switch>
					<Route path="/" exact component={home} />
				</Switch>
			</Suspense>
		</Router>
	);
};

export default Routes;
