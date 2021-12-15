import { toast } from "react-toastify";
import React, { useRef, useState } from "react";
import FormInput from "./FormInput";
import axios from "axios";

function OtpForm() {
  const emailRef = useRef();

  const sendOtp = async () => {
      console.log(emailRef);
    try {
      let url = "http://localhost:5000/sendEmail";
      let options = {
        method: "POST",
        url: url,
        data: { email: emailRef },
      };
      let response = await axios(options);
      let record = response.data;
      if (record.status === "Success") {
        window.alert("success");
        toast.success(record.message);
      } else {
          window.alert("error");
        toast.error(record.message);
      }
    } catch (error) {
        console.log(error);
    }
  };

  const [values, setValues] = useState({
    email: "",
  });

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
      ref: {emailRef},
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
        <h1>Reset Password</h1>
        <p id="para"></p>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="buttonLR" onClick={sendOtp}>
          Send OTP
        </button>
      </form>
    </div>
  );
};

export default OtpForm;
