import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard({ ActiveProjects }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexFlow: "wrap"
        }}>
        {ActiveProjects.map((projectData, index) => (
          <Card
            sx={{ minWidth: 275, maxWidth: 100, margin: "15px 20px 15px 0px" }}
            key={index}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom>
                Status : {projectData.status}
              </Typography>
              <Typography variant="h5" component="div">
                Name : {projectData.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Progress: {projectData.progress}
              </Typography>
              <Typography variant="body2">
                Description : {projectData.description}
                <br />
                <br />
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                StartDate - {projectData.startDate}
                <br />
                EndDate - {projectData.endDate}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
}
