import React, { useEffect } from "react";
import { useNavigate, Outlet, NavLink } from "react-router-dom";
import { Box, Divider, Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import Tab from "@mui/material/Tab";
import Navigation from "components/shared/Navigation";
import { navList } from "assets/data/navLists";

const Activities = () => {
  
  const navStyle = {
    display: "flex",
    justifyContent: "center"
  };
  const linkStyle = {
    textDecoration: "none",
    color: "#3980c3"
  };
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/activities/projects");
  }, []);

  return (
    <>
      <Typography variant="h4">Activities</Typography>
      <Navigation style={navStyle}>
        {navList.map((menuItem) => {
          return (
            <Box key={menuItem.ItemLink} style={navStyle}>
              <NavLink style={linkStyle} to={menuItem.ItemLink} end={true}>
                <ListItem button>
                  <Tab label={menuItem.itemName} />
                </ListItem>
              </NavLink>
            </Box>
          );
        })}
      </Navigation>
      <Divider style={{ marginBottom: "1rem" }} />
      <Outlet />
    </>
  );
};

export default Activities;
