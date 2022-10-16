import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import Layout from "../components/layout/Layout";

function Faq() {
  return (
    <>
      <Layout>
        <Breadcrumb title="FAQ" pageName="FAQ"/>
        <div className="faq-section pt-120 pb-120">
  <div className="container">
    <div className="row gy-5">
      <div className="col-lg-4 order-lg-1 order-2">
        <div className="nav flex-column nav-pills gap-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className="nav-link active nav-btn-style mx-auto  mb-20" id="v-pills-dashboard-tab" data-bs-toggle="pill" data-bs-target="#v-pills-dashboard" type="button" role="tab" aria-controls="v-pills-dashboard" aria-selected="true">Basic</button>
          <button className="nav-link nav-btn-style mx-auto mb-20" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="true"><i className="lar la-user" />Lawyers</button>
          <button className="nav-link nav-btn-style mx-auto mb-20" id="v-pills-order-tab" data-bs-toggle="pill" data-bs-target="#v-pills-order" type="button" role="tab" aria-controls="v-pills-order" aria-selected="true">Benifit</button>
          <button className="nav-link nav-btn-style mx-auto" id="v-pills-purchase-tab" data-bs-toggle="pill" data-bs-target="#v-pills-purchase" type="button" role="tab" aria-controls="v-pills-purchase" aria-selected="true">Helth Care</button>
          <button className="nav-link nav-btn-style mx-auto" id="v-pills-fees-tab" data-bs-toggle="pill" data-bs-target="#v-pills-fees" type="button" role="tab" aria-controls="v-pills-fees" aria-selected="true">Fees</button>
        </div>
        <div className="faq-sidebar">
          <form className="faq-form">
            <span className="faq-form-title">Any Question</span>
            <div className="form-inner">
              <input type="text" placeholder="Your Name :" />
            </div>
            <div className="form-inner">
              <input type="email" placeholder="Your Email :" />
            </div>
            <div className="form-inner">
              <input type="text" placeholder="Subject :" />
            </div>
            <div className="form-inner">
              <textarea name="msg" rows={3} placeholder="Write Message :" defaultValue={""} />
            </div>
            <button type="submit" className="eg-btn btn--primary2 btn--md rounded-1 w-100">Send Now</button>
          </form>
        </div>
      </div>
      <div className="col-lg-8 order-lg-2 order-1">
        <div className="tab-content" id="v-pills-tabContent">
          <div className="tab-pane fade show active" id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashboard-tab">
            <div className="faq-title">
              <h2>Basic</h2>
              <p className="para">
                Donec bibendum enim ut elit porta ullamcorper. Vestibulum Nai quam nulla, venenatis eget dapibus ac, catali topuny wekemdini iaculis vitae nulla. Morbi mattis nec mi ac mollis. 
              </p>
            </div>
            <div className="faq-wrap wow fadeInRight" data-wow-duration="1.5s" data-wow-delay=".2s">
              <div className="faq-item hover-btn"><span />
                <h5 id="heading1" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-controls="collapse1">
                  01. Curious about how to build your own UX strategy? Here are.
                </h5>
                <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
              <div className="faq-item hover-btn"><span />
                <h5 id="heading2" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-controls="collapse2">
                  02. Where Could a Career in UX Take You? Agency vs. In-House vs?
                </h5>
                <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
              <div className="faq-item hover-btn"><span />
                <h5 id="heading3" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-controls="collapse3">
                  03. What Is a Problem Statement in UX? (And How To Write One?
                </h5>
                <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
              <div className="faq-item hover-btn"><span />
                <h5 id="heading4" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-controls="collapse4">
                  04. There are several techniques UX designers employ to arrive at a?
                </h5>
                <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
              <div className="faq-item hover-btn"><span />
                <h5 id="heading5" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-controls="collapse5">
                  05. What are the obstacles users are facing? What are they trying to?
                </h5>
                <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
              <div className="faq-item hover-btn"><span />
                <h5 id="heading6" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-controls="collapse6">
                  06. Why is this important? Why will users benefit from solving this?
                </h5>
                <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
              <div className="faq-item hover-btn"><span />
                <h5 id="heading7" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-controls="collapse7">
                  07. Why is this important? Why will users benefit from solving this?
                </h5>
                <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
              <div className="faq-item hover-btn"><span />
                <h5 id="heading8" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-controls="collapse8">
                  08. Why is this important? Why will users benefit from solving this?
                </h5>
                <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
            <div className="faq-title">
              <h2>Lawyers</h2>
              <p className="para">
                Donec bibendum enim ut elit porta ullamcorper. Vestibulum Nai quam nulla, venenatis eget dapibus ac, catali topuny wekemdini iaculis vitae nulla. Morbi mattis nec mi ac mollis. 
              </p>
            </div>
            <div className="faq-wrap wow fadeInRight" data-wow-duration="1.5s" data-wow-delay=".2s">
              <div className="faq-item hover-btn"><span />
                <h5 id="heading9" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-controls="collapse9">
                  01. Curious about how to build your own UX strategy? Here are.
                </h5>
                <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
              <div className="faq-item hover-btn"><span />
                <h5 id="heading10" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-controls="collapse10">
                  02. Where Could a Career in UX Take You? Agency vs. In-House vs?
                </h5>
                <div id="collapse10" className="accordion-collapse collapse" aria-labelledby="heading10">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
              <div className="faq-item hover-btn"><span />
                <h5 id="heading11" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-controls="collapse11">
                  03. What Is a Problem Statement in UX? (And How To Write One?
                </h5>
                <div id="collapse11" className="accordion-collapse collapse" aria-labelledby="heading11">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
              <div className="faq-item hover-btn"><span />
                <h5 id="heading12" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-controls="collapse12">
                  04. There are several techniques UX designers employ to arrive at a?
                </h5>
                <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
              <div className="faq-item hover-btn"><span />
                <h5 id="heading13" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-controls="collapse13">
                  05. What are the obstacles users are facing? What are they trying to?
                </h5>
                <div id="collapse13" className="accordion-collapse collapse" aria-labelledby="heading13">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="v-pills-order" role="tabpanel" aria-labelledby="v-pills-order-tab">
            <div className="faq-title">
              <h2>Benifit</h2>
              <p className="para">
                Donec bibendum enim ut elit porta ullamcorper. Vestibulum Nai quam nulla, venenatis eget dapibus ac, catali topuny wekemdini iaculis vitae nulla. Morbi mattis nec mi ac mollis. 
              </p>
            </div>
            <div className="faq-wrap wow fadeInRight" data-wow-duration="1.5s" data-wow-delay=".2s">
              <div className="faq-item hover-btn"><span />
                <h5 id="heading14" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-controls="collapse14">
                  01. Curious about how to build your own UX strategy? Here are.
                </h5>
                <div id="collapse14" className="accordion-collapse collapse" aria-labelledby="heading14">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
              <div className="faq-item hover-btn"><span />
                <h5 id="heading15" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-controls="collapse15">
                  02. Where Could a Career in UX Take You? Agency vs. In-House vs?
                </h5>
                <div id="collapse15" className="accordion-collapse collapse" aria-labelledby="heading15">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
              <div className="faq-item hover-btn"><span />
                <h5 id="heading16" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse16" aria-controls="collapse16">
                  03. What Is a Problem Statement in UX? (And How To Write One?
                </h5>
                <div id="collapse16" className="accordion-collapse collapse" aria-labelledby="heading16">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
              <div className="faq-item hover-btn"><span />
                <h5 id="heading17" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse17" aria-controls="collapse17">
                  04. There are several techniques UX designers employ to arrive at a?
                </h5>
                <div id="collapse17" className="accordion-collapse collapse" aria-labelledby="heading17">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
              <div className="faq-item hover-btn"><span />
                <h5 id="heading18" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse18" aria-controls="collapse18">
                  05. What are the obstacles users are facing? What are they trying to?
                </h5>
                <div id="collapse18" className="accordion-collapse collapse" aria-labelledby="heading18">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
              <div className="faq-item hover-btn"><span />
                <h5 id="heading19" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse19" aria-controls="collapse19">
                  06. Why is this important? Why will users benefit from solving this?
                </h5>
                <div id="collapse19" className="accordion-collapse collapse" aria-labelledby="heading19">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="v-pills-purchase" role="tabpanel" aria-labelledby="v-pills-purchase-tab">
            <div className="faq-title">
              <h2>Helth Care</h2>
              <p className="para">
                Donec bibendum enim ut elit porta ullamcorper. Vestibulum Nai quam nulla, venenatis eget dapibus ac, catali topuny wekemdini iaculis vitae nulla. Morbi mattis nec mi ac mollis. 
              </p>
            </div>
            <div className="faq-wrap wow fadeInRight" data-wow-duration="1.5s" data-wow-delay=".2s">
              <div className="faq-item hover-btn"><span />
                <h5 id="heading20" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse20" aria-controls="collapse20">
                  01. Curious about how to build your own UX strategy? Here are.
                </h5>
                <div id="collapse20" className="accordion-collapse collapse" aria-labelledby="heading20">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
              <div className="faq-item hover-btn"><span />
                <h5 id="heading21" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse21" aria-controls="collapse21">
                  02. Where Could a Career in UX Take You? Agency vs. In-House vs?
                </h5>
                <div id="collapse21" className="accordion-collapse collapse" aria-labelledby="heading21">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
              <div className="faq-item hover-btn"><span />
                <h5 id="heading22" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse22" aria-controls="collapse22">
                  03. What Is a Problem Statement in UX? (And How To Write One?
                </h5>
                <div id="collapse22" className="accordion-collapse collapse" aria-labelledby="heading22">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
              <div className="faq-item hover-btn"><span />
                <h5 id="heading23" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse23" aria-controls="collapse23">
                  04. Why is this important? Why will users benefit from solving this?
                </h5>
                <div id="collapse23" className="accordion-collapse collapse" aria-labelledby="heading23">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="v-pills-fees" role="tabpanel" aria-labelledby="v-pills-fees-tab">
            <div className="faq-title">
              <h2>Fees</h2>
              <p className="para">
                Donec bibendum enim ut elit porta ullamcorper. Vestibulum Nai quam nulla, venenatis eget dapibus ac, catali topuny wekemdini iaculis vitae nulla. Morbi mattis nec mi ac mollis. 
              </p>
            </div>
            <div className="faq-wrap wow fadeInRight" data-wow-duration="1.5s" data-wow-delay=".2s">
              <div className="faq-item hover-btn"><span />
                <h5 id="heading24" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse24" aria-controls="collapse24">
                  01. Curious about how to build your own UX strategy? Here are.
                </h5>
                <div id="collapse24" className="accordion-collapse collapse" aria-labelledby="heading24">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
              <div className="faq-item hover-btn"><span />
                <h5 id="heading25" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse25" aria-controls="collapse25">
                  02. Where Could a Career in UX Take You? Agency vs. In-House vs?
                </h5>
                <div id="collapse25" className="accordion-collapse collapse" aria-labelledby="heading25">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
              <div className="faq-item hover-btn"><span />
                <h5 id="heading26" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse26" aria-controls="collapse26">
                  03. What Is a Problem Statement in UX? (And How To Write One?
                </h5>
                <div id="collapse26" className="accordion-collapse collapse" aria-labelledby="heading26">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
              <div className="faq-item hover-btn"><span />
                <h5 id="heading27" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse27" aria-controls="collapse27">
                  04. There are several techniques UX designers employ to arrive at a?
                </h5>
                <div id="collapse27" className="accordion-collapse collapse" aria-labelledby="heading27">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
              <div className="faq-item hover-btn"><span />
                <h5 id="heading28" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse28" aria-controls="collapse28">
                  05. What are the obstacles users are facing? What are they trying to?
                </h5>
                <div id="collapse28" className="accordion-collapse collapse" aria-labelledby="heading28">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
              <div className="faq-item hover-btn"><span />
                <h5 id="heading29" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse29" aria-controls="collapse29">
                  06. Why is this important? Why will users benefit from solving this?
                </h5>
                <div id="collapse29" className="accordion-collapse collapse" aria-labelledby="heading29">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
              </div>
              <div className="faq-item hover-btn"><span />
                <h5 id="heading30" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse30" aria-controls="collapse30">
                  07. Why is this important? Why will users benefit from solving this?
                </h5>
                <div id="collapse30" className="accordion-collapse collapse" aria-labelledby="heading30">
                  <div className="faq-body">
                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus 
                    himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec laciniai 
                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul 
                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                  </div>
                </div>
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

export default Faq;
