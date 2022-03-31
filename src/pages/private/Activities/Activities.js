import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navigation from "components/shared/SubNavigation";
import { activitiesRoutes } from "router/routes/PrivateRoutes";
import { Divider } from "@mui/material";

const Activities = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/activities/projects");
  }, []);

  return (
    <>
      <Navigation />
      <Divider style={{marginBottom:'1rem'}}/>
      <Routes>
        {activitiesRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
};

export default Activities;
