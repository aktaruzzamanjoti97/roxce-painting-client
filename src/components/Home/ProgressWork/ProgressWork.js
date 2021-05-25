import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Bounce from "react-reveal/Bounce";

const ProgressWork = () => {
  const percentage1 = 85;
  const percentage2 = 67;
  const percentage3 = 83;
  return (
    <section className="mt-5">
      <Bounce>
        <div className="row">
          <div className="col-md-3 offset-md-1">
            <div style={{ width: 100, height: 100 }}>
              <CircularProgressbar
                value={percentage1}
                text={`${percentage1}%`}
                styles={buildStyles({
                  // Rotation of path and trail, in lorem8er of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "16px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `rgba(252, 135, 89, ${percentage1 / 100})`,
                  textColor: "black",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
          </div>
          <div className="col-md-8">
            <h4>Residential Interior</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              quibusdam, laboriosam aliquid totam molestiae error!
            </p>
          </div>
        </div>
      </Bounce>

      <br />

      <div>
        <Bounce>
          <div className="row my-2">
            <div className="col-md-3 offset-md-1">
              <div style={{ width: 100, height: 100 }}>
                <CircularProgressbar
                  value={percentage2}
                  text={`${percentage2}%`}
                  styles={buildStyles({
                    // Rotation of path and trail, in lorem8er of turns (0-1)
                    rotation: 0.25,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: "butt",

                    // Text size
                    textSize: "16px",

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(37, 195, 115, ${percentage2 / 100})`,
                    textColor: "black",
                    trailColor: "#d6d6d6",
                    backgroundColor: "#3e98c7",
                  })}
                />
              </div>
            </div>
            <div className="col-md-8">
              <h4>Commercial Interior</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                quibusdam, laboriosam aliquid totam molestiae error!
              </p>
            </div>
          </div>
        </Bounce>
      </div>
      <Bounce>
        <div className="row my-2">
          <div className="col-md-3 offset-md-1">
            <div style={{ width: 100, height: 100 }}>
              <CircularProgressbar
                value={percentage3}
                text={`${percentage3}%`}
                styles={buildStyles({
                  // Rotation of path and trail, in lorem8er of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "16px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `rgba(143, 61, 254, ${percentage3 / 100})`,
                  textColor: "black",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
          </div>
          <div className="col-md-8">
            <h4>Industrial Interior</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              quibusdam, laboriosam aliquid totam molestiae error!
            </p>
          </div>
        </div>
      </Bounce>
    </section>
  );
};

export default ProgressWork;
