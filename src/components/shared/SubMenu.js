import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
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

  return (
    <>
      <Box sx={{ width: "100%", bgcolor: "background.paper", display: "flex" }}>
        {menuList.map((item) => {
          return (
            <Tabs
              value={value}
              key={`path-${item.ItemLink}`}
              onChange={handleChange}
              centered>
              <NavLink to={item.ItemLink}>
                <ListItem button>
                  <Tab label={item.itemName} />
                </ListItem>
              </NavLink>
            </Tabs>
          );
        })}
      </Box>
    </>
  );
}
