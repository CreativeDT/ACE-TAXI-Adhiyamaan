import React, { useState, Fragment } from "react";
import useForm from "../Costume Hooks/useForms";
import Validate from "./ValidateInfo";
import image from "../imageContainer/image.svg";
import TextField from "@mui/material/TextField";

import "./FormSignUp.css";
import "./Form.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function FormSignUp({ submitForm }) {
  const { onChangeHandler, values, handleFormSubmit, errors} = useForm(
    submitForm,
    Validate
  );
  const [disable, setDisable] = useState(" ");

  const diablity = () => {
    if ((errors = "false")) {
      setDisable = "false";
    } else {
      setDisable = "true";
    }
  };
  return (
    <Fragment>
      <div className="full-forms">
        <div className="formContainer-left">
          <img src={image} alt="iamge" className="img"></img>
        </div>
        <div className="formContainer-right">
          <form className="form" onsubmit={handleFormSubmit}>
            <div className="signup">
              <h3>SignUp</h3>
            </div>
            <div className="form-inputs">
              <div className="fullname form-inputs">
                <div className="f-name">
                  <TextField
                    // className="form-lable form-input fname "
                    error={true}
                    className="f-name textField"
                    id="outlined-error"
                    type="text"
                    name="firstname"
                    htmlFor="firstname"
                    label="First Name"
                    size="small"
                    multiline
                    maxRows={2}
                    InputLabelProps={{ className: "textfiled__lable" }}
                    value={values.firstname}
                    onChange={onChangeHandler}
                  />
                  {/* {errors.firstname && (
                    <p className="errors">{errors.firstname}</p>
                  )} */}
                </div>
                <div className="l-name">
                  <TextField
                    // className="form-lable form-input fname "
                    id="name"
                    className="l-name textfield"
                    type="text"
                    name="lastname"
                    htmlFor="lastname"
                    label="last Name"
                    size="small"
                    multiline
                    maxRows={6}
                    InputLabelProps={{ className: "textfiled__lable" }}
                    value={values.lastname}
                    onChange={onChangeHandler}
                  />
                  {errors.lastname && (
                    <p className="errors">{errors.lastname}</p>
                  )}
                </div>
              </div>

              <div className="form-inputs">
                <TextField
                  className="form-lable form-input fname textfield number"
                  id="name"
                  type="number"
                  name="mobilenumber"
                  htmlFor="mobilenumber"
                  // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  // maxlength="3"
                  label="Mobile Number"
                  size="small"
                  value={values.mobilenumber}
                  onChange={onChangeHandler}
                  InputLabelProps={{ className: "textfiled__lable" }}
                  sx={{
                    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                      {
                        display: "none",
                      },
                    "& input[type=number]": {
                      MozAppearance: "textfield",
                    },
                  }}
                />
                {errors.mobilenumber && (
                  <p className="errors">{errors.mobilenumber}</p>
                )}
              </div>

              <div className="form-inputs">
                <TextField
                  className="form-lable form-input fname textfield"
                  id="email"
                  type="email"
                  name="email"
                  htmlFor="email"
                  label="Email"
                  size="small"
                  value={values.email}
                  onChange={onChangeHandler}
                  InputLabelProps={{ className: "textfiled__lable" }}
                />
                {errors.email && <p className="errors">{errors.email}</p>}
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
                  value={values.password}
                  onChange={onChangeHandler}
                  InputLabelProps={{ className: "textfiled__lable" }}
                />
                {errors.password && <p className="errors">{errors.password}</p>}
              </div>

              <div className="form-inputs">
                <TextField
                  className="form-lable form-input fname textfield"
                  id="password"
                  type="text"
                  name="password2"
                  htmlFor="password2"
                  label="Re-Enter Password"
                  size="small"
                  value={values.password2}
                  onChange={onChangeHandler}
                  InputLabelProps={{ className: "textfiled__lable" }}
                />
                {errors.password2 && (
                  <p className="errors">{errors.passwrod2}</p>
                )}
              </div>

              <div className="textfield">
                <input type="checkbox"></input>
                <span> </span>
                <label className="lab">
                  By Proceeding you agree to ACE Taxi Privacy Policy, User
                  Aggrement and T&Cs
                </label>
              </div>

              <button  type="submit" onClick={handleFormSubmit} className="btn">
                Create Account
              </button>

              <div className="anchor">
                <h4>
                  Already Having account? <a href="#">Login</a>
                </h4>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default FormSignUp;
