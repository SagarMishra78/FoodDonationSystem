import { useState } from "react";
import FormInput from "./FormInput";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Contact = () => {
  const Navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    desc: "",
  });

  const emailpattern = "[a-z0-9._%+-]+@[Gg][Mm][Aa][Ii][Ll]+.com$";
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
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      pattern: "[a-z0-9._%+-]+@[Gg][Mm][Aa][Ii][Ll]+.com$",
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
      name: "subject",
      type: "text",
      placeholder: "Enter subject here...",
      errorMessage: "Please enter subject",
      label: "Subject",
      required: true,
    },
    {
      id: 5,
      name: "desc",
      type: "text",
      placeholder: "How may I help you.....",
      errorMessage: "Please enter description",
      label: "Description",
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
    const { name, email, phone, subject, desc } = values;

    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        subject,
        desc,
      }),
    });
    await res.json();
    if (res.status === 201) {
      toast.success("Message sent. Will get back to you soon.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: true,
        hideProgressBar: true,
      });
      Navigate("/");
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
      <form method="POST" onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
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
            !values.email.match(emailpattern) ||
            !values.name.match(namepattern) ||
            !values.phone.match(phonepattern) ||
            values.subject.length < 1 ||
            values.desc.length < 1
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

export default Contact;
