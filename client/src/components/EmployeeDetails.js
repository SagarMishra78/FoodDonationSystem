import { useState } from "react";
import FormInput from "./FormInput";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const EmployeeDetails = (props) => {
  const Navigate = useNavigate();
  const { state } = useLocation();
  const ids = state;
  const [values, setValues] = useState({
    name: "",
    phone: "",
    id: ids,
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
      id: 3,
      name: "phone",
      type: "tel",
      placeholder: "Phone Number",
      errorMessage: "please enter valid phone number",
      label: "Phone Number",
      pattern: "[0-9]{10}",
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
    const { name, phone, id } = values;

    const res = await fetch("/employeeassign", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        id,
      }),
    });
    await res.json();
    if (res.status === 201) {
      toast.success("Employee Assigned Successfully!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: true,
        hideProgressBar: true,
      });
      Navigate("/ngohome")
    }
  };

  return (
    <div className="app">
      <form className="request" onSubmit={handleSubmit}>
        <h1>Assign Employee</h1>
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

export default EmployeeDetails;
