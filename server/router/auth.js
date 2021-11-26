const { response } = require("express");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("../db/conn");
const Register = require("../model/userschema");

router.get("/", (req, res) => {
  res.send(`Hello, Welcome to Home Page`);
});

router.post("/signup", async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;
  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "Required Field" });
  }

  try {
    const userExist = await Register.findOne({ phone: phone });
    if (userExist) {
      return res.status(422).json({ error: "User already registered" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password not matched" });
    } else {
      const register = new Register({
        name,
        email,
        phone,
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

router.post("/signin", async (req, res) => {
  try {
    let token;
    const { phone, password } = req.body;

    if (!phone || !password) {
      return res.status(400).json({ error: "Required Field" });
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

module.exports = router;
