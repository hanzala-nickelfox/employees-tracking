import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthWrapper from "HOC/AuthWrapper";
import { PublicRoutes, PrivateRoutes } from "router/routes/index";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {PublicRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route element={<AuthWrapper />}>
            {PrivateRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element}>
                {route.children &&
                  route.children.map((childRoute) => (
                    <Route
                      key={childRoute.path}
                      path={childRoute.path}
                      element={childRoute.element}>
                      {childRoute.details && (
                        <Route
                          key={childRoute.details.path}
                          path={childRoute.details.path}
                          element={childRoute.details.element}
                        />
                      )}
                    </Route>
                  ))}
              </Route>
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
