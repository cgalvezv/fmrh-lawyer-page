import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import AboutBlog from "../components/blog/AboutBlog";
import AboutContactArea from "../components/contact/AboutContactArea";
import Layout from "../components/layout/Layout";
import Counter2 from "../counter/Counter";

function About() {
  return (
    <>
      <Layout>
        <Breadcrumb title="About Us" pageName="About Us" />
        <Counter2 />
        <AboutContactArea />
        <AboutBlog />
      </Layout>
    </>
  );
}

export default About;
