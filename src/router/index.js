import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "pages/Error404";
// import Dashboard from "pages/private/dashboard/Dashboard";
// import Activities from "pages/private/Activities/Activities";
import SignUp from "pages/public/signup";
import Login from "pages/public/login";
import DashboardLayout from "../pages/private/dashboardLayout/DashboardLayout";
import AuthWrapper from "HOC/AuthWrapper";
import { Navigate } from "react-router";
import Dashboard from "pages/private/dashboard/index";
import Activities from "pages/private/Activities/Activities";
import { useIsLoggedIn } from "hooks/useAuth";

const Router = () => {
  const { isloggedin } = useIsLoggedIn();
  return (
    <BrowserRouter>
      {isloggedin && <DashboardLayout />}
      <Routes>
        {/* Link redirect to /signup */}
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route element={<AuthWrapper />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="activities" element={<Activities />} />
        </Route>
        {/* 404 page route */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
