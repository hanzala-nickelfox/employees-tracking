import React from "react";
import { useRoutes } from "react-router-dom";
import Paths from "router/routes/Routes";
const Router = () => {
  const Routes = useRoutes(Paths);
  return <>{Routes}</>;
};

export default Router;
