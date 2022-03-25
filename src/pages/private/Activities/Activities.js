import React from "react";
import SubMenu from "components/shared/SubMenu";
import { Routes, Route } from "react-router-dom";
import Projects from "pages/private/Projects/projects";
import Personal from "pages/private/Personal/Personal";
import Learning from "../Learning/Learning";
import Festivals from "../Festivals/Festivals";
function Activities() {
  return (
    <>
      <SubMenu />
      <Routes>
        <Route path="projects" element={<Projects />} />
        <Route path="learning" element={<Learning />} />
        <Route path="festivals" element={<Festivals />} />
        <Route path="personal" element={<Personal />} />
      </Routes>
    </>
  );
}

export default Activities;
