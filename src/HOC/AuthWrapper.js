import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useIsLoggedIn } from "hooks/useAuth";
import { Main } from "pages/private/dashboardLayout/DashboardLayout";

const AuthWrapper = ({ children }) => {
  const { isloggedin } = useIsLoggedIn();
  console.log(isloggedin);
  return isloggedin ? (
    <Main>
      <Outlet>{children}</Outlet>
    </Main>
  ) : (
    <Navigate to="/login" />
  );
};

export default AuthWrapper;
