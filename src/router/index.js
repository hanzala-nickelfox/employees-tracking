import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./routes";
import Error404 from "pages/Error404";
import PublicWrapper from "../hoc/PublicWrapper";
import AuthWrapper from "../hoc/AuthWrapper";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/u/dashboard" />
          {/* All the public routes */}
          {PublicRoutes.map((route) => (
            <PublicWrapper key={`Route-${route.path}`} {...route} />
          ))}

          {/* All the private routes */}
          {PrivateRoutes.map((route) => (
            <AuthWrapper key={`Route-${route.path}`} {...route} />
          ))}

          {/* 404 page route */}
          <Route exact path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
