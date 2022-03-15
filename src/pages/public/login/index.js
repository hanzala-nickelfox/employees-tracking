import React, { useState } from "react";
import BasicBtn from "../../../components/shared/Basic-btn.js";
import TextField from "../../../components/shared/FormField.js";
import { Alert } from "react-bootstrap";

const Login = () => {
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");
  const [flag, setFlag] = useState(false);
  const [dashboard, setDashboard] = useState(true);
  const [signUp, setSignUp] = useState(true);
  function handlelogin(e) {
    e.preventDefault();
    console.log("handlelogin =====");
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    let pass = localStorage.getItem("password").replace(/"/g, "");

    if (!emaillog || !passwordlog) {
      setFlag(true);
    } else if (passwordlog === pass && emaillog === mail) {
      setFlag(true);
    } else {
      setDashboard(!dashboard);
      setFlag(false);
    }
  }
  function hanldeClick(e) {
    e.preventDefault();
    setSignUp(false);
    console.log(signUp, "signUp false=====");
  }
  return (
    <>
      {signUp !== true ? (
        <h1>sign up</h1>
      ) : (
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
                <h3 className="d-iniline">
                  if you dont have account sign up:
                  <BasicBtn text="Sign up" handleClick={hanldeClick}></BasicBtn>
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
      )}
    </>
  );
};

export default Login;
