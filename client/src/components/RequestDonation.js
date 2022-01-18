import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import FoodBankIcon from "@mui/icons-material/FoodBank";

const RequestDonation = () => {
  const [userData, setUserData] = useState({});

  const Navigate = useNavigate();
  const callRequestPage = async () => {
    try {
      const res = await fetch("/requestdonation", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
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
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "40px auto",
  };
  const avatarStyle = { backgroundColor: "red" };
  const btnstyle = { margin: "8px 0", backgroundColor: "rebeccapurple" };
  const inputStyle = { padding: "10px" };
  return (
    <div className="app">
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <FoodBankIcon />
            </Avatar>
            <h2>Request Food</h2>
          </Grid>
          <TextField
            style={inputStyle}
            placeholder="Enter username"
            value={userData.name}
            fullWidth
            required
          />
          <TextField
            style={inputStyle}
            placeholder="Enter Address"
            value={userData.address}
            fullWidth
            required
          />
          <TextField
            style={inputStyle}
            placeholder="Mobile"
            type={"tel"}
            value={userData.phone}
            fullWidth
            required
          />
          <TextField
            id="outlined-multiline-static"
            label="Any additional information...."
            fullWidth
            multiline
            rows={4}
          />
          <Button type="submit" variant="contained" style={btnstyle} fullWidth>
            Request
          </Button>
        </Paper>
      </Grid>
    </div>
  );
};

export default RequestDonation;
