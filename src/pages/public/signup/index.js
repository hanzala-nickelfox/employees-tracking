import React, { useState, useEffect } from "react";
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
import { signup as signupAction } from "../../../redux/users/actions";

const SignUp = () => {
  const intialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
  const [formData, setFormData] = useState(intialValues);
  const [globalError, setGlobalError] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const { name, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    formData;
  };

  useEffect(() => {
    formData;
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      formData;
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    }
    if (values.password.length < 4 && values.password.length > 1) {
      errors.password = "Password must be at least 4 characters";
    }
    if (
      values.confirmPassword.length < 4 &&
      values.confirmPassword.length > 1
    ) {
      errors.confirmPassword = "Password must be at least 4 characters";
    }
    if (password !== confirmPassword) {
      errors.password = "Password and Confirm Password does not match";
      errors.confirmPassword = "Password and Confirm Password does not match";
    }
    if (name.length < 4 && name.length > 1) {
      errors.name = "Name must be at least 4 characters";
    }

    if (email.length > 2 && !email.includes("@") && !email.includes(".")) {
      errors.email = "Please fill valid email id";
    }

    return errors;
  };

  let navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmit(true);

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      localStorage.setItem("Name", JSON.stringify(name));
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));
      localStorage.setItem("Confirm password", JSON.stringify(confirmPassword));
      // localStorage.setItem("isLoggedIn", JSON.stringify(true));
      setGlobalError(globalError === "" ? "Successfully Signed Up" : "");
      let path = `/login`;
      navigate(path);
      dispatch(signupAction({ name, email, password, confirmPassword }));
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
            Sign up
          </Typography>
        </Row>
        <Row>
          <form onSubmit={handleSubmit}>
            <Col lg={12} className="mb-4">
              <FormField
                type="text"
                name="name"
                value={formData.name}
                label="Name"
                placeholder="Enter Name"
                onChange={handleChange}
              />
              <span> {formErrors.name}</span>
            </Col>

            <Col lg={12} className="mb-4">
              <FormField
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
              />
              <span> {formErrors.email}</span>
            </Col>
            <Col lg={12} className="mb-4">
              <FormField
                type="password"
                name="password"
                value={formData.password}
                label="Password"
                placeholder="Password"
                onChange={handleChange}
              />
              <span> {formErrors.password}</span>
            </Col>
            <Col lg={12} className="mb-4">
              <FormField
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                label="Confirm Password"
                placeholder="Confirm password"
                onChange={handleChange}
              />
              <span> {formErrors.confirmPassword}</span>
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
