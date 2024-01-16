const Validate = (values) => {
  let errors = {};
  if (!values.firstname.trim()) {
    errors.firstname = "*First Name Required";
  }
  if (!values.lastname) {
    errors.lastname = "*Last Name Required";
  }
  if (!values.mobilenumber){
    errors.mobilenumber= "*Mobile Number Required"
  }else if((/\S+@\S+\.\S+/.test(values.mobilenumber))){
    errors.mobilenumber= "*invalid Mobile Number"

  }
  if (!values.email) {
    errors.email = "*Email address Required";
  } else if (
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email)
  ) {
    errors.email = "*Invalid Email address";
  }
  if (!values.password) {
    errors.password = "*Password is Required";
  } else if (values.password.lenght < 8) {
    errors.password = "*Password must be more than 8 character";
  }
  if (!values.password2) {
    errors.password2 = "*Enter Password";
  } else if (values.password2 !== values.password) {
    errors.password = "*password not matched";
  }
  return errors;
};




export default Validate;
