import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "./FormInput";
import { userContext } from "../App";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Signin = () => {
  const Navigate = useNavigate();
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
      toast.warning("Please fill data", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: true,
        hideProgressBar: true,
      });
    } else if (res.status === 400) {
      toast.error("Invalid Credentials", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: true,
        hideProgressBar: true,
      });
    } else if (res.status === 201) {
      dispatch({ type: "USER", payload: true });
      toast.success("Logged in...", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: true,
        hideProgressBar: true,
      });
      Navigate("/restraunthome");
    } else if (res.status === 200) {
      dispatch({ type: "USER", payload: true });
      toast.success("Logged in...", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: true,
        hideProgressBar: true,
      });
      Navigate("/ngohome");
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
