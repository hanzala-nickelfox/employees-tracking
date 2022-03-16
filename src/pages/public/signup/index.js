import React, { useState } from "react";
import "./signUp.scss";
import BasicBtn from "../../../components/shared/Basic-btn.js";
import FormField from "../../../components/shared/FormField.js";
import { Col, Row } from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email, password, confirmPassword, "submit=======");

    if (!name || !email || !password || !confirmPassword) {
      localStorage.setItem("Name", JSON.stringify(name));
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));
      localStorage.setItem("Confirm password", JSON.stringify(confirmPassword));
      alert("Successfullt SignUp");
      let path = `/login`;
      navigate(path);
    }
  }

  return (
    <>
      <Container component="main" maxWidth="xs" className="mt-5">
        <Row className="text-center justify-content-center mb-4">
          <Avatar className="mb-4" sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography className="mb-4" component="h1" variant="h5">
            Sign in
          </Typography>
        </Row>
        <Row>
          <form onSubmit={handleSubmit}>
            <Col lg={12} className="mb-4">
              <FormField
                type="text"
                value={name}
                label="Full Name"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}></FormField>
            </Col>
            <Col lg={12} className="mb-4">
              <FormField
                label="Email"
                type="email"
                name={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}></FormField>
            </Col>
            <Col lg={12} className="mb-4">
              <FormField
                type="password"
                name={password}
                value={password}
                label="Password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}></FormField>
            </Col>
            <Col lg={12} className="mb-4">
              <FormField
                type="password"
                name={confirmPassword}
                value={confirmPassword}
                label="Confirm Password"
                placeholder="Confirm password"
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }></FormField>
            </Col>
            <Col lg={12} className="mb-4">
              <BasicBtn
                type="submit"
                variant="contained"
                text="Sign Up"></BasicBtn>
            </Col>
            <Grid container>
              <Grid item>
                <Link to="/login" variant="body2">
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
export default SignUp;
