import React, { useContext, Suspense, lazy } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
const home = lazy(() => import("../components/pages/Home"));

const Routes = () => {
	return (
		<Router>
			<Suspense fallback={<></>}>
				<Switch>
					<Route exact path="/" component={home} />
				</Switch>
			</Suspense>
		</Router>
	);
};

export default Routes;
