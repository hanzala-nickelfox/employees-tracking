import * as React from "react";
import { NavLink } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
export default function DisabledTabs() {
  const menuList = [
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
  const style = {
    display: "flex"
  };
  return (
    <>
      <div style={style}>
        {menuList.map((item) => {
          return (
            <NavLink key={`path-${item.ItemLink}`} to={item.ItemLink}>
            <ListItem button>
                <ListItemText primary={item.itemName} />
              </ListItem>
            </NavLink>
          );
        })}
      </div>
    </>
  );
}
