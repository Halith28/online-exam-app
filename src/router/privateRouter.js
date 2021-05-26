/**
 * @author Abdul halith
 * @email abd.halith994@gmail.com
 * @desc The private route check wheather the user is logged in or not and also check
 * wheather the request route from the user is accessible to them or not using the Access(role,path)
 * function then allow to the particular route or else it will redirect to login page.
 */

import React from "react";
import { Redirect, Route } from "react-router-dom";
import { Routes } from "./routes";
// import { Access } from "./access";
import { LocalStorageKeys } from "../utils/constants";
import AppDrawer from "../App.drawer";

const PrivateRoute = ({ children, location, ...rest }) => {
  const isAuthenticated = (router) => {
    if (localStorage.getItem(LocalStorageKeys.authToken)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Route
      {...rest}
      render={(_) =>
        isAuthenticated(_) ? (
          <AppDrawer>{children}</AppDrawer>
        ) : (
          <Redirect
            to={{
              pathname: Routes.signIn,
              state: { from: _?.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
