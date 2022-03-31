import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import AuthWrapper from "HOC/AuthWrapper";
import { PublicRoutes, PrivateRoutes } from "router/routes/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {PublicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route element={<AuthWrapper />}>
          {PrivateRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
