import React from "react";
import Services from "../Services/Services";
import "./OurServices.css";
import interior1 from '../../../images/residencial-interior.png';
import interior2 from '../../../images/commercial-interior.png';
import interior3 from '../../../images/industrial-interior.png';
import { useEffect } from "react";
import { useState } from "react";

const OurServices = () => {

  const [ourServices, setOurServices] = useState([])

  // const serviceData = [
  //   {
  //     name: "Residential Interior",
  //     img: interior1,
  //   },
  //   {
  //     name: "Commercial Interior",
  //     img: interior2,
  //   },
  //   {
  //     name: "Industrial Interior",
  //     img: interior3,
  //   },
  // ];

  useEffect(() => {
    fetch(`http://localhost:5000/service`)
    .then(res => res.json())
    .then(data => setOurServices(data))
  }, [ourServices])

  return (
    <div className="services-style">
      <div className="container pt-5">
        <h4 style={{ fontWeight: "700", width: "350px", backgroundColor: 'White', padding:'10px'}} className="text-center text-primary mx-auto">
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
          {ourServices.map((service) => (
            <Services service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
