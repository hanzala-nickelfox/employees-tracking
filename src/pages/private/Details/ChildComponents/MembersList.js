import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function BasicList() {
  const MembersList = [
    {
      name: "Swati sharma",
      role: "Manager",
      profileImage: <Avatar />,
      department: "Management"
    },
    {
      name: "Ravi mourya",
      role: "Lead",
      profileImage: <Avatar />,
      department: "Front-end"
    },
    {
      name: "John Doe",
      role: "Developer",
      profileImage: <Avatar />,
      department: "back-end"
    },
    {
      name: "John Doe",
      role: "Developer",
      profileImage: <Avatar />,
      department: "Front-end"
    }
  ];

  return (
    <Card sx={{ minWidth: 275, mb: 4 }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}>
        <Typography variant="h6" width={"100%"} pl={"16px"} component="div">
          Name
        </Typography>
        <Typography variant="h6" width={"100%"} pl={"16px"} component="div">
        Role
        </Typography>
        <Typography variant="h6" width={"100%"} pl={"16px"} component="div">
        Department
        </Typography>
      </nav>
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          bgcolor: "background.paper",
          display: "flex",
          justifyContent: "space-between"
        }}>
        <nav
          style={{
            width: "100%"
          }}>
          {MembersList.map((MembersList, index) => (
            <>
              <List
                key={index}
                disablePadding
                style={{
                  display: "flex"
                }}>
                <ListItem button divider>
                  <ListItemIcon>
                    <Avatar />
                  </ListItemIcon>
                  <ListItemText primary={MembersList.name} />
                </ListItem>
                <ListItem button divider>
                  <ListItemText primary={MembersList.role} />
                </ListItem>
                <ListItem button divider>
                  <ListItemText primary={MembersList.department} />
                </ListItem>
              </List>
            </>
          ))}
        </nav>
      </Box>
    </Card>
  );
}
