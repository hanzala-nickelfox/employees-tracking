import React, { useState } from "react";
import BasicBtn from "../../../components/shared/Basic-btn.js";
import { Alert } from "react-bootstrap";
import { TextField } from "@mui/material";
import Signup from "../signup/index.js";
import Dashboard from "../../private/dashboard/index.js";

const Login = () => {
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");
  const [flag, setFlag] = useState(false);
  const [signUp, setSignUp] = useState(true);

  function handlelogin(e) {
    e.preventDefault();
    let mail = localStorage.getItem("Email").replace(/(^"|"$)/g, "");
    let pass = localStorage.getItem("Password").replace(/(^"|"$)/g, "");
    if (emaillog & passwordlog) {
      console.log("emaillog passwordlog  true ===================");
      setFlag(true);
    }
    if ((emaillog === mail) & (passwordlog === pass)) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }
  function hanldeClick(e) {
    e.preventDefault();
    setSignUp(false);
  }
  return (
    <>
      {signUp !== true ? (
        <Signup />
      ) : (
        <>
          {flag !== true ? (
            <section className="Login====    signUp">
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
                    <BasicBtn text="submit" type="submit"></BasicBtn>
                  </form>
                </div>
              </div>
              <br />
              <h3 className="d-iniline">
                If you dont have account sign up:
                <BasicBtn text="Sign up" handleClick={hanldeClick}></BasicBtn>
              </h3>

              {flag &&
                (<Alert color="primary" variant="danger">
                  <h3>Please fill the details.</h3>
                </Alert>)(
                  <Alert color="primary" variant="success">
                    false
                  </Alert>
                )}
            </section>
          ) : (
            <Dashboard />
          )}
        </>
      )}
    </>
  );
};

export default Login;
