import { useState } from "react";
import FormInput from "./FormInput";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const ItemDetails = () => {
  const Navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    address: "",
    phone: "",
    items: "",
  });

  const namepattern = "^[A-Za-z A-Za-z]{3,16}$";
  const phonepattern = "[0-9]{10}";

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Enter your Name...",
      errorMessage: "Please enter your Name",
      label: "Name",
      pattern: "^[A-Za-z A-Za-z]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "address",
      type: "text",
      placeholder: "Address",
      label: "Address",
      required: true,
    },
    {
      id: 3,
      name: "phone",
      type: "tel",
      placeholder: "Phone Number",
      errorMessage: "please enter valid phone number",
      label: "Phone Number",
      pattern: "[0-9]{10}",
      required: true,
    },
    {
      id: 4,
      name: "items",
      type: "text",
      placeholder: "Enter items here...",
      errorMessage: "Please enter Item Details",
      label: "Items",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

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
    if (res.status === 201) {
      toast.success("Confirmed", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: true,
        hideProgressBar: true,
      });
      Navigate("/confirmdonation")
    } else {
      toast.error("Something went Wrong", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: true,
        hideProgressBar: true,
      });
    }
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Confirm Donation</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            name={input.name}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button
          disabled={
            !values.name.match(namepattern) ||
            !values.phone.match(phonepattern)
          }
          id="sbtbtm"
          className="buttonLR"
          onClick={postData}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ItemDetails;
