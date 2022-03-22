import React from "react";
import { Route } from "react-router-dom";
import SignUp from "pages/public/signup";
import Login from "pages/public/login";

const RenderMultiRoutes = () => {
  const RouteList = [
    {
      path: "/",
      element: <SignUp />
    },
    {
      path: "/login",
      element: <Login />
    }
  ];

  <>
    <h1>Checker===========</h1>
    {RouteList.map((RouteList) => (
      <Route 
      exact
        key={RouteList.path}
        path={RouteList.path}
        element={RouteList.element}
      />
    ))}
  </>;
};

export default RenderMultiRoutes;
