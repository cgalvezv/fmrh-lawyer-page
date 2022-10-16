import React from 'react'
import Breadcrumb from '../common/Breadcrumb'
import Layout from '../components/layout/Layout'
import CountUp from "react-countup";

function LawyerDetails() {
  return (
    <>
     <Layout>
      <Breadcrumb title="Lawyer Details" pageName="Lawyer Details"/>
      <div className="lawyer-details-section pt-120 pb-120">
  <div className="container">
    <div className="lawyer-info">
      <div className="row justify-content-center gy-5">
        <div className="col-xl-5 text-xl-start text-center">
          <img src="assets/images/bg/law-pro-pic.png" className="img-fluid rounded-2" alt="image" />
        </div>
        <div className="col-xl-7">
          <div className="lawyer-profile text-xl-start text-center">
            <h2>Henry Jack</h2>
            <span>Government Lawyer</span>
            <p className="para">In consequat tincidunt turpis sit amet imperdiet. Praesent Class officelan nonatouri mauris laoreet, iaculis libero quis.Curabitur et tempus eri aptent taciti sociosqulitoi
              consequat tincidunt turpis sit amet imperdiet.</p>
            <div className="lawyer-counter">
              <div className="row g-4 d-flex justify-content-xl-start justify-content-center">
                <div className="col-lg-3 col-md-3 col-sm-3 col-6 text-start d-flex justify-content-xl-start justify-content-center">
                  <div className="lawyer-counter-single wow animate fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.6s">
                    <div className="coundown d-flex flex-column">
                     
                      <h3 className="odometer" data-odometer-final={330}><CountUp end={50} delay={2} duration={5} /> +</h3>
                      <h5>Case Won</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-6 text-start d-flex justify-content-xl-start justify-content-center">
                  <div className="lawyer-counter-single wow animate fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.6s">
                    <div className="coundown d-flex flex-column">
                      <h3 className="odometer" data-odometer-final={330}><CountUp end={15} delay={2} duration={5} /> +</h3>
                      <h5>Case Lost</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-6 text-start d-flex justify-content-xl-start justify-content-center">
                  <div className="lawyer-counter-single wow animate fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.6s">
                    <div className="coundown d-flex flex-column">
                      <h3 className="odometer" data-odometer-final={150}><CountUp end={150} delay={2} duration={5} /> +</h3>
                      <h5>Happy Client</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-6 text-start d-flex justify-content-xl-start justify-content-center">
                  <div className="lawyer-counter-single wow animate fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.8s">
                    <div className="coundown d-flex flex-column">
                      <h3 className="odometer" data-odometer-final={10}><CountUp end={150} delay={2} duration={5} /> +</h3>
                      <h5>Case Pending</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
            <div className="lawyer-short-details">
              <h4>Short Details</h4>
              <ul className="details-list">
                <li>
                  <span>Position: </span>
                  <h5>Business Lawyer</h5>
                </li>
                <li>
                  <span>Experience: </span>
                  <h5>05 Year</h5>
                </li>
                <li>
                  <span>Email: </span>
                  <h5>info@example.com</h5>
                </li>
                <li>
                  <span>Nationality: </span>
                  <h5>Bangladeshi</h5>
                </li>
                <li>
                  <span>Practice Area:</span>
                  <h5>Family Lawyer, Personal Injury</h5>
                </li>
                <li>
                  <span>Address:</span>
                  <h5>Mirpur DOHS, Avenue 01, Dhaka</h5>
                </li>
                <li>
                  <span>Fax: </span>
                  <h5>123 456 789</h5>
                </li>
                <li>
                  <span>Follow Me:</span>
                  <ul className="lawyer-social pt-2">
                    <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                    <li><a href="https://www.twitter.com/"><i className="bx bxl-twitter" /></a></li>
                    <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li> 
                    <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest" /></a></li> 
                  </ul>
                </li>
              </ul>
            </div>  
          </div>
        </div>
      </div>
    </div>
    <div className="row g-4">
      <div className="col-lg-3">
        <div className="nav flex-lg-column flex-md-row nav-pills gap-lg-4 gap-3 justify-content-lg-start justify-content-center align-items-center wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className="nav-link active" id="v-pills-dashboard-tab" data-bs-toggle="pill" data-bs-target="#v-pills-dashboard" type="button" role="tab" aria-controls="v-pills-dashboard" aria-selected="true">Education</button>
          <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="true">Experties</button>
          <button className="nav-link" id="v-pills-order-tab" data-bs-toggle="pill" data-bs-target="#v-pills-order" type="button" role="tab" aria-controls="v-pills-order" aria-selected="true">Achivement</button>
        </div>
      </div>
      <div className="col-lg-9">
        <div className="tab-content" id="v-pills-tabContent">
          <div className="tab-pane fade show active text-lg-start text-center" id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashboard-tab">
            <h3 className="lawyer-edu-title">General Education</h3>
            <ul className="lawyer-edu-list">
              <li><span>University of Oxford School of Law, J.D., 1968 -</span>Stephen Flemming is a seasoned and its aggressivee attorneydevotes 100% of his practice to criminal defense.Gang Related Attempted Murder to a first time DUI, he has the experience and knowledge to handle the broadesting.</li>
              <li><span>University of Oxford, BA., 1965 - </span>Aggressive attorneydevotes of his practice seds ut to criminal defensse.Gang Related Attempted Murdeer to a first time DUI, he has the experience and knowledge to handle the broadesting range of criminal matters is a long established fact that a reader will be distracted.</li>
            </ul>
          </div>
          <div className="tab-pane fade text-lg-start text-center" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
            <h3 className="lawyer-edu-title">L.L.B - Bachelor Of Laws</h3>
            <ul className="lawyer-edu-list">
              <li><span>District of Mexico - </span>It is a long established fact that a reader will be distracteed by the readable content of a page when looking at its layout the point of using lorem Ipsum is that it has a more-or-less seds normal distriibution he point of using admissions in the bar admission.</li>
              <li><span>Watican City - </span>There are many variations of passages of Lorem Ipsum availablee, but the majority have suffered lawyer alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</li>
            </ul>
          </div>
          <div className="tab-pane fade text-lg-start text-center" id="v-pills-order" role="tabpanel" aria-labelledby="v-pills-order-tab">
            <h3 className="lawyer-edu-title">Court Practice</h3>
            <ul className="lawyer-edu-list">
              <li><span>UK Supreme Court - </span>There are many variations of passages of Lorem Ipsum available ut, but the majority have suffered alteration in some form by injected humour, or randomised words which dont look even the slightly believable if you are going to use a passage of Lorem Ipsums, you need in the middle the UK Supreme Court.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </Layout> 
    </>
  )
}

export default LawyerDetails