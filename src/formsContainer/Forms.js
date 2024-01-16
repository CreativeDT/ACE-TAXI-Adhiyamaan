import React, { useState } from "react";
import FormSignUp from "./FormSignUp";
import LoginForm from "./LoginForm";

function Forms() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  };
  return (
    <div>
      {!isSubmitted ? <FormSignUp submitForm={submitForm} /> : <LoginForm /> }
    </div>
  );
}

export default Forms;
