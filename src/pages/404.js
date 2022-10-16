import Link from 'next/link'
import React from 'react'
import Breadcrumb from '../common/Breadcrumb'
import Layout from '../components/layout/Layout'

function Custom404() {
  return (
    <>
     <Layout>
    <Breadcrumb title="Error" pageName="Error" />
    <div className="error-section pt-120 pb-120 overflow-hidden">
  <img src="assets/images/bg/section-bg-left.png" className="section-bg-left" alt="image" />
  <img src="assets/images/bg/section-bg-right.png" className="section-bg-right" alt="image" />
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-8 col-lg-10 col-sm-10">
        <div className="error-wrap">
          <img src="assets/images/bg/404.png" alt="image" className="img-fluid" />
          <div className="content">
            <h2>Something Went Wrong</h2>
            <p className="para">Donec bibendum enim ut elit porta ullamcorper. Vestibulum Nai quam nulla, venenatis eget dapibus ac, catali topuny wekemdini iaculis vitae nulla. Morbi mattis nec mi ac mollis.</p>
            <Link href="/"><a  className="eg-btn btn--outline sibling3 btn--lg capsule btn--primary"><i className="bi bi-house-door" />&nbsp;Back to home</a></Link>
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

export default Custom404