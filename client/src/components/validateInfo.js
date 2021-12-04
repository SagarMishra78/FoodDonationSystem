import "../App.css";

export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Please Enter Username";
  }

  if (!values.email) {
    errors.email = "Please Enter Email";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Invalid Email";
  }

  if (!values.password) {
    errors.password = "Please Enter Password";
  } else if (values.password.length < 6) {
    errors.password = "Password must be 6 characters or more";
  }

  if (!values.password2) {
    errors.password2 = "Please Confirm Password";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Password not matched";
  }

  return errors;
}
