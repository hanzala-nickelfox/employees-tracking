import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Home from "@mui/icons-material/Home";
import Activities from "@mui/icons-material/Rowing";
import Settings from "@mui/icons-material/Settings";

function menuList() {
  const menuList = [
    {
      itemName: "Home",
      icon: <Home />
    },
    {
      itemName: "Activities",
      icon: <Activities />
    },
    {
      itemName: "Settings",
      icon: <Settings />
    }
  ];

  return (
    <>
      <List>
        {menuList.map((menuList, idx) => (
          <ListItem button key={idx}>
            <ListItemIcon>{menuList.icon}</ListItemIcon>
            <ListItemText primary={menuList.itemName} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default menuList;
