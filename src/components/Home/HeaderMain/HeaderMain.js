import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { Button } from "react-bootstrap";
import './HeaderMain.css';

const HeaderMain = () => {
  return (
    <div
      className=" text-center d-flex justify-content-center align-items-center"
      style={{ height: "550px" }}
    >
      <div>
        <div className="text-center">
          <ReactTypingEffect
            text={["| 25 years of experience |"]}
            cursorRenderer={(cursor) => <h2 className="text-white">{cursor}</h2>}
            displayTextRenderer={(text, i) => {
              return (
                <h4 className="text-center">
                  {text.split("").map((char, i) => {
                    const key = `${i}`;
                    return (
                      <span
                        key={key}
                        style={{ color: "#66fcf1", letterSpacing: "8px" }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </h4>
              );
            }}
          />
        </div>
        <h1 className="header-text" style={{ color: "#66fcf1" }}>
          Painting Service
        </h1>
        <h1 className="text-title text-center header-text">Company</h1>

        <div>
          <Button className="m-3" variant="success">
            Get Started
          </Button>
          <Button className="m-2" variant="warning">
            Our Services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
