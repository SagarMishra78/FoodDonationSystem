import * as React from 'react';
import { useState } from "react";
import FormInput from "./FormInput";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Signup = () => {
  const Navigate = useNavigate();

  const [values, setValues] = useState({
    role: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    cpassword: "",
  });
  const emailpattern = "[a-z0-9._%+-]+@[Gg][Mm][Aa][Ii][Ll]+.com$";
  const namepattern = "^[A-Za-z A-Za-z]{3,16}$";
  const phonepattern = "[0-9]{10}";
  const passwordpattern = `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`;
  const cpasswordpattern = values.password;
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Enter your name...",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Name",
      pattern: "^[A-Za-z A-Za-z]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      pattern: "[a-z0-9._%+-]+@[Gg][Mm][Aa][Ii][Ll]+.com$",
      required: true,
    },
    {
      id: 3,
      name: "phone",
      type: "tel",
      placeholder: "Phone Number",
      errorMessage: "please enter valid phone number",
      label: "Phone Number",
      pattern: "[0-9]{10}",
      required: true,
    },
    {
      id: 4,
      name: "address",
      type: "text",
      placeholder: "Address",
      errorMessage: "Please Enter Address",
      label: "Address",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "cpassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Connecting DB

  const PostData = async () => {
    const { role, name, email, phone, address, password, cpassword } = values;

    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role,
        name,
        email,
        phone,
        address,
        password,
        cpassword,
      }),
    });
    await res.json();
    if (res.status === 422) {
      toast.error("Failed to Register", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: true,
        hideProgressBar: true,
      });
    } else if (res.status === 406) {
      toast.warning("User Already Registered", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: true,
        hideProgressBar: true,
      });
    } else {
      toast.success("Registered Successfully!!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: true,
        hideProgressBar: true,
      });
      Navigate("/signin");
    }
  };

  return (
    <div className="app2">
      <form className='signup' onSubmit={handleSubmit}>
        <h1>Register</h1>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Register As...</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name='role'
              label="Role"
              onChange={onChange}
            >
              <MenuItem value={1}>NGO</MenuItem>
              <MenuItem value={2}>Restraunt</MenuItem>
              <MenuItem value={3}>Charity Employee</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button
          disabled={
            !values.email.match(emailpattern) ||
            !values.name.match(namepattern) ||
            !values.phone.match(phonepattern) ||
            !values.password.match(passwordpattern) ||
            !values.cpassword.match(cpasswordpattern)
          }
          className="buttonLR"
          id="sbtbtm"
          onClick={PostData}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
