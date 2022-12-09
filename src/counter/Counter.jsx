import React from 'react'
import CountUp from "react-countup";
function Counter2() {
  return (
    <>
     <div className="counter-section2">
  <div className="container">
    <div className="row justify-content-center gx-lg-0 g-4">
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="intro-single sibling2 border-top-left-bottom wow animate fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
          <div className="intro-wrap d-flex flex-column">
            <img src="assets/images/icons/intro-icon1.svg" className="img-fluid" alt="image" />
            <h3 className="odometer" data-odometer-final={330}><CountUp end={50} delay={2} duration={4} /> +</h3>
            <h5>Expert Attorneys</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="intro-single sibling2  wow animate fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
          <div className="intro-wrap d-flex flex-column">
            <img src="assets/images/icons/intro-icon2.svg" alt="image" />
            <h3 className="odometer" data-odometer-final={330}><CountUp end={80} delay={2} duration={4} /> +</h3>
            <h5>Happy Client</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="intro-single sibling2 wow animate fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.6s">
          <div className="intro-wrap d-flex flex-column">
            <img src="assets/images/icons/intro-icon3.svg" alt="image" />
            <h3 className="odometer" data-odometer-final={330}><CountUp end={50} delay={2} duration={4} /> +</h3>
            <h5>Case Complete</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="border-unset intro-single border-top-right-bottom sibling2 wow animate fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
          <div className="intro-wrap d-flex flex-column">
            <img src="assets/images/icons/intro-icon4.svg" alt="image" />
            <h3 className="odometer" data-odometer-final={330}><CountUp end={70} delay={2} duration={4} /> +</h3>
            <h5>Case Closed</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
   
    </>
  )
}

export default Counter2