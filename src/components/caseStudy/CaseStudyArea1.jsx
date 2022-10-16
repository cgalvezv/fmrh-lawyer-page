import Link from "next/link";
import React, { useState } from "react";
import caseStudyData from "../../data/case_Study.json";
function CaseStudyArea1() {
  const [caseData, setCaseData] = useState(caseStudyData);
  const filterCaseData = (caseItem) => {
    const updateditems = caseStudyData.filter((curentCaseItem) => {
      return curentCaseItem.formate === caseItem;
    });

    setCaseData(updateditems);
  };
  return (
    <>
      <div className="casestudy-gallery pt-120 pb-120" id="portfolio">
        <div className="container">
          <div className="row justify-content-center">
            <div className="section-title2 text-center">
              <h2>Completed Cases</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="button-group filter-button-group d-flex flex-wrap flex-row justify-content-md-between justify-content-center gap-3 mb-60">
                <button
                  data-filter="*"
                  onClick={() => setCaseData(caseStudyData.slice(0, 6))}
                >
                  all
                </button>
                <button
                  data-filter=".training"
                  onClick={() => filterCaseData("Juvenile Crime")}
                >
                  Accidents
                </button>
                <button
                  data-filter=".maintenance"
                  onClick={() => filterCaseData("Drug Offense")}
                >
                  Drugs
                </button>
                <button
                  data-filter=".pilot, .alkaline-earth"
                  onClick={() => filterCaseData("Criminal Law")}
                >
                  {" "}
                  Financial
                </button>
                <button
                  data-filter=":not(.transition)"
                  onClick={() => filterCaseData("Business Law")}
                >
                  {" "}
                  Realstate
                </button>
                <button
                  data-filter=":not(.transition)"
                  onClick={() => filterCaseData("Work Accident")}
                >
                  Violence
                </button>
              </div>
            </div>
            <div className="col-12">
              <div className="grid row d-flex justify-content-center g-4">
                {caseData.slice(0, 6).map((item) => {
                  const { id, images, category, tag } = item;
                  return (
                    <div
                      key={id}
                      className="col-lg-4 col-md-6 col-sm-6 training transition"
                    >
                      <div
                        className="casestudy-single wow fadeInDown"
                        data-wow-duration="1.5s"
                        data-wow-delay="0.2s"
                      >
                        <img src={images} className="casestudy1" alt="image" />
                        <Link href="/casestudy-details">
                          <a className="read-more">
                            <span className="btn-text">Read more</span>
                            <span className="btn-arrow">
                              <i className="bi bi-arrow-right" />
                            </span>
                          </a>
                        </Link>
                        <div className="text">
                          <span>{tag}</span>
                          <h3>
                            <Link href="/casestudy-details">
                              <a>{category}</a>
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
        </div>
      </div>
    </>
  );
}

export default CaseStudyArea1;
