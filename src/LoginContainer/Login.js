import React, { useState, Fragment } from "react";
// import useForm from "../Costume Hooks/useForms";
// import Validate from "./ValidateInfo";
import image from "../imageContainer/image.svg";
import TextField from "@mui/material/TextField";
import "./Login.css";

// import "../FormSignUp.css";
// import "..formsContainer/Form.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function Login() {
  return (
    <div>
      <Fragment>
        <div className="full-forms">
          <div className="formContainer-left">
            <p className="headline">ACE Taxi</p>
            <img src={image} alt="iamge" className="img"></img>
          </div>
          <div className="formContainer-right">
            <form className="form">
              <div className="signup login">
                <h3>Login</h3>
              </div>
              <div className="form-inputs">
                <div className="form-inputs">
                  <TextField
                    className="form-lable form-input fname textfield"
                    id="email"
                    type="email"
                    name="email"
                    htmlFor="email"
                    label="Email"
                    size="small"
                    // value={values.email}
                    // onChange={onChangeHandler}
                    InputLabelProps={{ className: "textfiled__lable" }}
                  />
                  {/* {errors.email && <p className="errors">{errors.email}</p>} */}
                </div>

                <div className="form-inputs">
                  <TextField
                    className="form-lable form-input fname textfield"
                    id="password"
                    type="text"
                    name="password"
                    htmlFor="password"
                    label="Password"
                    size="small"
                    // value={values.password}
                    // onChange={onChangeHandler}
                    InputLabelProps={{ className: "textfiled__lable" }}
                  />
                  {/* {errors.password && (
                    <p className="errors">{errors.password}</p>
                  )} */}
                </div>

                <div className="textfield std">
                  <input type="checkbox"></input>
                  <span> </span>
                  <label className="lab">
                    By Proceeding you agree to ACE Taxi{" "}
                    <a href="#" className="link">
                      Privacy Policy
                    </a>
                    , User Aggrement and{" "}
                    <a href="#" className="link">
                      T&Cs
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  //   onClick={handleFormSubmit}
                  className="btn"
                >
                  Create Account
                </button>
              </div>
              <div className="bottom_cnt">
                <div>
                  <a href="#" className="link forgotPassword">
                    Forgot Password
                  </a>
                </div>
                <div className="disc">
                  <p className="signUp">
                    Don't have account{" "}
                    <a href="/signupform" className="link signUp">
                      Signup
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    </div>
  );
}

export default Login;
