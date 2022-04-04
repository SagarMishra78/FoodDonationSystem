import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import { FormControl, InputGroup, Button } from "react-bootstrap";

export default function UserProfile(props) {
  const [values, setValues] = React.useState([]);
  const [disabled, setDisabled] = React.useState(true);
  function handleEdit() {
    setDisabled(!disabled);
    if(disabled){
        alert("Edit");
    }
  }
  const callUserDetails = async () => {
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
      setValues(data);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    callUserDetails();
  });

  const Edit = () => {
    return <Button variant="primary">Primary</Button>
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const fabStyle = {
    position: "absolute",
    bottom: 16,
    right: 16,
  };

  return (
    <>
      <div className="Profile">
        <h1 style={{ marginBottom: "100px" }}>Account Information</h1>
        <Fab sx={fabStyle} color="secondary" aria-label="edit" onClick={handleEdit}>
          <EditIcon />
        </Fab>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100vh" },
          }}
          noValidate
        >
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" style={{width: "100px", fontWeight: "bold"}}>Name</InputGroup.Text>
            <FormControl
              placeholder="Name"
              aria-label="Name"
              aria-describedby="basic-addon1"
              disabled={disabled}
              defaultValue={values.name}
              onChange={onChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" style={{width: "100px", fontWeight: "bold"}}>Email</InputGroup.Text>
            <FormControl
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
              disabled={disabled}
              defaultValue={values.email}
              onChange={onChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" style={{width: "100px", fontWeight: "bold"}}>Phone</InputGroup.Text>
            <FormControl
              placeholder="Phone"
              aria-label="Phone"
              aria-describedby="basic-addon1"
              disabled={disabled}
              defaultValue={values.phone}
              onChange={onChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" style={{width: "100px", fontWeight: "bold"}}>Address</InputGroup.Text>
            <FormControl
              placeholder="Address"
              aria-label="Address"
              aria-describedby="basic-addon1"
              disabled={disabled}
              defaultValue={values.address}
              onChange={onChange}
            />
          </InputGroup>
        </Box>
      </div>
    </>
  );
}
