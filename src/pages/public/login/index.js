import React, { useState } from "react";
// import "./signUp.scss";
import BasicBtn from "../../../components/shared/Basic-btn.js";
import { Alert } from "react-bootstrap";

import { TextField } from '@mui/material';


const Login = () => {
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");
  const [flag, setFlag] = useState(false);
  const [home, sethome] = useState(true);

  function handlelogin(e) {
    e.preventDefault();
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    let pass = localStorage.getItem("password").replace(/"/g, "");

    if (!emaillog || !passwordlog) {
      setFlag(true);
    } else if (passwordlog === pass && emaillog === mail) {
      setFlag(true);
    } else {
      sethome(!home);
      setFlag(false);
    }
  }

  return (
    <>
      {home ? <h1>home</h1> : <h1>hello</h1>}

      {/* <Container component="main" maxWidth="xs" className="mt-5">
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
      </Container> */}

      <section className="signUp">
        <div className="signUp__container">
          <h3 className="signUp__container__title">Login</h3>
          <div className="signUp__container__form">
            <form onSubmit={handlelogin}>
              <br />
              <TextField
                type="email"
                name={emaillog}
                placeholder="Email"
                onChange={(e) => setEmaillog(e.target.value)}
              />
              <br /> <br />
              <TextField
                type="number"
                name={passwordlog}
                placeholder="Password"
                onChange={(e) => setPasswordlog(e.target.value)}
              />
              <br /> <br />
              <BasicBtn
                text="submit"
                // name={submit}
                onChange={handlelogin()}></BasicBtn>
              <h3 className="d-iniline">
                if you dont have account sign up.
                <BasicBtn
                  text="Sign up"
                  name="Sign up"
                  className="w-25"></BasicBtn>
              </h3>
            </form>
          </div>
        </div>

        {flag &&
          (<Alert color="primary" variant="danger">
            <h3>Please fill the details.</h3>
          </Alert>)(
            <Alert color="primary" variant="success">
              false
            </Alert>
          )}
      </section>
    </>
  );
};

export default Login;
