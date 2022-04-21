import React, { useState } from "react";
import Box from "@mui/material/Box";
import AdminLayout from "./Layouts/AdminLayout";
import UserLayout from "./Layouts/UserLayout";
import { useIsLoggedIn } from "hooks/useAuth";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  const { isUser } = useIsLoggedIn();

  const LayoutWrapper = isUser ? UserLayout : AdminLayout;
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <LayoutWrapper open={open} setOpen={setOpen} />
      </Box>
    </>
  );
};

export default DashboardLayout;
