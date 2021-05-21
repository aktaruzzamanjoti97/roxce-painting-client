import React from "react";
import "./AboutUs.css";
import about from "../../../images/about.jpg";
import ceo from "../../../images/ceo.jpg";
import signature from "../../../images/signature.jpg";

const AboutUs = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-4">
          <img src={about} alt="" />
        </div>
        <div className="col-md-6 offset-md-1">
          <div className="d-flex">
            <hr className="new4" />
            <h6 style={{ color: "lightsalmon" }} className="m-2">
              About Us
            </h6>
          </div>
          <div className="mt-4">
            <h1>Explore About</h1>
            <h1>Painting Services</h1>
            <h1>Success History</h1>
          </div>
          <h6 className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            numquam.
          </h6>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            aperiam eum blanditiis quis vel cum debitis modi optio quasi, saepe
            quidem, perspiciatis iste vero iusto. Eligendi, vero iusto ipsa eius
            reprehenderit molestiae tempore cum corporis est fugiat ex
            doloremque nam.
          </p>
          <div className="d-flex mt-3">
            <img
              style={{ height: "80px", borderRadius: "50%" }}
              src={ceo}
              alt=""
            />
            <div className="m-3">
              <h5>Willam Richardson</h5>
              <h6 style={{ color: "lightcoral" }}>CEO & Founder</h6>
            </div>
            <img style={{ height: "70px" }} src={signature} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
