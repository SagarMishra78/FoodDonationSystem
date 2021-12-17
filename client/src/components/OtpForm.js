import { toast } from "react-toastify";
import React, { useState } from "react";
import FormInput from "./FormInput";
import PasswordForm from "./PasswordForm";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const OtpForm = () => {
  const [value, setValue] = useState({
    email: "",
  });

  const [otpForm, showForm] = useState(true);

  const sendOtp = async () => {
    const { email } = value;
    const res = await fetch("/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    await res.json();
    if (res.status === 200) {
      toast.success("Code has been sent to your Email", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false,
      });
      showForm(false);
    } else {
      toast.error("Email id is not registered", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false,
      });
    }
  };

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email ID",
      errorMessage: "please enter valid email id",
      label: "Email",
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      {otpForm ? (
        <form onSubmit={handleSubmit}>
          <h1>Reset Password</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={value[input.name]}
              onChange={onChange}
            />
          ))}
          <button className="buttonLR" onClick={sendOtp}>
            Send OTP
          </button>
        </form>
      ) : (
        <PasswordForm email={inputs.email}/>
      )}
    </div>
  );
};

export default OtpForm;
