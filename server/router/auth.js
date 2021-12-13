const { response } = require("express");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");

// DB Connection
require("../db/conn");
const Register = require("../model/userschema");

// Home Page
router.get("/", (req, res) => {
  res.send(`Hello, Welcome to Home Page`);
});

// Signup Page
router.post("/signup", async (req, res) => {
  const { name, email, phone, address, password, cpassword } = req.body;
  if (!name || !email || !phone || !address || !password || !cpassword) {
    return res.status(428).json({ error: "Required Field" });
  }

  try {
    const userExist = await Register.findOne({ phone: phone });
    if (userExist) {
      return res.status(406).json({ error: "User already registered" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password not matched" });
    } else {
      const register = new Register({
        name,
        email,
        phone,
        address,
        password,
        cpassword,
      });

      await register.save();

      res.status(201).json({ message: "Registered Successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// Signin Page
router.post("/signin", async (req, res) => {
  try {
    let token;
    const { phone, password } = req.body;

    if (!phone || !password) {
      return res.status(428).json({ error: "Required Field" });
    }

    const userLogin = await Register.findOne({ phone: phone });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 2592000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials" });
      } else {
        res.json({ message: "Login Successful" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

// About Page
router.get("/about", authenticate, (req, res) => {
  res.send(req.rootUser);
});

module.exports = router;
