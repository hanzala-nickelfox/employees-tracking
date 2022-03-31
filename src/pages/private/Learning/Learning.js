import React from "react";
import Cards from "../../../components/shared/Cards";
import Typography from "@mui/material/Typography";

const Learning = () => {
  const learningData = [
    {
      title: "Git session",
      description: "This is a description for project 1",
      status: "In Progress",
      progress: "50%",
      startDate: "01/01/2020",
      endDate: "01/01/2020"
    },
    {
      title: "Jira session",
      description: "This is a description for project 1",
      status: "In Progress",
      progress: "50%",
      startDate: "01/01/2020",
      endDate: "01/01/2020"
    },
    {
      title: "Teams session",
      description: "This is a description for project 1",
      status: "In Progress",
      progress: "50%",
      startDate: "01/01/2020",
      endDate: "01/01/2020"
    },
    {
      title: "Practise session",
      description: "This is a description for project 1",
      status: "In Progress",
      progress: "50%",
      startDate: "01/01/2020",
      endDate: "01/01/2020"
    }
  ];

  return (
    <>
      <Typography variant="h5" component="div">
        Learning
      </Typography>
      <Cards ActiveProjects={learningData} />
    </>
  );
};

export default Learning;
