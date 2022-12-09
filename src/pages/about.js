import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import About1 from "../components/about/About1";
import About2 from "../components/about/About2";
import AttronySection from "../components/Attrony/AttronySection";
import AboutBlog from "../components/blog/AboutBlog";
import AboutContactArea from "../components/contact/AboutContactArea";
import Layout from "../components/layout/Layout";
import Counter2 from "../counter/Counter";

function About() {
  return (
    <>
      <Layout>
        <Breadcrumb title="About Us" pageName="About Us" />
        <About1 />
        <Counter2 />
        <About2 />
        <AboutContactArea />
        <AttronySection />
        <AboutBlog />
      </Layout>
    </>
  );
}

export default About;
