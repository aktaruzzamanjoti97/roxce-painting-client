import React from "react";
import { Button } from "react-bootstrap";
import "./Services.css";

const Services = ({ service }) => {
  return (
    <div className="col-md-4 col-sm-6 col-12 py-3 text-center">
      <div className="rounded box-style" style={{}}>
        <img
          style={{ height: "180px", width: "100%" }}
          src={service.imageURL}
          alt=""
        />
        <div style={{ margin: "15px", padding: "15px" }} className="w-60">
          <h4>{service.name}</h4>
          <p>Small Area: $ {service.smPrice}</p>
          <p>Large Area: $ {service.lgPrice}</p>
          <Button variant="success">Get Our Service</Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
