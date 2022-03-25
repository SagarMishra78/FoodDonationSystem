import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const DonationStatus = (props) => {
  const { state } = useLocation();
  const ids = state;
  const [values, setValues] = useState({
    status: "",
    id: ids,
  });

  const steps = [
    {
      label: "Initiated",
      description: `Donation has been accepted and initiated by ngo charity employee.`,
    },
    {
      label: "Food picked from Restraunt",
      description:
        "Charity Employee has picked food from the respective restraunt.",
    },
    {
      label: "Food Donated to Needy",
      description: `Food has been donated to the needy people.`,
    },
    {
      label: "Completed!",
      description: `This donation process is now completed.`,
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const PostData = async () => {
    const { status, id } = values;

    const res = await fetch("/updatestatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status,
        id,
      }),
    });
    await res.json();
    if (res.status === 209) {
      toast.success("Status Updated", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: true,
        hideProgressBar: true,
      });
    }
  };

  return (
    <div className="app2">
      <form className="status" onSubmit={handleSubmit}>
        <Box sx={{ maxWidth: 400 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Task...
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="status"
                    label="Tasks"
                    onChange={onChange}
                  >
                    <MenuItem value={1}>Initiated</MenuItem>
                    <MenuItem value={2}>Food picked from Restraunt</MenuItem>
                    <MenuItem value={3}>Food Donated to Needy</MenuItem>
                    <MenuItem value={4}>Completed!</MenuItem>
                  </Select>
                </FormControl>
                <h6 name="status" onChange={onChange}>
                  {step.label}
                </h6>
                <StepLabel>{step.label}</StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={() => {
                          handleNext();
                          PostData();
                        }}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? "Finish" : "Continue"}
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
            </>
          )}
        </Box>
      </form>
    </div>
  );
};

export default DonationStatus;
