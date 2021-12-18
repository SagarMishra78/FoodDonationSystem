import React, { useState } from "react";
import FormInput from "./FormInput";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const PasswordForm = (props) => {
  const [values, setValues] = useState({
    code: "",
    password: "",
    cpassword: "",
  });

  const Confirm = async () => {
    Object.assign(values, props);
    const { code, email, password } = values;
    const res = await fetch("/changePassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
        email,
        password,
      }),
    });

    await res.json();
    if (res.status === 200) {
      toast.success("Password Changed", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false,
      });
    } else {
      toast.error("Password not changed", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false,
      });
    }
  };

  const inputs = [
    {
      id: 1,
      name: "code",
      type: "text",
      inputMode: "numeric",
      placeholder: "OTP",
      errorMessage: "OTP not valid",
      label: "OTP",
      maxLength: "4",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Enter Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: "cpassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Change Password</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="buttonLR" onClick={Confirm}>
          Confirm
        </button>
      </form>
    </div>
  );
};

export default PasswordForm;
