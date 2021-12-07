import { useState } from "react";
import "../App.css";

const useForm = (validate) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    cpassword: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
