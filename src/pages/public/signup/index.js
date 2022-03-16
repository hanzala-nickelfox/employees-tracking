import React, { useState } from "react";
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
    // var pattern = new RegExp(
    //   /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    // );

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all the fields");
    } else if (name.length < 3) {
      alert("Name must be at least 3 characters");
    }
    if (!email.includes("@") && !email.includes(".")) {
      alert("Enter a valid email id");
    } else if (password !== confirmPassword) {
      alert("Password and Confirm Password does not match");
    } else if (password.length < 4) {
      alert("Password must be at least 4 characters");
    } else {
      localStorage.setItem("Name", JSON.stringify(name));
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));
      localStorage.setItem("Confirm password", JSON.stringify(confirmPassword));
      alert("Successfully SignUp");
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
