import Link from "next/link";
import React from "react";

function ContactForm() {

  return (
    <>
      <form className="contact-form">
        <div className="row">
          <div className="col-lg-6">
            <div className="form-inner">
              <input type="text" placeholder="Enter your name" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-inner">
              <input type="text" placeholder="Subject" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-inner">
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-inner">
              <input type="text" placeholder="Enter your Phone" />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-inner">
              <textarea rows={5} placeholder="Your message" defaultValue={""} />
            </div>
          </div>
          <div className="col-lg-12 text-lg-start text-center">
            <Link href="/contact" >
              <a className="eg-btn btn--dark btn--lg"><i className="bi bi-dash-lg" />
              Contact Now</a>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
