import React, { useState } from "react";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
function InfoSection() {
  const value1 = 80
  const value2 = 60
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="info-section">
        <div className="container-fluid">
          <div className="row g-4">
            <div className="col-xl-2 col-lg-3 col-md-12 order-lg-1 order-3">
              <div className="progress-area">
                <div
                  id="progress"
                  className="progress-item mb-lg-4 mb-md-0 mb-4"
                >
               
                      <CircularProgressbar
                        className="yes"
                        value={value2}
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
               
                  <h5>Case Win</h5>
                </div>
                <div id="progress1" className="progress-item">
                 
                      <CircularProgressbar
                        value={value1}
                        text={`80%`}
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
                    
                  <h5>Legal Solutions</h5>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-9 order-lg-2 order-1">
              <div className="info-content">
                <h2>We Are The Most Populer Law Firm With Legal Law.</h2>
                <p>
                  In consequat tincidunt turpis sit amet imperdiet. Praesent
                  Class officelan nonatoureanor mauris laoreet, iaculis libero
                  quis.Curabitur et tempus eri consequat tincidunt turpis sita
                  amet imperdiet. Praesent nonatourean olei aptent.
                </p>
                <ul className="info-list">
                  <li>
                    <h4>Open Hour</h4>
                    <p>
                      Monday To Saturday <br />
                      9.00 AM - 10.30 PM
                    </p>
                  </li>
                  <li>
                    <h4>Location</h4>
                    <p>
                      168/170, Ave 01,Old York Drive Rich <br /> Mirpur, Dhaka,
                      Bangladesh
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-2 col-md-3 order-lg-3 order-2">
              <div className="info-video">
                <div className="video-play">
                  <div
                   onClick={() => setOpen(true)}
                   style={{ cursor: "pointer" }}
                    className="popup-youtube video-icon"
                  >
                    <i className="bx bx-play" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="TboWOSW7qCI"
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
    </>
  );
}

export default InfoSection;
