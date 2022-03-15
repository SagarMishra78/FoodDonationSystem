import { useState } from "react";
import FormInput from "./FormInput";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const RequestDonation = () => {
  const Navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    address: "",
    phone: "",
    addinfo: "",
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
      name: "addinfo",
      type: "text",
      placeholder: "Any additional information here...",
      errorMessage: "Please enter Item Details",
      label: "Additional Information",
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
    const { name, address, phone, addinfo } = values;

    const res = await fetch("/requestdonation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        address,
        phone,
        addinfo,
      }),
    });
    await res.json();
    if (res.status === 201) {
      toast.success("Request Sent!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: true,
        hideProgressBar: true,
      });
      Navigate("/ngohome")
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
        <h1>Request Donation</h1>
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

export default RequestDonation;
