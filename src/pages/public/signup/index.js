import React, { useState } from "react";
import "./signUp.scss";
import BasicBtn from "../../../components/shared/Basic-btn.js";
import FormField from "../../../components/shared/FormField.js";
import { Alert, Col, Row } from "react-bootstrap";
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Login from "../login/index";
import { Container, TextField } from '@mui/material';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

const SignUp = () => {
  const [namelog, setNamelog] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submit, setSubmit] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    console.warn(submit, "check=====");

    alert("working");

    if (!namelog || !email || !password || !confirmPassword) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));
      localStorage.setItem("Namelog", JSON.stringify(namelog));
      console.log(localStorage, "Email================");
      setLogin(!login);
    }
  }

  function hanldeClick() {
    alert("hello");
    // setLogin(true);
  }

  function AlerButton() {
    // alert("working");
    console.log(login, "check=====");
  }

  return (
    <>
      <Container component="main" maxWidth="xs" className="mt-5">
        <Row className="text-center justify-content-center mb-4">
          <Avatar className="mb-4" sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography className="mb-4" component="h1" variant="h5">
            Sign in
          </Typography>
        </Row>
        <Row >
          <Col lg={12} className='mb-4'>
            <FormField
              type='text'
              name={namelog}
              label='Full Name'
              placeholder='Enter Name'
              onChange={(e) => setNamelog(e.target.value)}
            ></FormField>
          </Col>
          <Col lg={12} className='mb-4'>
            <FormField
              label='Email'
              type="email"
              name={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></FormField>
          </Col>
          <Col lg={12} className='mb-4'>
            <FormField
              type="password"
              name={password}
              label='Password'
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></FormField>
          </Col>
          <Col lg={12} className='mb-4'>
            <FormField
              type="number"
              name={confirmPassword}
              label='Confirm Password'
              placeholder="Confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></FormField>
          </Col>
          <Col lg={12} className='mb-4'>
            <BasicBtn variant='contained' text='Sign Up'></BasicBtn>
          </Col>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Row>
      </Container>

      <button onClick={AlerButton()}>Alert button</button>
      {login !== false ? (
        <section className="signUp">
          <div className="signUp__container">
            <h3 className="signUp__container__title">Sign Up</h3>
            <div className="signUp__container__form">
              <form onSubmit={handleSubmit}>
                <br />
                <TextField
                  type="text"
                  name={namelog}
                  placeholder="Full name"
                  onChange={(e) => setNamelog(e.target.value)}
                />
                <br /> <br />
                <TextField
                  type="email"
                  name={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br /> <br />
                <TextField
                  type="number"
                  name={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br /> <br />
                <TextField
                  type="number"
                  name={confirmPassword}
                  placeholder="Confirm password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <br /> <br />
                <BasicBtn
                  text="submit"
                  name={submit}
                  onChange={(e) => setSubmit(e.target.value)}></BasicBtn>
                <h3 className="d-iniline">
                  Already sign in,{" "}
                  <BasicBtn
                    text="login"
                    name={login}
                    className="w-25"
                    onClick={() => hanldeClick()}></BasicBtn>
                </h3>
              </form>
            </div>
          </div>

          {flag &&
            (<Alert color="primary" variant="danger">
              <h3>Please fill correct info.</h3>
            </Alert>)(
              <Alert color="primary" variant="success">
                false
              </Alert>
            )}
        </section>
      ) : (
        <Login />
      )}
    </>
  );
};

export default SignUp;
