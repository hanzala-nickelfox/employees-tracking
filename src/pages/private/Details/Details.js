import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MembersList from "./ChildComponents/MembersList";

export default function Details() {
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h4" component="div">
            Project details
          </Typography>
          <Typography variant="body2">
            This is a description for project
            <br />
            <br />
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            StartDate - 01/01/2020
            <br />
            EndDate - 01/01/2020
          </Typography>
        </CardContent>
      </Card>
      <br />
      <Card sx={{ minWidth: 275 }}>
        <MembersList />
      </Card>

      <CardActions>
        <br />
        <br />
        <br />
        <Button variant="contained" color="secondary">
          Back
        </Button>
      </CardActions>
    </>
  );
}
