import Link from "next/link";
import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import Layout from "../components/layout/Layout";
import teamData from "../data/team_data.json";
function PracticeDetails() {
  return (
    <>
      <Layout>
        <Breadcrumb
          title="Practice Area Details"
          pageName="Practice Area Details"
        />
        <div className="service-details pt-120 pb-80">
          <div className="container">
            <div className="row g-4">
              <div
                className="col-lg-8 wow fadeInLeft"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <div className="service-details-text">
                  <h2>Business Law</h2>
                  <p className="para">
                    Vestibulum eget mauris dui. Proin luctus est lacus, eu
                    lobortis orci dignissim. Orcilagri. Curabitur id nunc
                    hendrerit, dapibus magna sit amet, cursus ogycol magna.
                    Phasellus in vulputate metus. Nullam nisi metus, efficitur
                    sit amet quam id, tempor deada semper tortor.Vestibulum eget
                    mauris dui. Proin luctus est lacus, eu lobortis orci
                    dignissim at. Uto nec vulputate nisl. Mauris vel dolor
                    augue. Praesent sit amet eros dui. Sed porta gravida mollis.
                    In odio dolor, maximus a finibus eget, euismod vitae tellus.
                  </p>
                  <p className="para mb-0">
                    Vestibulum eget mauris dui. Mauris vel dolor augue. Praesent
                    sit amet eros dui. Sed porta gravida mollis. In odio
                    dolorcoul maximus a finibus eget, euismod vitae tellus.
                    Vivamus condimentum nulla rhoncus ipsum jougara vehicula,
                    quis bibendum massa auctor. Suspendisse potenti. Nam
                    vulputate diam tempus orcilagri rhoncus tincidunt et nec
                    dolor. Curabitur id nunc hendrerit, dapibus magna sit amet,
                    cursus ogycol magna. Phasellus in vulputate metus. Nullam
                    nisi metus, efficitur sit amet quam id, tempor deada semper
                    tortor.Vestibulum eget mauris dui. Proin luctus est lacus,
                    eu lobortis orci dignissim at. Uto nec vulputate nisl.
                    Mauris vel dolor augue. Praesent sit amet eros dui. Sed
                    porta gravida mollis. In odio dolor, maximus a finibus eget,
                    euismod vitae tellus.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 wow fadeInRight"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <ul className="service-list">
                  <ServiceList title="Criminal Law" />
                  <ServiceList title="Family Law" />
                  <ServiceList title="Drug Offense" />
                  <ServiceList title="Workplace Accident" />
                  <ServiceList title="Realestate Law" />
                  <ServiceList title="Education Law" />
                  <ServiceList title="Business Law" />
                </ul>
              </div>
            </div>
            <div className="row service-img-grp">
              <div
                className="col-md-6 wow fadeInLeft"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <img
                  src="assets/images/bg/service-detls1.png"
                  alt="image"
                  className="img-fluid"
                />
              </div>
              <div
                className="col-md-6 wow fadeInRight"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <img
                  src="assets/images/bg/service-detls2.png"
                  alt="image"
                  className="img-fluid mb-0"
                />
              </div>
            </div>
            <div className="row g-4">
              <div
                className="col-lg-6 wow fadeInLeft"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <h3 className="feature-title">We Provide</h3>
                <ul className="feature-list">
                  <FeatureList
                    image="assets/images/icons/feature-icon1.svg"
                    title="Business Transactions"
                    details="In consequat tincidunt turpis sit amet imperdiet. PraesentClavi In consequat tincidunt turpis sit amet imperdiet. Praesent Class officelan nonatoureanor mauris laoreet, iaculis libero quis.Curabitur et tempus eri"
                  />
                  <FeatureList
                    image="assets/images/icons/feature-icon2.svg"
                    title="Small Business Counseling"
                    details="In consequat tincidunt turpis sit amet imperdiet. PraesentClavi In consequat tincidunt turpis sit amet imperdiet. Praesent Class officelan nonatoureanor mauris laoreet, iaculis libero quis.Curabitur et tempus eri"
                  />
                  <FeatureList
                    image="assets/images/icons/feature-icon3.svg"
                    title="Breach Of Contract"
                    details="In consequat tincidunt turpis sit amet imperdiet. PraesentClavi In consequat tincidunt turpis sit amet imperdiet. Praesent Class officelan nonatoureanor mauris laoreet, iaculis libero quis.Curabitur et tempus eri"
                  />
                </ul>
              </div>
              <div
                className="col-lg-6 wow fadeInRight"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <img
                  src="assets/images/bg/service-detls3.png"
                  alt="image"
                  className="img-fluid mb-0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="team-section pb-120">
          <div className="container">
            <h3 className="team-title">This Team</h3>
            <div className="row justify-content-center g-4">
              {teamData.slice(0, 4).map((item) => {
                return (
                  <div
                    key={item.id}
                    className="col-xl-3 col-lg-4 col-md-6 col-sm-10  wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.2s"
                  >
                    <div className="attorney-single sibling2">
                      <img
                        src={item.image}
                        className="casestudy1"
                        alt="image"
                      />
                      <div className="content">
                        <h4>
                          <Link href="/lawyer-details">{item.name}</Link>
                        </h4>
                        <p>{item.designation}</p>
                      </div>
                      <ul className="social-list2 gap-3">
                        <li>
                          <a href="https://www.facebook.com/">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com/">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <i className="bx bxl-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.pinterest.com/">
                            <i className="bx bxl-pinterest" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default PracticeDetails;

function ServiceList({ title }) {
  return (
    <>
      <li>
        <Link href="/practice-area"><a>{title}</a></Link>
        <span>
          <svg
            width={18}
            height={15}
            viewBox="0 0 22 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.9805 6.64708C21.955 6.74302 20.6834 7.78829 18.0766 9.85862C13.9311 13.156 14.0201 13.0954 13.5751 12.949C13.1809 12.8177 13.0219 12.5097 13.1809 12.1814C13.2127 12.1057 14.6369 10.9342 16.3408 9.5809L19.4309 7.11669V5.90479L16.3091 3.41534C14.23 1.75907 13.1682 0.885493 13.1427 0.789551C13.041 0.466377 13.2635 0.143203 13.6577 0.0472607C13.7595 0.0270623 13.8485 0.00181433 13.8612 0.00181433C14.0201 -0.0385824 14.8467 0.582518 18.1148 3.18306C20.6898 5.23824 21.955 6.27846 21.9805 6.36935C22.0059 6.45015 22.0059 6.57134 21.9805 6.64708Z"
              fill="white"
            />
            <path
              d="M17.4313 5.90479V7.11669L2.71236 7.10659C2.27365 7.10608 1.84766 7.10558 1.43438 7.10507C1.19278 7.10507 0.954985 7.10457 0.721643 7.10457C0.320448 7.09396 0 6.83189 0 6.51074C0 6.34662 0.0839268 6.19817 0.218718 6.09061C0.349695 5.98659 0.528993 5.92044 0.728001 5.9169L1.23283 5.9164L2.706 5.91488L17.4313 5.90479Z"
              fill="white"
            />
          </svg>
        </span>
      </li>
    </>
  );
}

function FeatureList({ image, title, details }) {
  return (
    <>
      <li>
        <div className="icon">
          <img src={image} alt="image" />
        </div>
        <div className="text">
          <h4>{title}</h4>
          <p className="para">{details}</p>
        </div>
      </li>
    </>
  );
}
