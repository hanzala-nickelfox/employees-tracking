import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import MembersList from "./ChildComponents/MembersList";
import { Link } from "react-router-dom";
import DeatilsHeader from "./ChildComponents/DeatilsHeader";

export default function Details() {
  return (
    <Card sx={{ minWidth: 275, padding: "20px" }}>
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

      <DeatilsHeader />

      <MembersList />
    </Card>
  );
}
