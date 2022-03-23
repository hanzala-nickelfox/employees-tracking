import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Error404 from "pages/Error404";
import SignUp from "pages/public/signup";
import Login from "pages/public/login";
import DashboardLayout from "pages/private/dashboardLayout/DashboardLayout";
import Dashboard from "../pages/private/Dashboard/Dashboard";
import Activities from "pages/private/Activities/Activities";
import { Navigate } from "react-router";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: "110px",
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    })
  })
);

const Router = () => {
  const [isLoggedIn] = useState(true);

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <>
          <DashboardLayout />
          <Main>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Main>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Navigate to="/signup" replace />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

            <Route path="*" element={<Error404 />} />
          </Routes>
        </>
      )}

      {/* <Routes>

        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Error404 />} />
      </Routes> */}
    </BrowserRouter>
  );
};

export default Router;
