import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import ListItem from "@mui/material/ListItem";
export default function DisabledTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
    display: "flex",
    justifyContent: "center"
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.paper"
        }}>
        <nav style={style} value={value} onChange={handleChange}>
          {menuList.map((item) => {
            return (
              <NavLink key={`path-${item.ItemLink}`} to={item.ItemLink}>
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
}
