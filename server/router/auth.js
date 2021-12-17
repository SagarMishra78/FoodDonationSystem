const { response } = require("express");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");
const cookieParser = require("cookie-parser");
var cors = require("cors");

router.use(cors());
router.use(cookieParser());
router.use(express.urlencoded());

// DB Connection
require("../db/conn");
const Register = require("../model/userschema");
const Otp = require("../model/otp");

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
    const userExist = await Register.findOne({ "$or": [ { email: email }, { phone: phone} ] });
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

      const token = await register.generateAuthToken();

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

      const token = await userLogin.generateAuthToken();

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

// Logout
router.get("/signout", authenticate, async (req, res) => {
  try {
    res.clearCookie("jwtoken", { path: "/" });
    await req.rootUser.save();
    res.render("/signin");
  } catch (err) {
    res.status(500).send(err);
  }
});

// Forget Password
router.post("/sendEmail", async (req, res) => {
  const { email } = req.body;
  const data = await Register.findOne({ email: email });
  const responseType = {};
  if (data) {
    let otpCode = Math.floor(Math.random() * 10000 + 1);
    let otpData = new Otp({
      email: email,
      code: otpCode,
      expireIn: new Date().getTime() + 300 * 1000,
    });
    let otpResponse = await otpData.save();
    responseType.statusText = "Success";
    mailer(email, `${otpCode}`);
    responseType.message = "Code has been sent to your Email";
    res.status(200).json(responseType);
  } else {
    responseType.statusText = "Failed";
    responseType.message = "Email Id not found";
    res.status(400).json(responseType);
  }
});

router.post("/changePassword", async (req, res) => {
  let data = await Otp.findOne({ "$and": [ { email: req.body.email }, { code: req.body.code} ] });
  console.log(req.body.code);
  const response = {};
  if (data) {
      let user = await Register.findOne({ email: req.body.email });
      user.password = req.body.password;
      user.save();
      response.message = "Password Changed Successfully";
      response.statusText = "Success";
      res.status(200).json(response);
  } else {
    response.message = "Invalid Otp";
    response.statusText = "error";
    res.status(400).json(response);
  }
});

const mailer = (email, otp) => {
  var nodemailer = require("nodemailer");
  var transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: "sagarmishra21-22@bhavans.ac.in",
      pass: "S7@8Mishra",
    },
  });
  var mailOptions = {
    from: "sagarmishra21-22@bhavans.ac.in",
    to: "smishra787898@gmail.com",
    subject: "Password Reset",
    text: `OTP to change your password is ${otp}`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("email sent" + info.response);
    }
  });
};

module.exports = router;
