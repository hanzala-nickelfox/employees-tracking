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
import { useDispatch } from "react-redux";
import { signUp } from "redux/slices/signupSlice";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [emailError, setEmailError] = useState("");
  const [globalError, setGlobalError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cmPasswordError, setCmPasswordError] = useState("");
  const { name, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  let navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setGlobalError(
        globalError === ""
          ? "Please fill all the fields"
          : "Please fill all the fields"
      );
    } else if (name.length < 3) {
      setNameError(
        nameError === "" ? "Name must be at least 3 characters" : ""
      );
    }
    if (!email.includes("@") && !email.includes(".")) {
      if (email.length > 3 && !email.includes("@") && !email.includes(".")) {
        setEmailError(emailError === "" ? "Please fill email id" : "");
      } else {
        // setEmailError(emailError === "" ? "" : "");
      }
    } else if (password !== confirmPassword) {
      setCmPasswordError(
        cmPasswordError === ""
          ? "Password and Confirm Password does not match"
          : ""
      );
    } else if (password.length < 4) {
      setPasswordError(
        passwordError === "" ? "Password must be at least 4" : ""
      );
    } else {
      localStorage.setItem("Name", JSON.stringify(name));
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));
      localStorage.setItem("Confirm password", JSON.stringify(confirmPassword));
      setGlobalError(globalError === "" ? "Successfully Signed Up" : "");
      let path = `/login`;
      navigate(path);
      dispatch(signUp({ name, email, password, confirmPassword }));
    }
  }

  function handileErrors() {
    if (globalError) {
      return (
        <Grid item xs={12}>
          <Typography
            className="text-danger"
            variant="body1"
            component="p"
            gutterBottom>
            {globalError} nnn
          </Typography>
        </Grid>
      );
    } else if (nameError) {
      return (
        <Grid item xs={12}>
          <Typography
            className="text-danger"
            variant="body1"
            component="p"
            gutterBottom>
            {nameError}
          </Typography>
        </Grid>
      );
    }
  }

  return (
    <>
      <Container component="main" maxWidth="xs" className="mt-5">
        {globalError ? <span>{globalError}</span> : null}
        <Row className="text-center justify-content-center mb-4">
          <Avatar className="mb-4" sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography className="mb-4" component="h1" variant="h5">
            Sign in
          </Typography>
        </Row>
        <Row>
          <form onSubmit={handleSubmit} 
          // onChange={handileErrors}
          >
            <Col lg={12} className="mb-4">
              <FormField
                type="text"
                name="name"
                value={name}
                label="Full Name"
                placeholder="Enter Name"
                onChange={(handleChange, handileErrors)}
              />
              {nameError ? <span>{nameError}</span> : null}
            </Col>

            <Col lg={12} className="mb-4">
              <FormField
                label="Email"
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={handleChange}
              />
              {emailError ? <span>{emailError}</span> : null}
            </Col>
            <Col lg={12} className="mb-4">
              <FormField
                type="password"
                name="password"
                value={password}
                label="Password"
                placeholder="Password"
                onChange={handleChange}
              />
              {passwordError ? <span>{passwordError}</span> : null}
              {cmPasswordError ? <span>{cmPasswordError}</span> : null}
            </Col>
            <Col lg={12} className="mb-4">
              <FormField
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                label="Confirm Password"
                placeholder="Confirm password"
                onChange={handleChange}
              />
              {cmPasswordError ? <span>{cmPasswordError}</span> : null}
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
