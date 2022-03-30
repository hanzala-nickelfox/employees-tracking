import Login from "pages/public/Login/Login";
import SignUp from "pages/public/Signup/Signup";
import React from "react";

export const PublicRoutes = [
  { path: "/", element: <SignUp /> },
  { path: "/login", element: <Login /> }
];
