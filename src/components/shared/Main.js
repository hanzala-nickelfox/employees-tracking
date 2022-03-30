import { styled } from "@mui/material/styles";

const drawerWidth = 240;
export const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(6),

  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginTop: "64px",
  marginLeft: "110px",

  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: `${drawerWidth}px`
  })
}));
