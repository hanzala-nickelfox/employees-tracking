import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useIsLoggedIn } from "hooks/useAuth";

const AuthWrapper = ({ children }) => {
  const { isloggedin } = useIsLoggedIn();
  console.log(isloggedin);
  return isloggedin ? <Outlet>{children}</Outlet> : <Navigate to="/login" />;
};

export default AuthWrapper;
