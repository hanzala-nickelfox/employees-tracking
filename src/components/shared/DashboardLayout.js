import * as React from "react";
import Box from "@mui/material/Box";
import Layout from "./Layout";
import { useState } from "react";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Layout open={open} setOpen={setOpen} />
      </Box>
    </>
  );
};

export default DashboardLayout;
