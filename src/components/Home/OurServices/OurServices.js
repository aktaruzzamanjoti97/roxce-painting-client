import React from "react";
import Services from "../Services/Services";
import "./OurServices.css";
import interior1 from '../../../images/residencial-interior.png';
import interior2 from '../../../images/commercial-interior.png';
import interior3 from '../../../images/industrial-interior.png';

const OurServices = () => {
  const serviceData = [
    {
      name: "Residential Interior",
      img: interior1,
    },
    {
      name: "Commercial Interior",
      img: interior2,
    },
    {
      name: "Industrial Interior",
      img: interior3,
    },
  ];

  return (
    <div className="services-style">
      <div className="container pt-5">
        <h4 style={{ fontWeight: "700" }} className="text-center text-primary">
          What We Offer
        </h4>
        <h1 style={{ fontWeight: "700" }} className="text-center">
          We Help You For Made Your
        </h1>
        <h1 style={{ fontWeight: "700" }} className="text-center">
          Dream Painting
        </h1>
      </div>
      <div className="container w-75">
        <div className="row">
          {serviceData.map((service) => (
            <Services service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
