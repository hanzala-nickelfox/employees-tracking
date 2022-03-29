import React from "react";
import { Routes, Route } from "react-router-dom";
import Activities from "../Activities/Activities";
import DashboardLayout from "pages/private/dashboardLayout/DashboardLayout";
import { getAuth } from "firebase/auth";
import Error404 from "pages/Error404";

function Dashboard() {
  const auth = getAuth();
  const user = auth.currentUser.displayName;

  return (
    <>
      <DashboardLayout />
      <h3>UserName:{user}</h3>
      <Routes>
        <Route path="/dashboard" element={<p>Hi</p>} />
        <Route path="activities/*" element={<Activities />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default Dashboard;
