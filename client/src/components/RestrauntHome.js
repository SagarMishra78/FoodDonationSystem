import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

// Images Import
import img1 from "../images/carousel-1.jpg";
import img2 from "../images/carousel-2.jpg";
import img3 from "../images/carousel-3.jpg";

const RestrauntHome = () => {
  return (
    <>
      {/* Carousel */}
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <p className="caption">Don't be rude, donate some food.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />

          <Carousel.Caption>
            <p className="caption">We're hungry for donations.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />

          <Carousel.Caption>
            <p className="caption">Look what we can do together.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h1>Great to see you back!</h1>

      {/* Card */}
      <div className="btncard">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Confirm Donation</h5>
            <p className="card-text">
              Confirm the donations made by NGOs and fill in some details for donation!
            </p>
            <Link className="btn btn-primary" to={"/ConfirmDonation"}>
              Confirm
            </Link>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Donation Status</h5>
            <p className="card-text">
              Check on-going donation status here, updated by donation employee!
            </p>
            <Link className="btn btn-primary" to={"/ongoingdonation"}>
              Track
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestrauntHome;
