import React, { createContext, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Signout from "./components/Signout";
import { reducer, initialState } from "./reducer/useReducer";
import OtpForm from "./components/OtpForm";
import RequestDonationModal from "./components/RequestDonationModal";
import RequestDonation from "./components/RequestDonation";
import ConfirmDonation from "./components/ConfirmDonation";
import ConfirmDonationModal from "./components/ConfirmDonationModal";
import ItemDetails from "./components/ItemDetails";
import NGOHome from "./components/NGOHome";
import RestrauntHome from "./components/RestrauntHome";
import OngoingDonation from "./components/OngoingDonation";
import DonationStatus from "./components/DonationStatus";
import Employee from "./components/Employee";
import OngoingDonationEmp from "./components/OngoingDonationEmp";
import ShowStatus from "./components/ShowStatus";
import OngoingDonationNgo from "./components/OngoingDonationNgo";
import AssignEmployeeModal from "./components/AssignEmployeeModal";
import EmployeeDetails from "./components/EmployeeDetails";
import UserProfile from "./components/UserProfile";
import WriteBlog from "./components/WriteBlog";
import ReadBlog from "./components/ReadBlog";
import BlogModal from "./components/BlogModal";

export const userContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <userContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/RequestDonationModal" element={<RequestDonationModal />} />
          <Route exact path="/RequestDonation" element={<RequestDonation />} />
          <Route exact path="/ConfirmDonation" element={<ConfirmDonation />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/resetPassword" element={<OtpForm />} />
          <Route exact path="/signout" element={<Signout />} />
          <Route exact path="/ngohome" element={<NGOHome />} />
          <Route exact path="/restraunthome" element={<RestrauntHome />} />
          <Route exact path="/employee" element={<Employee />} />
          <Route exact path="/ongoingdonation" element={<OngoingDonation />} />
          <Route exact path="/ongoingdonationemp" element={<OngoingDonationEmp />} />
          <Route exact path="/ongoingdonationngo" element={<OngoingDonationNgo />} />
          <Route exact path="/donationstatus" element={<DonationStatus />} />
          <Route exact path="/showstatus" element={<ShowStatus />} />
          <Route exact path="/assignemployeemodal" element={<AssignEmployeeModal />} />
          <Route exact path="/employeedetails" element={<EmployeeDetails />} />
          <Route exact path="/userprofile" element={<UserProfile />} />
          <Route exact path="/writeblog" element={<WriteBlog />} />
          <Route exact path="/readblog" element={<ReadBlog />} />
          <Route exact path="/blogmodal" element={<BlogModal />} />
          <Route
            exact
            path="/confirmdonationmodal"
            element={<ConfirmDonationModal />}
          />
          <Route exact path="/itemdetails" element={<ItemDetails />} />
        </Routes>
      </userContext.Provider>
    </>
  );
};

export default App;
