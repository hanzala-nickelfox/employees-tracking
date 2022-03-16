import React, { useState } from "react";
// import "./signUp.scss";
import BasicBtn from "../../../components/shared/Basic-btn.js";
import { Row, Col } from "react-bootstrap";

import { Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import FormField from "../../../components/shared/FormField";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const Login = () => {
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");

  function handlelogin(e) {
    e.preventDefault();
    const mail = localStorage.getItem("Email").replace(/(^"|"$)/g, "");
    const pass = localStorage.getItem("Password").replace(/(^"|"$)/g, "");
    console.log(mail, pass);
  }

  return (
    <>
      <Container component="main" maxWidth="xs" className="mt-5">
        <Row className="text-center justify-content-center mb-4">
          <Avatar className="mb-4" sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography className="mb-4" component="h1" variant="h5">
            Login
          </Typography>
        </Row>
        <Row>
          <form onSubmit={handlelogin}>
            <Col lg={12} className="mb-4">
              <FormField
                label="Email"
                type="email"
                name={emaillog}
                value={emaillog}
                placeholder="Email"
                onChange={(e) => setEmaillog(e.target.value)}></FormField>
            </Col>
            <Col lg={12} className="mb-4">
              <FormField
                type="password"
                name={passwordlog}
                value={passwordlog}
                label="Password"
                placeholder="Password"
                onChange={(e) => setPasswordlog(e.target.value)}></FormField>
            </Col>
            <Col lg={12} className="mb-4">
              <BasicBtn
                variant="contained"
                type="submit"
                onChange={handlelogin}
                text="Sign Up"></BasicBtn>
            </Col>
            <Grid container>
              <Grid item xs>
                <Link to="/Forgot password  " variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/" variant="body2">
                  {"Already have an account? Login"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Row>
      </Container>
    </>
  );
};

export default Login;
