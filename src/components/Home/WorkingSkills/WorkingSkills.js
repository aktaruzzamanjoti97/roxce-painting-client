import React from "react";
import { Button } from "react-bootstrap";
import ProgressWork from "../ProgressWork/ProgressWork";
import "./WorkingSkills.css";

const WorkingSkills = () => {
  return (
    <div className="container">
      <div className="row pt-5 mt-2">
        <div className="col-md-6">
          <h4 className="text-primary">Best Skills</h4>

          <div className="py-3">
            <h1>Discover Our</h1>
            <h1>Best Working Skills</h1>
            <h1>& Experience</h1>
          </div>
          <p className="verticalLine px-4 my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            nihil, obcaecati eaque excepturi reprehenderit iure accusantium vero
            ipsam et dolorum? Atque sed sapiente sit temporibus alias neque
            deleniti necessitatibus voluptatem, excepturi animi corrupti
            repellat pariatur culpa repellendus aliquid ea consequatur.
          </p>
          <Button variant="info">Learn More</Button>
        </div>
        <div className="col-md-6">
          <ProgressWork />
        </div>
      </div>
    </div>
  );
};

export default WorkingSkills;
