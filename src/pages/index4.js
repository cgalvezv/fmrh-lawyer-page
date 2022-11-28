import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Footer from '../common/Footer'
import Preloader from '../common/Preloader'
import About4 from '../components/about/About4'
import Banner4 from '../components/banner/Banner4'
import Contact3 from '../components/contact/Contact3'
import Header4 from '../components/header/Header4'
import Practice4 from '../components/practice/Practice4'
import Scheduler from "../components/scheduler/Scheduler";

function Index4() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
      <>
      {loading ? (
        <Preloader style="home2preloader" />
      ) : (
        <>
          <Head>
            <title>FABIA ROJAS - ABOGADA</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="assets/images/icons/fr-logo.png" />
          </Head>
          <Header4/>
          <Banner4/>
          <Practice4/>
          <About4/>
          <Scheduler/>
          {/*<History4/>
          <CaseStidy4/>*/}
          {/*<Attrony4/>*/}
          <Contact3/>
          {/*<Testimonial4/>
          <Blog4/>*/}
          <Footer/>
        </>
      )}
    </>
  )
}

export default Index4
