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

  const emailpattern = "[a-z0-9._%+-]+@[Gg][Mm][Aa][Ii][Ll]+.com$";

  const [otpForm, showForm] = useState(true);

  const sendOtp = async () => {
    const { email, expireIn } = value;
    const res = await fetch("/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        expireIn,
      }),
    });
    await res.json();
    if (res.status === 200) {
      toast.success("Code has been sent to your Email", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: true,
        hideProgressBar: true,
      });
      toast.info("Code will expire in 5 minutes!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
      });
      showForm(false);
    } else {
      toast.error("Email id is not registered", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: true,
        hideProgressBar: true,
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
      pattern: "[a-z0-9._%+-]+@[Gg][Mm][Aa][Ii][Ll]+.com$",
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
        <form className="otp" onSubmit={handleSubmit}>
          <h1>Reset Password</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={value[input.name]}
              onChange={onChange}
            />
          ))}
          <button
            disabled={!value.email.match(emailpattern)}
            className="buttonLR"
            id="sbtbtm"
            onClick={sendOtp}
          >
            Send OTP
          </button>
        </form>
      ) : (
        <PasswordForm email={value.email} />
      )}
    </div>
  );
};

export default OtpForm;
