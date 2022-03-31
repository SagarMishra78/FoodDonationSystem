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
const Contact = require("../model/usercontact");
const Request = require("../model/requestFood");
const Item = require("../model/fooditem");

// Home Page
router.get("/", (req, res) => {
  res.send(`Hello, Welcome to Home Page`);
});

// Signup Page
router.post("/signup", async (req, res) => {
  const { role, name, email, phone, address, password, cpassword } = req.body;
  if (!name || !email || !phone || !address || !password || !cpassword) {
    return res.status(428).json({ error: "Required Field" });
  }

  try {
    const userExist = await Register.findOne({
      $or: [{ email: email }, { phone: phone }],
    });
    if (userExist) {
      return res.status(406).json({ error: "User already registered" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password not matched" });
    } else {
      const register = new Register({
        role,
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

      const roles = userLogin.role;

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials" });
      } else if (roles == 1) {
        res.json({ message: "Login Successful NGO" });
      } else if (roles == 2) {
        res.status(201).json({ message: "Login Successful Restraunt" });
      } else if (roles == 3) {
        res.status(202).json({ message: "Login Successful Employee" });
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

// Getting Data
router.get("/getdata", authenticate, (req, res) => {
  res.send(req.rootUser);
});

// Request Page
router.post("/requestdonation", async (req, res) => {
  try {
    const { name, address, phone, addinfo } = req.body;
    if (!addinfo) {
      res.status(428).json({ error: "Please fill data" });
    } else {
      const requestFood = new Request({
        name,
        address,
        phone,
        addinfo,
      });
      await requestFood.save();
      res.status(201).json({ message: "request sent" });
    }
  } catch (error) {
    console.log(error);
  }
});

// Confirm Page
router.get("/confirmdonation", async (req, res) => {
  Request.find({}, function (err, reqs) {
    if (err) console.log(err);
    res.send(reqs);
  });
});

// Delete Request
router.post("/delete", async (req, res) => {
  const { id } = req.body;
  Request.findByIdAndRemove(id, (err, doc) => {
    if (!err) {
      res.json({ message: "Deleted" });
    } else {
      console.log("Failed to Delete user Details: " + err);
    }
  });
});

// Contact Page
router.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, subject, desc } = req.body;
    if (!name || !email || !phone || !subject || !desc) {
      res.json({ error: "Please fill data" });
    } else {
      const userContact = new Contact({
        name,
        email,
        phone,
        subject,
        desc,
      });
      await userContact.save();
      res.status(201).json({ message: "message sent" });
    }
  } catch (error) {
    console.log(error);
  }
});

// Items Page
router.post("/fooditem", async (req, res) => {
  try {
    const { name, address, phone, items } = req.body;
    if (!name || !address || !phone || !items) {
      res.status(428).json({ error: "Please fill data" });
    } else {
      const ItemDetails = new Item({
        name,
        address,
        phone,
        items,
      });
      await ItemDetails.save();
      res.status(201).json({ message: "Request Confirmed" });
    }
  } catch (error) {
    console.log(error);
  }
});

// Getting Items
router.get("/donationinprogress", async (req, res) => {
  Item.find({}, function (err, reqs) {
    if (err) console.log(err);
    res.send(reqs);
  });
});

router.post("/dispstatus", async (req, res) => {
  const {id} = req.body;
  Item.find({_id:id}, function (err, reqs) {
    if (err) console.log(err);
    res.send(reqs);
  });
});

// Update Status
router.post("/updatestatus", async (req, res) => {
  try {
    const { status, id } = req.body;
    if (!status) {
      return res.json({ error: "In Progress" });
    }
    const statusUpdate = await Item.findOne({ _id: id });
    if (statusUpdate) {
      const donationStatus = await statusUpdate.addStatus(status);
      await statusUpdate.save();
      res.status(209).json({ message: "status updated" });
    }
  } catch (error) {
    console.log(error);
  }
});

// Assign Employee
router.post("/employeeassign", async (req, res) => {
  try {
    const { name, phone, id } = req.body;
    const assignemp = await Item.findOne({ _id: id });
    if (assignemp) {
      await assignemp.assign(name, phone);
      await assignemp.save();
      res.status(201).json({ message: "Employee Assigned" });
    }
  } catch (error) {
    console.log(error);
  }
});

// Show Status
router.post("/displaystatus", async (req, res) => {
  try {
    const { id } = req.body;
    const status = await Item.findOne({ _id: id });
    const st = status.statuses;
    if (st.length == 1) {
      res.json({ message: "Initiated" });
    } else if (st.length == 2) {
      res.status(201).json({ message: "Food picked from Restraunt" });
    } else if (st.length == 3) {
      res.status(202).json({ message: "Food Donated to Needy" });
    } else if (st.length == 4) {
      res.status(203).json({ message: "Completed!" });
    }
  } catch (error) {
    console.log(error);
  }
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
  let data = await Otp.findOne({
    $and: [{ email: req.body.email }, { code: req.body.code }],
  });
  const response = {};
  if (data) {
    let currentTime = new Date().getTime();
    let timeDiff = data.expireIn - currentTime;
    if (timeDiff < 0) {
      response.message = "Code expired";
      response.statusText = "Code expired";
      res.status(401).json(response);
    } else {
      let user = await Register.findOne({ email: req.body.email });
      user.password = req.body.password;
      user.save();
      response.message = "Password Changed Successfully";
      response.statusText = "Success";
      res.status(200).json(response);
    }
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
      user: process.env.EMAIL,
      pass: process.env.EMAILPASSWORD,
    },
  });
  var mailOptions = {
    from: "sagarmishra21-22@bhavans.ac.in",
    to: `${email}`,
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
