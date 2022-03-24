import React, { useState, useEffect } from "react";
import BasicBtn from "../../../components/shared/Basic-btn.js";
import { Row, Col } from "react-bootstrap";
import { Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import FormField from "../../../components/shared/FormField";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, setIsLoggedIn } from "redux/slices/loginSlice.js";

const Login = () => {
  const intialValues = {
    email: "",
    password: ""
  };
  const [userData, setUserData] = useState(intialValues);
  const [globalError, setGlobalError] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const { email, password } = userData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    userData;
  };

  useEffect(() => {
    userData;
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      userData;
    }
  }, [formErrors]);

  const validate = (values) => {
    const mail = localStorage.getItem("Email").replace(/(^"|"$)/g, "");
    const pass = localStorage.getItem("Password").replace(/(^"|"$)/g, "");
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (values.email !== mail) {
      errors.email = "Email is not valid";
    }
    if (values.password !== pass) {
      errors.password = "Password is not valid";
    }

    return errors;
  };

  let navigate = useNavigate();
  const dispatch = useDispatch();

  function handlelogin(e) {
    e.preventDefault();
    dispatch(login({ email, password }));
    dispatch(setIsLoggedIn(true));
    setFormErrors(validate(userData));
    setIsSubmit(true);
    const mail = localStorage.getItem("Email").replace(/(^"|"$)/g, "");
    const pass = localStorage.getItem("Password").replace(/(^"|"$)/g, "");
    if (email == mail && password == pass) {
      setGlobalError(globalError === "" ? "Successfully login" : "");
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      let path = `/dashboard`;
      navigate(path);
      window.location.reload(false);
    }
  }
  return (
    <>
      <Container component="main" maxWidth="xs" className="mt-5">
        {globalError}
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
                name="email"
                value={email}
                placeholder="Email"
                onChange={handleChange}
              />
              <span> {formErrors.email}</span>
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
              <span> {formErrors.password}</span>
            </Col>
            <Col lg={12} className="mb-4">
              <BasicBtn
                variant="contained"
                type="submit"
                onChange={handlelogin}
                text="Login"></BasicBtn>
            </Col>
            <Grid container>
              <Grid item xs>
                <Link to="/Forgot password  " variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/" variant="body2">
                  {"Haven't an account? Sign up"}
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
