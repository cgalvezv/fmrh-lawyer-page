import React from "react";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function About2() {
  const value1 = 45
  const value2 = 55
  const value3 = 60
  return (
    <>
      <div className="about-section2 pt-120 pb-120">
        <div className="container">
          <div className="row g-4 justify-content-center align-items-center">
            <div className="col-lg-6">
              <div className="about2-img">
                <img
                  src="assets/images/bg/experience-bg.png"
                  alt="image"
                  className="img-fluid experience-img"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title2 sibling3 text-lg-start text-center">
                <span>Best Experience</span>
                <h2>
                  Find us what we actually do for giving complete solutions.
                </h2>
              </div>
              <div className="about2-counter-area text-lg-start text-center">
                <p className="para">
                  In consequat tincidunt turpis sit amet imperdiet. Praesent
                  ouiertdion nonatourei mauris laoreet, iaculis libero
                  quis.Curabitur et tempusoni eros Class offi aptent taciti
                  sociosqu ad litora torquent per.
                </p>
                <div className="progress-area2">
                  <div id="progress4" className="progress-item">
                   
                        <CircularProgressbar
                          className="yes"
                          value={value1}
                          text={`45%`}
                          circleRatio={0.75}
                          styles={buildStyles({
                            rotation: 1 / 2 + 1 / 8,
                            strokeLinecap: "butt",
                            trailColor: "#005153",
                            textColor: "#000",
                            textSize: "15",
                            pathColor: "#ca9457",
                            dominantBaseline: "text-before-edge",
                          })}
                        />
                      
                    <h5>Case Pending</h5>
                  </div>

                  <div id="progress3" className="progress-item">
                    
                     
                        <CircularProgressbar
                          value={value2}
                          text={`55%`}
                          circleRatio={0.75}
                          styles={buildStyles({
                            rotation: 1 / 2 + 1 / 8,
                            strokeLinecap: "red",
                            trailColor: "#005153",
                            textColor: "#000",
                            textSize: "15",
                            pathColor: "#ca9457",
                          })}
                        />
                     
                    <h5>Case Lost</h5>
                  </div>
                  <div id="progress4" className="progress-item">
                   
                      
                        <CircularProgressbar
                          value={value3}
                          text={`60%`}
                          circleRatio={0.75}
                          styles={buildStyles({
                            rotation: 1 / 2 + 1 / 8,
                            strokeLinecap: "butt",
                            trailColor: "#005153",
                            textColor: "#000",
                            textSize: "15",
                            pathColor: "#ca9457",
                          })}
                        />
                     
                    <h5>Case Pending</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About2;
