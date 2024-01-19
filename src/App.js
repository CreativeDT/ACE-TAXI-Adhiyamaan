import React from "react";
import { Fragment } from "react";
import Forms from "./formsContainer/Forms";
import Login from "./LoginContainer/Login";
import FormSignUp from "./formsContainer/FormSignUp";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signupform" element={<FormSignUp />} />
      </Routes>
    </>
  );
}

export default App;
