import Link from "next/link";
import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import Layout from "../components/layout/Layout";

function CasestudyDetails() {
  return (
    <>
      <Layout>
        <Breadcrumb title="Case Study Details" pageName="Case Study Details" />
        <div className="casestudy-details pt-120 pb-120">
  <div className="container">
    <div className="row gy-5">
      <div className="col-lg-8">
        <div className="case-details-single">
          <img src="assets/images/bg/cs-details.png" alt="image" className="img-fluid" />
          <h2>Criminal Law</h2>
          <p className="para mb-30">Vestibulum eget mauris dui. Proin luctus est lacus, eu lobortis orci dignissim at. Ut nec vulputateri nisl. Mauris vel dolor augue. Praesent sit amet eros dui. Sed porta gravida mollis. In odio dolorcoul maximus a finibus eget, euismod vitae tellus. Vivamus condimentum nulla rhoncus ipsum jougara vehicula, quis bibendum massa auctor. Suspendisse potenti. Nam vulputate diam tempus orcilagri rhoncus tincidunt et nec dolor. Curabitur id nunc hendrerit</p>
          <h3>01. The Challenge.</h3>
          <p className="para">Vestibulum eget mauris dui. Proin luctus est lacus, eu lobortis orci dignissim at. Ut nec vulputateri nisl. Mauris vel dolor augue. Praesent sit amet eros dui. Sed porta gravida mollis. In odio dolorcoul maximus a finibus eget, euismod vitae tellus.</p>
          <div className="row details-img-grp g-4">
            <div className="col-md-6">
              <img src="assets/images/bg/cs-details1.png" alt="image" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <img src="assets/images/bg/cs-details2.png" alt="image" className="img-fluid" />
            </div>
          </div>
          <h3>02. Our Process.</h3>
          <p className="para">Vestibulum eget mauris dui. Proin luctus est lacus, eu lobortis orci dignissim at. Ut nec vulputateri nisl. Mauris vel dolor augue. Praesent sit amet eros dui. Sed porta gravida mollis. In odio dolorcoul maximus a finibus eget, euismod vitae tellus.</p>
          <ul className="process-list">
            <li>
              <div className="list-title">
                <img src="assets/images/icons/list-arrow.svg" alt="image" />
                <h3>Planning The Case</h3>
              </div>
              <p className="para">Vestibulum eget mauris dui. Proin luctus est lacus, eu lobortis orci dignissim at. Ut nec vul nisl. Mauris vel dolor augue. Praesent sit amet eros dui. Sed porta gravida mollis. In odioda maximus a finibus eget, euismod vitae tellus.</p>
            </li>
            <li>
              <div className="list-title">
                <img src="assets/images/icons/list-arrow.svg" alt="image" />
                <h3>Evaluate Situation</h3>
              </div>
              <p className="para">Vestibulum eget mauris dui. Proin luctus est lacus, eu lobortis orci dignissim at. Ut nec vul nisl. Mauris vel dolor augue. Praesent sit amet eros dui. Sed porta gravida mollis. In odioda maximus a finibus eget, euismod vitae tellus.</p>
            </li>
            <li>
              <div className="list-title">
                <img src="assets/images/icons/list-arrow.svg" alt="image" />
                <h3>File The Case To The Court</h3>
              </div>
              <p className="para">Vestibulum eget mauris dui. Proin luctus est lacus, eu lobortis orci dignissim at. Ut nec vul nisl. Mauris vel dolor augue. Praesent sit amet eros dui. Sed porta gravida mollis. In odioda maximus a finibus eget, euismod vitae tellus.</p>
            </li>
            <li>
              <div className="list-title">
                <img src="assets/images/icons/list-arrow.svg" alt="image" />
                <h3>Gather More Information</h3>
              </div>
              <p className="para">Vestibulum eget mauris dui. Proin luctus est lacus, eu lobortis orci dignissim at. Ut nec vul nisl. Mauris vel dolor augue. Praesent sit amet eros dui. Sed porta gravida mollis. In odioda maximus a finibus eget, euismod vitae tellus.</p>
            </li>
          </ul>
          <h3>03. The Result.</h3>
          <p className="para">Vestibulum eget mauris dui. Proin luctus est lacus, eu lobortis orci dignissim at. Ut nec vulputateri nisl. Mauris vel dolor augue. Praesent sit amet eros dui. Sed porta gravida mollis. In odio dolorcoul maximus a finibus eget, euismod vitae tellus.</p>
          <div className="row details-img-grp g-4">
            <div className="col-md-6">
              <img src="assets/images/bg/cs-details3.png" alt="image" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <img src="assets/images/bg/cs-details4.png" alt="image" className="img-fluid" />
            </div>
          </div>
          <p className="para mb-0">Vestibulum eget mauris dui. Proin luctus est lacus, eu lobortis orci dignissim at. Ut nec vulputateri nisl. Mauris vel dolor augue. Praesent sit amet eros dui. Sed porta gravida mollis. In odio dolorcoul
            vehicula, quis bibendum massa auctor. Suspendisse potenti. Nam vulputate diam tempus orcilagri maximus a finibus eget, euismod vitae tellus.</p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="case-sidebar-area">
          <ul className="case-info-list">
            <li>
              <span><img src="assets/images/icons/sidebar-arrow.svg" alt="image" />Client:</span>
              <h5>Argova Josen</h5>
            </li>
            <li>
              <span><img src="assets/images/icons/sidebar-arrow.svg" alt="image" />Category:</span>
              <h5>Criminal Law</h5>
            </li>
            <li>
              <span><img src="assets/images/icons/sidebar-arrow.svg" alt="image" />Time Frame:</span>
              <h5>5 Months</h5>
            </li>
            <li>
              <span><img src="assets/images/icons/sidebar-arrow.svg" alt="image" />Year:</span>
              <h5>2022</h5>
            </li>
            <li>
              <span><img src="assets/images/icons/sidebar-arrow.svg" alt="image" />Lawyer:</span>
              <h5>Jordan Morisen</h5>
            </li>
          </ul>
          <div className="casestudy-card">
            <div className="header">
              <h4>Case Study</h4>
            </div>
            <ul className="casestudy-list">
                <CaseinfoList title="Criminal Law" />
                <CaseinfoList title="Family Law" />
                <CaseinfoList title="Drug Offense" />
                <CaseinfoList title="Workplace Accident" />
                <CaseinfoList title="Realestate Law" />
                <CaseinfoList title="Education Law" />
            </ul>
            <div className="lawyer-intro-card">
              <span className="badge">Case Win</span>
              <img src="assets/images/bg/lawyer-dp.png" alt="image" className="img-fluid" />
              <div className="designation">
                <Link href="/lawyer-details"><a><h4>Jordan Morisen</h4></a></Link>
                <p>Criminal Lawyer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </Layout>
    </>
  );
}

