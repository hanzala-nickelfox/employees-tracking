import React from "react";
import Cards from "../../../components/shared/Cards";
import Typography from "@mui/material/Typography";

function Projects() {
  const ActiveProjects = [
    {
      title: "NFXW",
      description: "This is a description for project 1",
      status: "In Progress",
      progress: "50%",
      startDate: "01/01/2020",
      endDate: "01/01/2020",
      members: [
        {
          name: "John Doe",
          role: "Developer",
          status: "Active",
          progress: "50%",
          startDate: "01/01/2020",
          endDate: "01/01/2020"
        },
        {
          name: "John Doe",
          role: "Developer",
          status: "Active",
          progress: "50%",
          startDate: "01/01/2020",
          endDate: "01/01/2020"
        }
      ]
    },
    {
      title: "Goumbale",
      description: "This is a description for project 1",
      status: "In Progress",
      progress: "50%",
      startDate: "01/01/2020",
      endDate: "01/01/2020",
      members: [
        {
          name: "John Doe",
          role: "Developer",
          status: "Active",
          progress: "50%",
          startDate: "01/01/2020",
          endDate: "01/01/2020"
        },
        {
          name: "John Doe",
          role: "Developer",
          status: "Active",
          progress: "50%",
          startDate: "01/01/2020",
          endDate: "01/01/2020"
        }
      ]
    },
    {
      title: "TO & FROM",
      description: "This is a description for project 1",
      status: "In Progress",
      progress: "50%",
      startDate: "01/01/2020",
      endDate: "01/01/2020",
      members: [
        {
          name: "John Doe",
          role: "Developer",
          status: "Active",
          progress: "50%",
          startDate: "01/01/2020",
          endDate: "01/01/2020"
        },
        {
          name: "John Doe",
          role: "Developer",
          status: "Active",
          progress: "50%",
          startDate: "01/01/2020",
          endDate: "01/01/2020"
        }
      ]
    },
    {
      title: "Project 4",
      description: "This is a description for project 1",
      status: "In Progress",
      progress: "50%",
      startDate: "01/01/2020",
      endDate: "01/01/2020",
      members: [
        {
          name: "John Doe",
          role: "Developer",
          status: "Active",
          progress: "50%",
          startDate: "01/01/2020",
          endDate: "01/01/2020"
        },
        {
          name: "John Doe",
          role: "Developer",
          status: "Active",
          progress: "50%",
          startDate: "01/01/2020",
          endDate: "01/01/2020"
        }
      ]
    },
    {
      title: "Project 5",
      description: "This is a description for project 1",
      status: "In Progress",
      progress: "50%",
      startDate: "01/01/2020",
      endDate: "01/01/2020",
      members: [
        {
          name: "John Doe",
          role: "Developer",
          status: "Active",
          progress: "50%",
          startDate: "01/01/2020",
          endDate: "01/01/2020"
        },
        {
          name: "John Doe",
          role: "Developer",
          status: "Active",
          progress: "50%",
          startDate: "01/01/2020",
          endDate: "01/01/2020"
        }
      ]
    },
    {
      title: "Project 6",
      description: "This is a description for project 1",
      status: "In Progress",
      progress: "50%",
      startDate: "01/01/2020",
      endDate: "01/01/2020",
      members: [
        {
          name: "John Doe",
          role: "Developer",
          status: "Active",
          progress: "50%",
          startDate: "01/01/2020",
          endDate: "01/01/2020"
        },
        {
          name: "John Doe",
          role: "Developer",
          status: "Active",
          progress: "50%",
          startDate: "01/01/2020",
          endDate: "01/01/2020"
        }
      ]
    }
  ];

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
