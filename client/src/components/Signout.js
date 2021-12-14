import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";

const Signout = () => {

  const { state, dispatch } = useContext(userContext);

  const Navigate = useNavigate();
  useEffect(() => {
    fetch("/signout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        dispatch({ type: "USER", payload:false });
        Navigate("/signin", { replace: true });
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <h1>Logout</h1>
    </>
  );
};

export default Signout;
