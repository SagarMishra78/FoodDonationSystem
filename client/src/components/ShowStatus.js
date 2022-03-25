import React from "react";
import { useLocation } from "react-router-dom";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const ShowStatus = (props) => {
  const { state } = useLocation();

  const steps = [
    `Donation has been accepted and initiated by ngo charity employee.`,
    `Charity Employee has picked food from the respective restraunt.`,
    `Food has been donated to the needy people.`,
    `This donation process is now completed.`,
  ];

  const Initiated = () => {
    return (
      <div className="app">
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
      <div className="app">
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
      <div className="app">
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
      <div className="app">
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
    <div>
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
