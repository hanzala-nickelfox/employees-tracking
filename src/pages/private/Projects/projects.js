import React from "react";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Cards from "components/shared/Cards";

const Projects = () => {
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
};

export default Projects;
