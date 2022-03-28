import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  projectsData: [
    {
      title: "Practice Project For React",
      description:
        "The Project is for practice purpose and includes the basic concepts of React with latest Libraries and functionality.",
      status: "In Progress",
      progress: "15%",
      startDate: "08/03/2022",
      endDate: "N/A",
      Leader: "Hanzala",
      members: ["Abhishek", "Hiten", "Mehran", "Neeraj"]
    },
    {
      title: "Project Title",
      description: "Prject Description",
      status: "Project Status",
      progress: "Project Progress",
      startDate: "Start Date",
      endDate: "End Date",
      Leader: "Leader Name",
      members: "[Array Of Members]"
    }
  ]
};

const projectSlice = createSlice({
  name: "projects",
  initialState: initialValue,
  reducers: {
    setProjectsData: (state, action) => {
      state.projectsData = action.payload;
    }
  }
});

export default projectSlice.reducer;
