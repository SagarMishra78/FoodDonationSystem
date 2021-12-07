import React, { useState } from "react";
import { Link } from "react-router-dom";
import validate from "./validateInfo";
import useForm from "./useForm";

const Signup = () => {
  const { handleChange, handleSubmit, values, errors } =
    useForm(validate);

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="formCenter">
      <form onSubmit={handleSubmit} className="formFields" noValidate>
        <h2 className="title">SignUp</h2>
        <div className="formField">
          <label className="formFieldLabel" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="formFieldInput"
            placeholder="Enter your full name"
            name="name"
            value={(values.name, user.name)}
            onChange={(handleChange, handleInputs)}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className="formField">
          <label className="formFieldLabel" htmlFor="email">
            E-Mail Address
          </label>
          <input
            type="email"
            id="email"
            className="formFieldInput"
            placeholder="Enter your email"
            name="email"
            value={(values.email, user.email)}
            onChange={(handleChange, handleInputs)}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="formField">
          <label className="formFieldLabel" htmlFor="name">
            Mobile Number
          </label>
          <input
            type="text"
            id="phone"
            className="formFieldInput"
            placeholder="Enter your Phone Number"
            name="phone"
            value={(values.phone, user.phone)}
            onChange={(handleChange, handleInputs)}
          />
          {errors.phone && <p>{errors.phone}</p>}
        </div>
        <div className="formField">
          <label className="formFieldLabel" htmlFor="name">
            Address
          </label>
          <input
            type="text"
            id="address"
            className="formFieldInput"
            placeholder="Enter Address"
            name="address"
            value={(values.address, user.address)}
            onChange={(handleChange, handleInputs)}
          />
          {errors.address && <p>{errors.address}</p>}
        </div>
        <div className="formField">
          <label className="formFieldLabel" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="formFieldInput"
            placeholder="Enter your password"
            name="password"
            value={(values.password, user.password)}
            onChange={(handleChange, handleInputs)}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="formField">
          <label className="formFieldLabel" htmlFor="password">
            Confirm Password
          </label>
          <input
            type="password"
            id="cpassword"
            className="formFieldInput"
            placeholder="Enter your password"
            name="cpassword"
            value={(values.cpassword, user.cpassword)}
            onChange={(handleChange, handleInputs)}
          />
          {errors.cpassword && <p>{errors.cpassword}</p>}
        </div>

        <div className="formField">
          <button className="formFieldButton">Sign Up</button>{" "}
          <Link to="/signin" className="formFieldLink">
            I'm already member
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Signup;
