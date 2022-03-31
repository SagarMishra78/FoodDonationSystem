import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const ShowStatus = (props) => {
  const { state } = useLocation();
  const id = state._id;
  const [employee, setEmployee] = useState([]);

  const employeedetails = async () => {
    try {
      const res = await fetch("/dispstatus", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          id,
        }),
      });
      const data = await res.json();
      setEmployee(data);
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

  const dispemployeename = employee.map((info) => {
    return info.employees.map((i) => {
      return i.name;
    });
  });
  const dispemployeephone = employee.map((info) => {
    return info.employees.map((i) => {
      return i.phone;
    });
  });

  return (
    <div className="app">
      <div className="empdetail">
        <h1>Assigned Employee</h1>
        <h5>Name: {dispemployeename}</h5>
        <h5>Phone: {dispemployeephone}</h5>
      </div>
      <div className="statusdetail">
        <h1>Status</h1>
        {(() => {
          if (state.status === 200) {
            return <Initiated />;
          } else if (state.status === 201) {
            return <Picked />;
          } else if (state.status === 202) {
            return <Donated />;
          } else if (state.status === 203) {
            return <Completed />;
          }
        })()}
      </div>
    </div>
  );
};

export default ShowStatus;
