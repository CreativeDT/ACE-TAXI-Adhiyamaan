import React from "react";
import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    mobilenumber: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, SetIsSubmitting] = useState(false);

  const onChangeHandler = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    SetIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys.errors === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { onChangeHandler, values, handleFormSubmit, errors };
};

export default useForm;
