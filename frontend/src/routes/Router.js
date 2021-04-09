import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const home = lazy(() => import("../components/pages/Home"));
const blog = lazy(() => import("../components/pages/Blog"));
const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<></>}>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/blog" component={blog} />
          <Route component={home} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
