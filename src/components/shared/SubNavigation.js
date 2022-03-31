import React from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import ListItem from "@mui/material/ListItem";

const SubNavigation = () => {

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
  const navStyle = {
    display: "flex",
    justifyContent: "center",
  };
  const linkStyle={
    textDecoration: "none",
    color: "#3980c3",
  }

  return (
    <>
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.paper"
        }}>
        <nav style={navStyle}>
          {menuList.map((item) => {
            return (
              <NavLink style={linkStyle} key={`path-${item.ItemLink}`} to={item.ItemLink}>
                <ListItem button>
                  <Tab label={item.itemName} />
                </ListItem>
              </NavLink>
            );
          })}
        </nav>
      </Box>
    </>
  );
};

export default SubNavigation;
