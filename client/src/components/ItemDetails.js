import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const ItemDetails = () => {
  const [inputList, setInputList] = useState([{}]);

  const [values] = useState({
    name: "",
    address: "",
    phone: "",
    items: "",
  });

  const postData = async () => {
    const { name, address, phone, items } = values;

    const res = await fetch("/fooditem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        address,
        phone,
        items,
      }),
    });
    await res.json();
  };

  // handle input change
  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const list = [...inputList];
    list[index] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, {}]);
  };

  return (
    <div className="App">
      <form method="POST">
        <h4>Personal Detials...</h4>
        <TextField
          style={{ margin: "5px", width: "80%" }}
          id="standard-basic"
          name="name"
          label="Name"
          fullWidth
        />
        <TextField
          style={{ margin: "5px", width: "80%" }}
          id="standard-basic"
          name="address"
          label="Address"
          fullWidth
        />
        <TextField
          style={{ margin: "5px", width: "80%" }}
          id="standard-basic"
          name="phone"
          label="Mobile"
          fullWidth
        />
        <h4>Item Detials...</h4>
        {inputList.map((x, i) => {
          return (
            <div className="box">
              <TextField
                id="outlined-size-small"
                label="Item Name"
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                name="items"
                placeholder="Enter Item"
                value={x.firstName}
                onChange={(e) => handleInputChange(e, i)}
                style={{ margin: "5px" }}
              />
              <div className="btn-box">
                {inputList.length !== 1 && (
                  <Button
                    style={{
                      width: "100px",
                      marginLeft: "5px",
                      height: "35px",
                    }}
                    variant="contained"
                    size="small"
                    className="mr10"
                    onClick={() => handleRemoveClick(i)}
                  >
                    Remove
                  </Button>
                )}
                {inputList.length - 1 === i && (
                  <Button
                    style={{
                      width: "100px",
                      marginLeft: "5px",
                      height: "35px",
                    }}
                    variant="contained"
                    size="small"
                    onClick={handleAddClick}
                  >
                    Add
                  </Button>
                )}
              </div>
            </div>
          );
        })}
        <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
        <button style={{ width: "100px" }} onClick={postData}>
          Confirm
        </button>
      </form>
    </div>
  );
};

export default ItemDetails;
