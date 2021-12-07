import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
    </>
  );
};

export default App;
