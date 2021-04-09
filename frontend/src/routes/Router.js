import React, { useContext, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
const home = lazy(() => import("../components/pages/Home"));

export default function Routes() {
  return (
    <Router>
      <Suspense fallback={<></>}>
        <Switch>
          <Route exact path="/" component={home} />
          <Route component={home} />
        </Switch>
      </Suspense>
    </Router>
  );
}
