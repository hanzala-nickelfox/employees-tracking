import React from "react";
import Cards from "../../../components/shared/Cards";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
function Projects() {
  const ActiveProjects = useSelector(
    (state) => state.projectReducer.projectsData
  );

  return (
    <>
      <Typography variant="h5" component="div">
        Projects
      </Typography>
      <Cards ActiveProjects={ActiveProjects} />
    </>
  );
}

export default Projects;
