import React from "react";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";
import Cards from "components/shared/BasicCard";

const Projects = () => {
  const ActiveProjects = useSelector(
    (state) => state.projectReducer.projectsData
  );

  const divStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  };

  return (
    <>
      <Typography variant="h5" component="div">
        Projects
      </Typography>
      <div style={divStyle}>
        {ActiveProjects.map((project, index) => {
          return (
            <Cards
              key={index}
              style={{
                minWidth: 275,
                maxWidth: 100,
                margin: "15px 20px 15px 0px",
                padding: "10px"
              }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {`${project.title}`.substring(0, 15)}
                  {"..."}
                </Typography>
                <hr />
                <Typography sx={{ fontSize: 16 }} color="GrayText" gutterBottom>
                  Status: {project.status}
                </Typography>
                <Typography sx={{ mb: 1.5 }}>
                  Progress: {project.progress}
                </Typography>
                <Typography variant="body2">
                  Description:{`${project.description}`.substring(0, 18)}
                  {"..."}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Start-Date: {project.startDate}
                  <br />
                  End-Date: {project.endDate}
                </Typography>
                <Typography variant="h5" component="div">
                  {`Leader: ${project.Leader}`.substring(0, 12)}
                  {"..."}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" underline="none">
                  <Typography>Details</Typography>
                </Button>
              </CardActions>
            </Cards>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
