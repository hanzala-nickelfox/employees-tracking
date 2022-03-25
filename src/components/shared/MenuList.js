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
import { NavLink, Outlet } from "react-router-dom";
function MenuList() {
  const menuList = [
    {
      itemName: "Home",
      icon: <Home />,
      ItemLink: "dash"
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

  return (
    <>
      <List>
        {menuList.map((item) => {
          return (
            <NavLink key={`/${item.ItemLink}`} to={item.ItemLink}>
              <ListItem button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.itemName} />
              </ListItem>
            </NavLink>
          );
        })}
      </List>
      <Outlet />
    </>
  );
}

export default MenuList;
