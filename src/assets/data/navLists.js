import React from "react";
import Home from "@mui/icons-material/Home";
import Activities from "@mui/icons-material/Rowing";
import Settings from "@mui/icons-material/Settings";
import Notifications from "@mui/icons-material/Notifications";
import AssignmentIcon from "@mui/icons-material/Assignment";

export const adminDrawerList = [
  {
    itemName: "Home",
    icon: <Home />,
    ItemLink: "dashboard",
    key: "a1"
  },
  {
    itemName: "Activities",
    icon: <Activities />,
    ItemLink: "activities",
    key: "a2"
  },
  {
    itemName: "Notifications",
    icon: <Notifications />,
    ItemLink: "notifications",
    key: "a3"
  },
  {
    itemName: "Settings",
    icon: <Settings />,
    ItemLink: "settings",
    key: "a4"
  }
];
export const userDrawerList = [
  {
    itemName: "Home",
    icon: <Home />,
    ItemLink: "dashboard",
    key: "u1"
  },
  {
    itemName: "Notifications",
    icon: <AssignmentIcon />,
    ItemLink: "assigned",
    key: "u2"
  },
  {
    itemName: "Settings",
    icon: <Settings />,
    ItemLink: "settings",
    key: "u3"
  }
];
export const navList = [
  {
    itemName: "Projects",
    ItemLink: "projects"
  },
  {
    itemName: "Learning",
    ItemLink: "learning"
  },
  {
    itemName: "Festivals",
    ItemLink: "festivals"
  },
  {
    itemName: "Personal",
    ItemLink: "personal"
  }
];
