import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import FormInput from "./FormInput";
import { userContext } from "../App";

const Signin = () => {
  const { dispatch } = useContext(userContext);

  const [values, setValues] = useState({
    phone: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "phone",
      type: "tel",
      placeholder: "Phone Number",
      errorMessage: "please enter valid phone number",
      label: "Phone Number",
      pattern: "[0-9]{10}",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Please enter Password",
      label: "Password",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //   Login

  const loginUser = async (e) => {
    const { phone, password } = values;

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone,
        password,
      }),
    });

    await res.json();
    if (res.status === 428) {
      document.getElementById("para").innerHTML = "Please fill Data";
      document.getElementById("para").style.color = "red";
    } else if (res.status === 400) {
      document.getElementById("para").innerHTML = "Invalid Credentials";
      document.getElementById("para").style.color = "red";
    } else {
      dispatch({ type: "USER", payload:true });
      document.getElementById("para").innerHTML = "Login Successfull!!";
      document.getElementById("para").style.color = "green";
    }
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <p id="para"></p>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <Link to={"/resetPassword"}>Forgot Password?</Link>
        <button className="buttonLR" onClick={loginUser}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signin;
