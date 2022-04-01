import React from "react";
import Cards from "../../../components/shared/BasicCard";
import { CardActions, CardContent, Button } from "@mui/material";
import Typography from "@mui/material/Typography";

const Learning = () => {
  const learningData = [
    {
      title: "Git session",
      description: "This is a description for project 1",
      Date: "N/A"
    },
    {
      title: "Jira session",
      description: "This is a description for project 1",
      Date: "N/A"
    },
    {
      title: "Teams session",
      description: "This is a description for project 1",
      Date: "N/A"
    },
    {
      title: "Practise session",
      description: "This is a description for project 1",
      endDate: "N/A"
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
        Learning
      </Typography>
      <div style={divStyle}>
        {learningData.map((data, index) => {
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
                  {`${data.title}`.substring(0, 15)}
                  {`...`}
                </Typography>
                <hr />
                <Typography sx={{ fontSize: 16 }} color="GrayText" gutterBottom>
                  Date: {data.Date}
                </Typography>
                <Typography variant="body2">
                  Description: {data.description}
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

export default Learning;
