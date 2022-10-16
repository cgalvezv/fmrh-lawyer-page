import React from "react";
import Link from "next/link";
function Breadcrumb(props) {
  return (
    <>
      <div className="breadcrumb-section">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center text-center">
            <div className="col-lg-6">
              <h2
                className="breadcrumb-title wow fadeInLeft"
                data-wow-duration="1.5s"
                data-wow-delay=".2s"
              >
                {props.title}
              </h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb d-flex justify-content-center">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {props.pageName}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Breadcrumb;
