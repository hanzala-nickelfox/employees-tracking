import React from "react";
import Cards from "components/shared/BasicCard";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { festivalData } from "assets/data/dummyData";
const Festivals = () => {
  const divStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  };

  return (
    <>
      <Typography variant="h5" component="div">
        Festivals
      </Typography>
      <div style={divStyle}>
        {festivalData.map((data, index) => {
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

export default Festivals;
