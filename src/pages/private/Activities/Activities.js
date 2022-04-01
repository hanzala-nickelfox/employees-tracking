import React, { useEffect } from "react";
import { useNavigate, Outlet, NavLink } from "react-router-dom";
import Navigation from "components/shared/Navigation";
import { Box, Divider } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import Tab from "@mui/material/Tab";

const Activities = () => {
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
      <Navigation style={navStyle}>
        {menuList.map((menuItem) => {
          return (
            <Box key={menuItem.ItemLink} style={navStyle}>
              <NavLink style={linkStyle} to={menuItem.ItemLink}>
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
