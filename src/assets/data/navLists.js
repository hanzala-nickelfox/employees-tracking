import React from "react";
import Home from "@mui/icons-material/Home";
import Activities from "@mui/icons-material/Rowing";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Notifications from "@mui/icons-material/Notifications";

export const drawerList = [
  {
    itemName: "Home",
    icon: <Home />,
    ItemLink: "dashboard"
  },
  {
    itemName: "Activities",
    icon: <Activities />,
    ItemLink: "activities"
  },
  {
    itemName: "Notifications",
    icon: <Notifications />,
    ItemLink: "notifications"
  },
  {
    itemName: "Settings",
    icon: <Settings />,
    ItemLink: "settings"
  },
  {
    itemName: "Logout",
    icon: <Logout />,
    ItemLink: "logout"
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
