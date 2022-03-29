import React, { useEffect } from "react";
import SubMenu from "components/shared/SubMenu";
import { Route, Routes, useNavigate } from "react-router-dom";
import Projects from "../Projects/projects";
import Personal from "pages/private/Personal/Personal";
import Learning from "pages/private/Learning/Learning";
import Festivals from "pages/private/Festivals/Festivals";

function Activities() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/activities/projects");
  }, []);

  return (
    <>
      <SubMenu />
      <hr />

      <Routes>
        <Route path="projects/*" element={<Projects />} />
        <Route path="learning" element={<Learning />} />
        <Route path="festivals" element={<Festivals />} />
        <Route path="personal" element={<Personal />} />
      </Routes>
    </>
  );
}

export default Activities;
