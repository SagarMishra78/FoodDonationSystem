import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const ShowStatus = (props) => {
  const { state } = useLocation();
  const [employee, setEmployee] = useState([]);

  const employeedetails = async () => {
    try {
      const res = await fetch("/donationinprogress", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    employeedetails();
  });

  const steps = [
    `Donation has been accepted and initiated by ngo charity employee.`,
    `Charity Employee has picked food from the respective restraunt.`,
    `Food has been donated to the needy people.`,
    `This donation process is now completed.`,
  ];

  const Initiated = () => {
    return (
      <div>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={0} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <h6>{label}</h6>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
    );
  };
  const Picked = () => {
    return (
      <div>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <h6>{label}</h6>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
    );
  };
  const Donated = () => {
    return (
      <div>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={2} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <h6>{label}</h6>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
    );
  };
  const Completed = () => {
    return (
      <div>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={3} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <h6>{label}</h6>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
    );
  };

  return (
    <div className="app">
      <h1>{employee}</h1>
      <h1>Status</h1>
      {(() => {
        if (state === 200) {
          return <Initiated />;
        } else if (state === 201) {
          return <Picked />;
        } else if (state === 202) {
          return <Donated />;
        } else if (state === 203) {
          return <Completed />;
        }
      })()}
    </div>
  );
};

export default ShowStatus;
