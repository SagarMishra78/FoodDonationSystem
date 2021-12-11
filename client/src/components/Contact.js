// import React from "react";
// import validate from "./validateInfo";
// import useForm from "./useForm";

// const Contact = () => {
//   const { handleChange, handleSubmit, values, errors } = useForm(validate);

//   return (
//     <div className="formCenter">
//       <form onSubmit={handleSubmit} className="formFields" noValidate>
//         <h2 className="title">Contact Us</h2>
//         <p id="contactparagraph">
//           Let us know what you think! In order to provide better service, please
//           do not hesitate to give us your feedback. Thank you.
//         </p>
//         <div className="formField">
//           <label className="formFieldLabel" htmlFor="name">
//             Name
//           </label>
//           <input
//             placeholder="Name"
//             id="name"
//             type="text"
//             className="formFieldInput"
//             name="name"
//             value={values.name}
//             onChange={handleChange}
//           />
//           {errors.name && <p>{errors.name}</p>}
//         </div>
//         <div className="formField">
//           <label className="formFieldLabel" htmlFor="email">
//             E-Mail Address
//           </label>
//           <input
//             placeholder="Email"
//             id="email"
//             type="email"
//             className="formFieldInput"
//             name="email"
//             value={values.email}
//             onChange={handleChange}
//           />
//           {errors.email && <p>{errors.email}</p>}
//         </div>
//         <div className="formField">
//           <label className="formFieldLabel" htmlFor="subject">
//             Subject
//           </label>
//           <input
//             placeholder="Subject"
//             id="subject"
//             type="text"
//             className="formFieldInput"
//             name="subject"
//             value={values.subject}
//             onChange={handleChange}
//           />
//           {errors.subject && <p>{errors.subject}</p>}
//         </div>
//         <div className="formField">
//           <label className="formFieldLabel" htmlFor="message">
//             Message
//           </label>
//           <textarea
//             placeholder="Message"
//             id="message"
//             className="formFieldInput"
//             rows="1"
//             name="message"
//             value={values.message}
//             onChange={handleChange}
//           />
//           {errors.message && <p>{errors.message}</p>}
//         </div>
//         <button type="submit" className="formFieldButton">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;
