import React, { createContext, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Signout from "./components/Signout";
import { reducer, initialState } from "./reducer/useReducer";
import OtpForm from "./components/OtpForm";
import RequestDonation from "./components/RequestDonation";

export const userContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <userContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/RequestDonation" element={<RequestDonation />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/resetPassword" element={<OtpForm />} />
          <Route exact path="/signout" element={<Signout />} />
        </Routes>
      </userContext.Provider>
    </>
  );
};

export default App;
