import React from "react";
import Cards from "../../../components/shared/Cards";
import Typography from "@mui/material/Typography";

const Festivals = () => {
  const festivalsgData = [
    {
      title: "independence session",
      description: "This is a description for project 1",
      status: "In Progress",
      progress: "50%",
      startDate: "01/01/2020",
      endDate: "01/01/2020"
    },
    {
      title: "Republic session",
      description: "This is a description for project 1",
      status: "In Progress",
      progress: "50%",
      startDate: "01/01/2020",
      endDate: "01/01/2020"
    },
    {
      title: "New year session",
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
        Festivals
      </Typography>
      <Cards ActiveProjects={festivalsgData} />
    </>
  );
};

export default Festivals;
