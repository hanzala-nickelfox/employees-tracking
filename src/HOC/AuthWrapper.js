import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useIsLoggedIn } from "hooks/useAuth";
import DashboardLayout from "components/shared/DashboardLayout";
import { Main } from "components/shared/Main";
import { useSelector } from "react-redux";
const AuthWrapper = ({ children }) => {
  const { isloggedin } = useIsLoggedIn();
  const isOpen = useSelector((state) => state.userReducer.isOpen);
  return isloggedin ? (
    <>
      <DashboardLayout />
      <Main open={isOpen}>
        <Outlet>{children}</Outlet>
      </Main>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default AuthWrapper;
