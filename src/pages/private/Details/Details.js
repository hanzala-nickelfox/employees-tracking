import * as React from "react";
import Button from "@mui/material/Button";
import MembersList from "./ChildComponents/MembersList";
import { Link } from "react-router-dom";
import DeatilsHeader from "./ChildComponents/DeatilsHeader";

export default function Details() {
  return (
    <>
      <DeatilsHeader />

      <MembersList />

      <Button
        variant="contained"
        color="secondary"
        component={Link}
        to={`/activities/projects`}>
        Back
      </Button>
    </>
  );
}
