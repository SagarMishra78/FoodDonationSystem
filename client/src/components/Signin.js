import React, { Component } from "react";
import { Link } from "react-router-dom";
import validate from "./validateInfo";
import useForm from "./useForm";

const Signin = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(validate);

  return (
    <div className="formCenter">
      <form className="formFields" onSubmit={handleSubmit} noValidate>
      <h2 className="title">SignIn</h2>
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
          <button className="formFieldButton">Sign In</button>{" "}
          <Link to="/signup" className="formFieldLink">
            Create an account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signin;
