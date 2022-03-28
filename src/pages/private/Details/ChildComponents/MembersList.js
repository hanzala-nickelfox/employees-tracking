import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Avatar } from "@mui/material";

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
              <ListItem>
                <ListItemIcon>
                  <Avatar />
                </ListItemIcon>
                <ListItemText primary={MembersList.name} />
              </ListItem>
              <ListItem>
                <ListItemText primary={MembersList.role} />
              </ListItem>
              <ListItem>
                <ListItemText primary={MembersList.department} />
                <Divider />
              </ListItem>
            </List>
          </>
        ))}
      </nav>
    </Box>
  );
}
