import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "pages/Error404";
import SignUp from "pages/public/signup";
import Login from "pages/public/login";
import Dashboard from "pages/private/dashboard/Dashboard";
import Activities from "pages/private/Activities/Activities";
import { Navigate } from "react-router";

const Router = () => {
  const [isLoggedIn] = useState(true);

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <>
          <Dashboard />
            <Routes>
              <Route path="/activities" element={<Activities />} />
            </Routes>
        </>
      ) : (
        <>
          <Routes>
            {/* Link redirect to /signup */}
            <Route path="/" element={<Navigate to="/signup" replace />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            {/* 404 page route */}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </>
      )}

      {/* <Routes> */}
      {/* Link redirect to /signup */}
      {/* <Route path="/" element={<Navigate to="/signup" replace />} /> */}

      {/* <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} /> */}

      {/* 404 page route */}
      {/* <Route path="*" element={<Error404 />} /> */}
      {/* </Routes> */}
    </BrowserRouter>
  );
};

export default Router;
