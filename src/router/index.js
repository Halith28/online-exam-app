/**
 * @author Abdul halith
 * @email abd.halith994@gmail.com
 * @create date 2020-11-27
 * @modify date 2021-02-03
 * @desc Different routes and their corresponding component are defined here.
 */

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import { Routes } from "./routes";

import { Home, NotFound, Results, SignIn, SignUp } from "./../screens";
import PrivateRoute from "./privateRouter";

const RouterApp = (props) => {
  return (
    <Router>
      <Switch>
        {/* Home path */}
        <PrivateRoute exact path={Routes.home}>
          <Home />
        </PrivateRoute>
        {/* Results Page */}
        <PrivateRoute exact path={Routes.results}>
          <Results />
        </PrivateRoute>
        {/* Signup Page */}
        <Route exact path={Routes.signUp} component={SignUp} />
        {/* SignIn Page */}
        <Route exact path={Routes.signIn} component={SignIn} />
        {/* Login path */}
        <Route exact path="/" component={SignIn} />

        {/* For unknow/non-defined path */}
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default RouterApp;
