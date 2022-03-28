import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function DeatilsHeader() {
  return (
    <>
      <Card sx={{ minWidth: 275, marginBottom: "30px" }}>
        <CardContent>
          <Typography variant="h4" component="div">
            Project details
          </Typography>

          <Typography variant="body2">
            This is a description for project
            <br />
            <br />
          </Typography>

          <Typography color="text.secondary">
            StartDate - 01/01/2020
            <br />
            EndDate - 01/01/2020
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default DeatilsHeader;