export default CasestudyDetails;

function CaseinfoList({title}){
    return(
        <li><span><Link href="/casestudy-details"><a>{title}</a></Link></span>
                <span><svg width={18} height={15} viewBox="0 0 22 13" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9805 6.64708C21.955 6.74302 20.6834 7.78829 18.0766 9.85862C13.9311 13.156 14.0201 13.0954 13.5751 12.949C13.1809 12.8177 13.0219 12.5097 13.1809 12.1814C13.2127 12.1057 14.6369 10.9342 16.3408 9.5809L19.4309 7.11669V5.90479L16.3091 3.41534C14.23 1.75907 13.1682 0.885493 13.1427 0.789551C13.041 0.466377 13.2635 0.143203 13.6577 0.0472607C13.7595 0.0270623 13.8485 0.00181433 13.8612 0.00181433C14.0201 -0.0385824 14.8467 0.582518 18.1148 3.18306C20.6898 5.23824 21.955 6.27846 21.9805 6.36935C22.0059 6.45015 22.0059 6.57134 21.9805 6.64708Z" fill="white" />
                    <path d="M17.4313 5.90479V7.11669L2.71236 7.10659C2.27365 7.10608 1.84766 7.10558 1.43438 7.10507C1.19278 7.10507 0.954985 7.10457 0.721643 7.10457C0.320448 7.09396 0 6.83189 0 6.51074C0 6.34662 0.0839268 6.19817 0.218718 6.09061C0.349695 5.98659 0.528993 5.92044 0.728001 5.9169L1.23283 5.9164L2.706 5.91488L17.4313 5.90479Z" fill="white" />
                  </svg>
                </span>
              </li>
    )
}