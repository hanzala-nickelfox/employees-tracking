import React from "react";
import { CardContent, CardActions, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Cards from "components/shared/BasicCard";
import { personalData } from "assets/data/dummyData";
const Personal = () => {
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
        {personalData.map((data, index) => {
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
                  {`${data.title}`.substring(0, 10)}
                  {`...`}
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
