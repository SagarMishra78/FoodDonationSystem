import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Grid, Paper, Avatar, Button } from "@material-ui/core";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import TextField from "@mui/material/TextField";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const RequestDonation = () => {
  const Navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const [values] = useState({
    name: "",
    address: "",
    phone: "",
    addinfo: "",
  });

  const callRequestPage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      Navigate("/signin");
    }
  };

  useEffect(() => {
    callRequestPage();
  });

  const paperStyle = {
    padding: 10,
    height: "73vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "red" };
  const btnstyle = { margin: "8px 0", backgroundColor: "rebeccapurple" };
  const inputStyle = { margin: "5px" };

  const postData = async () => {
    const { name, address, phone, addinfo } = values;

    const res = await fetch("/requestdonation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        address,
        phone,
        addinfo,
      }),
    });
    await res.json();
    if (res.status === 201) {
      toast.success("Request sent", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: true,
        hideProgressBar: true,
      });
      Navigate("/");
    } else {
      toast.error("Please fill all fields", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: true,
        hideProgressBar: true,
      });
    }
  };

  return (
    <div className="app">
      <form method="POST">
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <FoodBankIcon />
              </Avatar>
              <h2>Request Food</h2>
            </Grid>
            <TextField
              id="standard-basic"
              name="name"
              label="Name"
              InputLabelProps={{
                shrink: true,
              }}
              style={inputStyle}
              value={userData.name}
              fullWidth
            />
            <TextField
              id="standard-basic"
              name="address"
              label="Address"
              InputLabelProps={{
                shrink: true,
              }}
              style={inputStyle}
              value={userData.address}
              fullWidth
            />
            <TextField
              id="standard-basic"
              name="phone"
              label="Mobile"
              InputLabelProps={{
                shrink: true,
              }}
              style={inputStyle}
              value={userData.phone}
              fullWidth
            />
            <TextField
              id="standard-basic"
              name="addinfo"
              label="Any additional information...."
              fullWidth
              multiline
              rows={4}
              required
            />
            <Button
              type="submit"
              variant="contained"
              style={btnstyle}
              onClick={postData}
              fullWidth
            >
              Request
            </Button>
          </Paper>
        </Grid>
      </form>
    </div>
  );
};

export default RequestDonation;
