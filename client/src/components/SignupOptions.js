import React from "react";
import { Link } from "react-router-dom";

export const SignupOptions = () => {
  return (
    <div>
      <form id="msform">
        <fieldset>
          <h2 className="fs-title">Register as NGO...</h2>
          <Link to={"/signup"}>
            <input
              type="button"
              name="next"
              className="next action-button"
              value="NGO"
            />
          </Link>
          <h2 className="fs-title">Register as Restraunt...</h2>
          <Link to={"/signup"}>
            <input
              type="button"
              name="next"
              className="next action-button"
              value="Restraunt"
            ></input>
          </Link>
        </fieldset>
      </form>
    </div>
  );
};
