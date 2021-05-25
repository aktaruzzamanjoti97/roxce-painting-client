import React from "react";
import doIt from "../../../images/do.JPG";
import residential from "../../../images/residencial.png";
import commercial from "../../../images/commercial.png";
import industrial from "../../../images/industrial.png";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from 'react-reveal/Fade';

const WhatWeDo = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-5">
          <LightSpeed left>
            <div className="d-flex">
              <hr className="new4"></hr>
              <h6 style={{ color: "lightsalmon" }} className="m-2">
                What We Do
              </h6>
            </div>
            <h1 className="mt-3">Beign Us To Made</h1>
            <h1 className="mb-4">Your Dream Painting</h1>
            <div className="d-flex">
              <img
                style={{ height: "50px", marginTop: "10px" }}
                src={residential}
                alt=""
              />
              <div className="ml-4">
                <h4>Residential Painting</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor, fuga.
                </p>
              </div>
            </div>
            <div className="d-flex">
              <img
                style={{ height: "50px", marginTop: "10px" }}
                src={commercial}
                alt=""
              />
              <div className="ml-4">
                <h4>Commercial Painting</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor, fuga.
                </p>
              </div>
            </div>
            <div className="d-flex">
              <img
                style={{ height: "50px", marginTop: "10px" }}
                src={industrial}
                alt=""
              />
              <div className="ml-4">
                <h4>Industrial Painting</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor, fuga.
                </p>
              </div>
            </div>
          </LightSpeed>
        </div>
        <div className="col-md-7">
          <Fade right big>
          <img className="img-fluid" src={doIt} alt="" />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
