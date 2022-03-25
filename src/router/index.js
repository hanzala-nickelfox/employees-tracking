import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "pages/Error404";
import SignUp from "pages/public/signup";
import Login from "pages/public/login";
import DashboardLayout from "../pages/private/dashboardLayout/DashboardLayout";
import { Navigate } from "react-router";

const isLoggedIn = localStorage.getItem("isLoggedIn");
const Router = () => {
  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <>
          <DashboardLayout />
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
    </BrowserRouter>
  );
};

export default Router;
