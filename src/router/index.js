import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "pages/Error404";
import SignUp from "pages/public/signup";
import Login from "pages/public/login";
import Dashboard from "pages/private/dashboard";
import { Navigate } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Link redirect to /signup */}
        <Route path="/" element={<Navigate replace to="/signup" />} />

        {/* Routes for public pages */}
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />

        {/* 404 page route */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
