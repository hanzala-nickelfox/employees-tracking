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
import { useDispatch, useSelector } from "react-redux";
import { signin as signinAction } from "../../../redux/users/actions";
import AppLoader from "components/Loader/AppLoader.js";

const Login = () => {
  const { isloggedIn } = useSelector((state) => state.userReducer);
  const { isChecking } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  useEffect(() => {
    if (isloggedIn) {
      const token = localStorage.getItem("token");
      if (token) {
        setGlobalError(globalError === "" ? "Successfully login" : "");
        const path = `/dashboard`;
        navigate(path);
      }
    } else {
      navigate("/login");
    }
  }, [isloggedIn]);

  function handlelogin(e) {
    e.preventDefault();
    dispatch(signinAction({ email, password }));
    setFormErrors(validate(userData));
    setIsSubmit(true);
  }
  return (
    <>
      {isChecking && <AppLoader />}
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
                  {"Haven't got an account? Sign up"}
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
