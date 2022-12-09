import Link from 'next/link'
import React from 'react'

function CaseStidy4() {
  return (
    <>
     <div className="case-study-section pt-120">
  <div className="container-fluid">
    <div className="row">
      <div className="section-title-area sibling2">
        <div className="marquee">
          <div>
            <span>Project Study</span>
            <span>Project Study</span>
          </div>
        </div>
        <div className="section-title sibling2">
          <span>OUR CASE STUDY</span>
          <h2>Get what we have done for solving the problems.</h2>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row justify-content-center g-4">
      <div className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="200ms">
        <div className="casestudy-single3 sibling2">
          <div className="image">
            <img src="assets/images/bg/casestudy31.png" alt="image" />
            <Link href="/casestudy-details" >
              <a className="case-details-arrow"><img src="assets/images/icons/read-more-arro.svg" alt="image" /></a>
            </Link>
          </div>
          <div className="content">
            <span>Skirmish</span>
            <h4><Link href="/casestudy-details"><a>Business Law</a></Link></h4>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="200ms">
        <div className="casestudy-single3 sibling2">
          <div className="image">
            <img src="assets/images/bg/casestudy32.png" alt="image" />
            <Link href="/casestudy-details" >
              <a className="case-details-arrow"><img src="assets/images/icons/read-more-arro.svg" alt="image" /></a>
            </Link>
          </div>
          <div className="content">
            <span>Skirmish</span>
            <h4><Link href="/casestudy-details"><a>Real State Law</a></Link></h4>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="200ms">
        <div className="casestudy-single3 sibling2">
          <div className="image">
            <img src="assets/images/bg/casestudy33.png" alt="image" />
            <Link href="/casestudy-details" >
              <a className="case-details-arrow"><img src="assets/images/icons/read-more-arro.svg" alt="image" /></a>
            </Link>
          </div>
          <div className="content">
            <span>Skirmish</span>
            <h4><Link href="/casestudy-details"><a>Family Law</a></Link></h4>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="200ms">
        <div className="casestudy-single3 sibling2">
          <div className="image">
            <img src="assets/images/bg/casestudy34.png" alt="image" />
            <Link href="/casestudy-details" >
              <a className="case-details-arrow"><img src="assets/images/icons/read-more-arro.svg" alt="image" /></a>
            </Link>
          </div>
          <div className="content">
            <span>Skirmish</span>
            <h4><Link href="/casestudy-details"><a>Helth Care Law</a></Link></h4>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="200ms">
        <div className="casestudy-single3 sibling2">
          <div className="image">
            <img src="assets/images/bg/casestudy35.png" alt="image" />
            <Link href="/casestudy-details" >
              <a className="case-details-arrow"><img src="assets/images/icons/read-more-arro.svg" alt="image" /></a>
            </Link>
          </div>
          <div className="content">
            <span>Skirmish</span>
            <h4><Link href="/casestudy-details"><a>Criminal Law</a></Link></h4>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="200ms">
        <div className="casestudy-single3 sibling2">
          <div className="image">
            <img src="assets/images/bg/casestudy36.png" alt="image" />
            <Link href="/casestudy-details" >
              <a className="case-details-arrow"><img src="assets/images/icons/read-more-arro.svg" alt="image" /></a>
            </Link>
          </div>
          <div className="content">
            <span>Skirmish</span>
            <h4><Link href="/casestudy-details"><a>Drug Offense</a></Link></h4>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-60">
      <div className="col-lg-12 text-center">
        <Link href="/case-study2" ><a className="eg-btn btn--primary2 sibling2  btn--lg2 d-inline-flex"><i className="bi bi-dash-lg" />View All Case<i className="bi bi-chevron-right" /></a></Link>
      </div>
    </div>
  </div>
</div>
   
    </>
  )
}

export default CaseStidy4