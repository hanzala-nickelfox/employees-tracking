import React from "react";
import { useState } from "react";
import "./signUp.scss";
import BasicBtn from "../../../components/shared/Basic-btn.js";
import { Alert } from "react-bootstrap";
import Login from "../login/index";
import { TextField } from "@mui/material";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [signUp, setSignUp] = useState(true);

  // useEffect(() => {
  //   // storing input name
  //   localStorage.setItem("name", JSON.stringify(name));
  // }, [name]);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("check====");

    if (!name || !email || !password || !confirmPassword) {
      setFlag(true);
      console.log(localStorage, "localStorage true=====");
      console.log(name, "name====");
      localStorage.setItem("Name", JSON.stringify(name));
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));

      setSignUp(!signUp);
    } else {
      console.log(localStorage, "localStorage false=====");
      setFlag(false);
    }
  }

  function handleName(e) {
    const value = e.target.value;
    setName(value);
  }

  function hanldeClick(e) {
    e.preventDefault();
    setSignUp(false);
    console.log(signUp, "sign up false=====");
  }

  return (
    <>
      {signUp !== false ? (
        <section className="signUp">
          <div className="signUp__container">
            <h3 className="signUp__container__title">Sign Up</h3>
            <div className="signUp__container__form">
              <form onSubmit={handleSubmit}>
                <br />
                <TextField
                  type="text"
                  name="fullname"
                  value={name}
                  onChange={handleName}
                  placeholder="Full name"
                />
                <br /> <br />
                <TextField
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br /> <br />
                <TextField
                  type="number"
                  name="password"
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
                <BasicBtn text="submit" type="submit"></BasicBtn>
              </form>
            </div>
          </div>

          <br />
          <h3 className="d-iniline">
            Already have account sign in:{" "}
            <BasicBtn text="login" handleClick={hanldeClick}></BasicBtn>
          </h3>

          {/* {flag &&
            (<Alert color="primary" variant="danger">
              <h3>Please fill correct info.</h3>
            </Alert>)(
              <Alert color="primary" variant="success">
                false
              </Alert>
            )} */}

          {flag !== false ? (
            <Alert color="primary" variant="danger">
              <h3> Some went wrong!</h3>
            </Alert>
          ) : (
            <>
              {signUp !== true ? (
                <Alert color="primary" variant="success">
                  <h3>successfully sign up!</h3>
                </Alert>
              ) : (
                <Alert color="primary" variant="warn">
                  <h3>Please fill the details</h3>
                </Alert>
              )}
            </>
          )}
        </section>
      ) : (
        <Login />
      )}
    </>
  );
};

export default SignUp;
