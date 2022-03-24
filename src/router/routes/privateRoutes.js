import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "pages/private/dashboardLayout/DashboardLayout";
import AuthWrapper from "HOC/AuthWrapper";
import Dashboard from "pages/private/dashboard/Dashboard";
import Activities from "pages/private/Activities/Activities";

const PrivateRoutes = () => {
  return (
    <>
      <DashboardLayout />
      <Routes>
        <Route element={<AuthWrapper />}>
          <Route path="/dashboard">
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="activities" element={<Activities />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
export default PrivateRoutes;
