import React from "react";
import { ToastContainer } from "react-toastify";
import AppRouter from "./router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { defaultTheme } from "./themes/defaultTheme";
import "./styles/global.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

/**
 * @description Check if browser is Safar
 * @description It'll be usefull for web notifications
 */

if (window.safari) {
  console.log("safari browser detected");
} else {
  // initializeFirebase();
}

function App() {
  const currentTheme = createTheme(defaultTheme);
  return (
    <ThemeProvider theme={currentTheme}>
      <AppRouter />
      <ToastContainer autoClose={2000} />
    </ThemeProvider>
  );
}

export default App;
