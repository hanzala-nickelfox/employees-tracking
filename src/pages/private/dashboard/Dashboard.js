import React from "react";
import { Routes, Route } from "react-router-dom";
import Activities from "../Activities/Activities";
import DashboardLayout from "pages/private/dashboardLayout/DashboardLayout";
import Error404 from "pages/Error404";
import { getAuth } from "firebase/auth";

function Dashboard() {
  const auth = getAuth();
  const user = auth.currentUser.displayName;
  return (
    <>
      <DashboardLayout />
      UserName:{user}
      <Routes>
        <Route path="activities/*" element={<Activities />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default Dashboard;
