import Link from "next/link";
import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import Layout from "../components/layout/Layout";
import teamData from "../data/team_data.json";

function Team() {
  return (
    <>
      <Layout>
        <Breadcrumb title="Lawyers" pageName="Lawyers" />
        <div className="team-section pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center mb-60">
              <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
                <div className="section-title2 text-center">
                  <span>Our Attorneys</span>
                  <h2>Find Our Intellectual Lawyer for you.</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center g-4 mb-60">
              {teamData.map((item) => {
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
                          <Link href="/lawyer-details"><a>{item.name}</a></Link>
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
            <div className="row">
              <div className="col-12 text-center">
                <Link
                  href="/team"
                  
                >
                  <a className="eg-btn capsule btn--outline sibling3 btn--md load-btn">Load More
                  <svg
                    width={20}
                    height={16}
                    viewBox="0 0 22 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21.9805 6.64708C21.955 6.74302 20.6834 7.78829 18.0766 9.85862C13.9311 13.156 14.0201 13.0954 13.5751 12.949C13.1809 12.8177 13.0219 12.5097 13.1809 12.1814C13.2127 12.1057 14.6369 10.9342 16.3408 9.5809L19.4309 7.11669V5.90479L16.3091 3.41534C14.23 1.75907 13.1682 0.885493 13.1427 0.789551C13.041 0.466377 13.2635 0.143203 13.6577 0.0472607C13.7595 0.0270623 13.8485 0.00181433 13.8612 0.00181433C14.0201 -0.0385824 14.8467 0.582518 18.1148 3.18306C20.6898 5.23824 21.955 6.27846 21.9805 6.36935C22.0059 6.45015 22.0059 6.57134 21.9805 6.64708Z" />
                    <path d="M17.4313 5.90479V7.11669L2.71236 7.10659C2.27365 7.10608 1.84766 7.10558 1.43438 7.10507C1.19278 7.10507 0.954985 7.10457 0.721643 7.10457C0.320448 7.09396 0 6.83189 0 6.51074C0 6.34662 0.0839268 6.19817 0.218718 6.09061C0.349695 5.98659 0.528993 5.92044 0.728001 5.9169L1.23283 5.9164L2.706 5.91488L17.4313 5.90479Z" />
                  </svg></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Team;
