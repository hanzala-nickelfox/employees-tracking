import React from "react";
import "./signUp.scss";
import BasicBtn from "../../../components/shared/Basic-btn.js";
import TextField from "../../../components/shared/FormField.js";

const SignUp = () => {
  return (
    <>
      <section className="signUp">
        <div className="signUp__container">
          <div className="signUp__container__title">Sign Up</div>
          <div className="signUp__container__form">
            <form>
              <br />
              <TextField type="text" name="Full name" placeholder="Full name" />
              <br /> <br />
              <TextField type="email" name="Email" placeholder="Email" />
              <br /> <br />
              <TextField type="number" name="Password" placeholder="Password" />
              <br /> <br />
              <TextField
                type="number"
                name="Confirm password"
                placeholder="Confirm password"
              />
              <br /> <br />
              <BasicBtn text="Submit"></BasicBtn>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
