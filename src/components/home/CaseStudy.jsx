import React from "react";
import caseStudyData from "../../data/case_Study.json";
import Link from "next/link";
function CaseStudy() {
  return (
    <>
      <div className="casestudy-section pt-120 pb-120">
        <img
          src="assets/images/bg/section-bg1.svg"
          className="section-bg1 img-fluid"
          alt="image"
        />
        <img
          src="assets/images/bg/section-bg2.svg"
          className="section-bg2 img-fluid"
          alt="image"
        />
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-8">
              <div className="section-title1 text-start">
                <h2>Case Study</h2>
                <p>
                  In consequat tincidunt turpis sit amet imperdiet. Praesent
                  Class officelan nonatoureai mauris laoreet, iaculis libero
                  quis.Curabitur et tempus eri consequat tincidunt.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-lg-end text-center">
              <div className="eg-btn btn--primary btn--lg d-lg-inline-block d-none">
                <Link href="/case-study1">
                  <a>
                    <i className="bi bi-dash-lg" />
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center g-4">
            {caseStudyData.slice(0, 6).map((item) => {
              return (
                <div
                  key={item.id}
                  className="col-lg-4 col-md-6 col-sm-10 wow fadeInDown"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <div className="casestudy-single">
                    <img src={item.images} className="casestudy1" alt="image" />
                    <Link href="/casestudy-details">
                      <a className="read-more">
                        <span className="btn-text">Read more</span>
                        <span className="btn-arrow">
                          <i className="bi bi-arrow-right" />
                        </span>
                      </a>
                    </Link>
                    <div className="text">
                      <span>{item.tag}</span>
                      <h3>
                        <Link href="/casestudy-details">
                          <a>{item.category}</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default CaseStudy;
