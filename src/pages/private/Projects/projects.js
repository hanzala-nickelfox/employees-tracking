import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Error404 from "pages/Error404";
import Cards from "../../../components/shared/Cards";
import Typography from "@mui/material/Typography";

function Projects() {
  const ActiveProjects = useSelector(
    (state) => state.projectReducer.projectsData
  );

  const path = ActiveProjects.map((item) => item.linkPath);

  return (
    <>
      <>
        <Routes>
          <Route
            path="/"
            element={
              <Typography variant="h5" component="div">
                Projects
              </Typography>
            }
          />
          {ActiveProjects.map((path) => {
            return (
              <Route
                path={path.title.replace(/\s+/g, "-").toLowerCase()}
                element={<h1>Hello {path.title}</h1>}
                key={path.title}
              />
            );
          })}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </>
      <>
        <Cards ActiveProjects={ActiveProjects} path={path} />
      </>
    </>
  );
}

export default Projects;
