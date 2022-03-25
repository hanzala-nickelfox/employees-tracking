import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Layout from "../../../components/shared/Layout";
import { useState } from "react";
import { Outlet } from "react-router-dom";
const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(6),

    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginTop: "64px",
    marginLeft: "110px",
    paddingLeft: "110px",
    backgroundColor: "red",
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: `${drawerWidth}px`
    })
  })
);

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Layout open={open} setOpen={setOpen} />
      </Box>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default DashboardLayout;
