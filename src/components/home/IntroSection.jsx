import React from 'react'
import CountUp from "react-countup";
function IntroSection() {
  return (
    <>
     <div className="intro-section">
  <div className="container-lg container-fluid">
    <div className="row justify-content-center gx-0">
      <div className="col-lg-3 col-md-3 col-sm-6">
        <div className="intro-single wow animate fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
          <span className="s-number">01</span>
          <div className="intro-wrap d-flex flex-column">
            <img src="assets/images/icons/intro-icon1.svg" className="img-fluid" alt="image" />
            <h3 className="odometer" data-odometer-final={330}><CountUp end={150} delay={2} duration={5} /></h3>
            <h5>Expert Attorneys</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6">
        <div className="intro-single  wow animate fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
          <span className="s-number">02</span>
          <div className="intro-wrap d-flex flex-column">
            <img src="assets/images/icons/intro-icon2.svg" alt="image" />
            <h3 className="odometer" data-odometer-final={330}><CountUp end={300} delay={2} duration={4} /></h3>
            <h5>Happy Client</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6">
        <div className="intro-single wow animate fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.6s">
          <span className="s-number">03</span>
          <div className="intro-wrap d-flex flex-column">
            <img src="assets/images/icons/intro-icon3.svg" alt="image" />
            {/* <h3 className="odometer" data-odometer-final={50}>50</h3> */}
            <h3 className="odometer" data-odometer-final={330}><CountUp end={100} delay={2} duration={6} /></h3>
            <h5>Case Complete</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6">
        <div className="border-unset intro-single wow animate fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
          <span className="s-number">04</span>
          <div className="intro-wrap d-flex flex-column">
            <img src="assets/images/icons/intro-icon4.svg" alt="image" />
            <h3 className="odometer" data-odometer-final={330}><CountUp end={30} delay={2} duration={4} /></h3>
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

export default IntroSection