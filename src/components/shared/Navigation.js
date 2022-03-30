import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Home from "@mui/icons-material/Home";
import Activities from "@mui/icons-material/Rowing";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Notifications from "@mui/icons-material/Notifications";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  const menuList = [
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

  const navStyle = {
    textDecoration: "none",
    color: "rgba(0, 0, 0, 0.54)"
  };
  return (
    <>
      <List>
        {menuList.map((item) => {
          return (
            <NavLink
              style={navStyle}
              key={`/${item.ItemLink}`}
              to={item.ItemLink}>
              <ListItem button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.itemName} />
              </ListItem>
            </NavLink>
          );
        })}
      </List>
    </>
  );
};

export default Navigation;
