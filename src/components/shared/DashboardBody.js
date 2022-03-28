import React, { useState, useEffect } from "react";
import Dashboard from "pages/private/dashboard/Dashboard";
import { Routes, Route, useLocation } from "react-router-dom";
import Activities from "pages/private/Activities/Activities";
import Learning from "pages/private/Learning/Learning";
import Festivals from "pages/private/Festivals/Festivals";
import Projects from "pages/private/Projects/projects";
import Personal from "pages/private/Personal/Personal";
import Details from "pages/private/Details/Details";
import Error404 from "pages/Error404";

function DashboardBody() {
  const [activities, setActivities] = useState(false);
  const location = useLocation();
  const Path = location.pathname;

  useEffect(() => {
    if (
      Path == "/activities" ||
      Path == "/activities/learning" ||
      Path == "/activities/festivals" ||
      Path == "/activities/projects" ||
      Path == "/activities/personal"
    ) {
      setActivities(true);
    } else {
      setActivities(false);
    }
  }, [location]);

  return (
    <>
      {activities ? <Activities /> : null}

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/activities/projects" element={<Projects />} />
        <Route path="/activities/learning" element={<Learning />} />
        <Route path="/activities/festivals" element={<Festivals />} />
        <Route path="/activities/Personal" element={<Personal />} />
        <Route path="/activities/projects/details" element={<Details />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default DashboardBody;
