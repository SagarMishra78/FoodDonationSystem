import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import Stack from "@mui/material/Stack";

const ConfirmDonation = () => {
  const [requests, setRequests] = useState([]);

  const callConfirmPage = async () => {
    try {
      const res = await fetch("/confirmdonation", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setRequests(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callConfirmPage();
  });

  const DisplayData = requests.map((info, i) => {
    return (
      <tr key={i}>
        <td>{info.name}</td>
        <td>{info.address}</td>
        <td>{info.phone}</td>
        <td>{info.addinfo}</td>
        <td style={{ width: 0 }}>
          <Stack direction="row" spacing={2}>
            <Button
              className="btnconfirm"
              variant="contained"
              endIcon={<CheckIcon />}
            >
              Confirm
            </Button>
            <Button
              className="btnconfirm"
              variant="outlined"
              endIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </Stack>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Addtional Information</th>
            </tr>
          </thead>
          <tbody>{DisplayData}</tbody>
        </table>
      </div>
    </>
  );
};

export default ConfirmDonation;
