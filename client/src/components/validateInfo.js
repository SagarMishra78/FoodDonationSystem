import "../App.css";

export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Please Enter Username";
  }

  if (!values.email) {
    errors.email = "Please Enter Email";
  } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {
    errors.email = "Invalid Email";
  }

  if (!values.password) {
    errors.password = "Please Enter Password";
  } else if (values.password.length < 6) {
    errors.password = "Password must be 6 characters or more";
  }

  if (!values.cpassword) {
    errors.cpassword = "Please Confirm Password";
  } else if (values.cpassword !== values.password) {
    errors.cpassword = "Password not matched";
  }

  return errors;
}
