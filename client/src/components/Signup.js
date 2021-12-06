import React from "react";
import { Link } from "react-router-dom";
import validate from "./validateInfo";
import useForm from "./useForm";

const Signup = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(validate);

  return (
    <div className="formCenter">
      <form onSubmit={handleSubmit} className="formFields" noValidate>
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
            value={values.name}
            onChange={handleChange}
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
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
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
            value={values.password}
            onChange={handleChange}
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
            value={values.cpassword}
            onChange={handleChange}
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
