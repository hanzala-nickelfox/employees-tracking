import React, { useState } from "react";
// import "./signUp.scss";
import BasicBtn from "../../../components/shared/Basic-btn.js";
import FromField from "../../../components/shared/FormField.js";
import { Alert, Col, Container, Row } from "react-bootstrap";
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
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

      <Container fluid>
        <Row>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
        </Row>
        <Row>
          <Col lg={12}>
            <FromField
              type='email'
              name={emaillog}
              placeholder='email'
              onChange={(e) => setEmaillog(e.target.value)}
            ></FromField>
          </Col>
        </Row>
      </Container>

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
