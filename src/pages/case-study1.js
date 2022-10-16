import React from 'react'
import Breadcrumb from '../common/Breadcrumb'
import CaseStudyArea1 from '../components/caseStudy/CaseStudyArea1'
import Layout from '../components/layout/Layout'

function CaseStudy1() {
  return (
    <>
     <Layout>
        <Breadcrumb title="Case Study 01" pageName="Case Study 01"/>
        <CaseStudyArea1/>



    </Layout>   
    </>
  )
}

export default CaseStudy1