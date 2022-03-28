import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Activities from "../Activities/Activities";
import DashboardLayout from "pages/private/dashboardLayout/DashboardLayout";
import SubMenu from "components/shared/SubMenu";
import { getAuth } from "firebase/auth";
import Error404 from "pages/Error404";
import Projects from "pages/private/Projects/projects";
import Personal from "pages/private/Personal/Personal";
import Learning from "pages/private/Learning/Learning";
import Festivals from "pages/private/Festivals/Festivals";

function Dashboard() {
  const auth = getAuth();
  const user = auth.currentUser.displayName;
  return (
    <>
      <DashboardLayout />
      <h3>UserName:{user}</h3>
      <SubMenu />
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="home" element={<Navigate to="/dashboard" />} />
        <Route path="activities/*" element={<Activities />} />
        <Route path="projects/*" element={<Projects />} />
        <Route path="learning" element={<Learning />} />
        <Route path="festivals" element={<Festivals />} />
        <Route path="personal" element={<Personal />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default Dashboard;
