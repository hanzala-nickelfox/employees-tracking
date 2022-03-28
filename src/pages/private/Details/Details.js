import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import MembersList from "./ChildComponents/MembersList";
import { Link } from "react-router-dom";
import DeatilsHeader from "./ChildComponents/DeatilsHeader";
import Box from "@mui/system/Box";

export default function Details() {
  return (
    <Box sx={{ mt: 4 }}>
      <Button
        sx={{ mb: 2, color: "white" }}
        variant="contained"
        color="secondary">
        <Link
          style={{
            textDecoration: "none",
            color: "white"
          }}
          to={`/activities/projects`}>
          Back
        </Link>
      </Button>
    <Card sx={{ minWidth: 275, padding: "20px", mt: 1 }}>

      <DeatilsHeader />

      <MembersList />
    </Card>
    </Box>
  );
}
