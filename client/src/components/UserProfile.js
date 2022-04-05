import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import { FormControl, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export default function UserProfile() {
  const [userData, setuserData] = React.useState([]);
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [disabled, setDisabled] = React.useState(true);
  function handleEdit() {
    setDisabled(!disabled);
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
      setuserData(data);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    callUserDetails();
  });

  const saveChanges = async () => {
    const { name, email, phone, address } = values;

    const res = await fetch("/updateprofile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        address,
      }),
    });
    await res.json();
    if (res.status === 200) {
      toast.success("Profile Updated Successfully!!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: true,
        hideProgressBar: true,
      });
    } else if (res.status === 404) {
      toast.error("Sorry!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: true,
        hideProgressBar: true,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

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
        <form className="profile" onSubmit={handleSubmit}>
          <h1 style={{ marginBottom: "100px" }}>Account Information</h1>
          <Fab
            sx={fabStyle}
            color="secondary"
            aria-label="edit"
            onClick={handleEdit}
          >
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
              <InputGroup.Text
                id="basic-addon1"
                style={{ width: "100px", fontWeight: "bold" }}
              >
                Name
              </InputGroup.Text>
              <FormControl
                name="name"
                placeholder="Name"
                aria-label="Name"
                aria-describedby="basic-addon1"
                disabled={disabled}
                defaultValue={userData.name}
                onChange={onChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text
                id="basic-addon1"
                style={{ width: "100px", fontWeight: "bold" }}
              >
                Email
              </InputGroup.Text>
              <FormControl
                name="email"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
                disabled={disabled}
                defaultValue={userData.email}
                onChange={onChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text
                id="basic-addon1"
                style={{ width: "100px", fontWeight: "bold" }}
              >
                Phone
              </InputGroup.Text>
              <FormControl
                name="phone"
                placeholder="Phone"
                aria-label="Phone"
                aria-describedby="basic-addon1"
                disabled={disabled}
                defaultValue={userData.phone}
                onChange={onChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text
                id="basic-addon1"
                style={{ width: "100px", fontWeight: "bold" }}
              >
                Address
              </InputGroup.Text>
              <FormControl
                name="address"
                placeholder="Address"
                aria-label="Address"
                aria-describedby="basic-addon1"
                disabled={disabled}
                defaultValue={userData.address}
                onChange={onChange}
              />
            </InputGroup>
            <p>Reset Password? <Link to={"/resetpassword"}>Click here</Link></p>
          </Box>
          <button
            disabled={disabled}
            className="buttonLR"
            id="sbtbtm"
            onClick={saveChanges}
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
}
