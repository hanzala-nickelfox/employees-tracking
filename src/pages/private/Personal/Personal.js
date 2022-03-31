import React from "react";
import Cards from "../../../components/shared/Cards";
import Typography from "@mui/material/Typography";

const Personal = () => {
  const PersonalData = [
    {
      title: "Savings session",
      description: "This is a description for project 1",
      status: "In Progress",
      progress: "50%",
      startDate: "01/01/2020",
      endDate: "01/01/2020"
    },
    {
      title: "Stock market session",
      description: "This is a description for project 1",
      status: "In Progress",
      progress: "50%",
      startDate: "01/01/2020",
      endDate: "01/01/2020"
    },
    {
      title: "Mutul fund session",
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
        Personal improvement
      </Typography>
      <Cards ActiveProjects={PersonalData} />
    </>
  );
};

export default Personal;
