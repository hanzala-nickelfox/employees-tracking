import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "pages/public/signup";
import Login from "pages/public/login";
import Error404 from "pages/Error404";
import { Navigate } from "react-router";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup" replace />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};
export default PublicRoutes;
