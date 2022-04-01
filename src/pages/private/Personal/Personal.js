import React from "react";
import Cards from "../../../components/shared/BasicCard";
import { CardContent, CardActions, Button } from "@mui/material";
import Typography from "@mui/material/Typography";

const Personal = () => {
  const PersonalData = [
    {
      title: "Savings session",
      description: "This is a description for Savings Session",
      startDate: "01/01/2020",
      endDate: "01/01/2020"
    },
    {
      title: "Stock market session",
      description: "This is a description for Stock market session",
      startDate: "01/01/2020",
      endDate: "01/01/2020"
    },
    {
      title: "Mutul fund session",
      description: "This is a description for Mutul fund session",
      startDate: "01/01/2020",
      endDate: "01/01/2020"
    }
  ];
  const divStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  };
  return (
    <>
      <Typography variant="h5" component="div">
        Personal improvement
      </Typography>
      <div style={divStyle}>
        {PersonalData.map((data, index) => {
          return (
            <Cards
              key={index}
              style={{
                minWidth: 275,
                maxWidth: 100,
                margin: "15px 20px 15px 0px",
                padding: "10px"
              }}>
              <CardContent>
                <Typography variant="h5" component="div">
                {`${data.title}`.substring(0, 10)}{`...`}
                </Typography>
                <hr />
                <Typography variant="body2">
                  Description: {data.description}
                </Typography>
                <Typography sx={{ fontSize: 16 }} color="GrayText" gutterBottom>
                  Start Date: {data.startDate}
                  <br />
                  End Date: {data.endDate}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" underline="none">
                  <Typography>Details</Typography>
                </Button>
              </CardActions>
            </Cards>
          );
        })}
      </div>
    </>
  );
};

export default Personal;
