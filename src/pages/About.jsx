import React from "react";
import AboutBanner from "../components/AboutBanner";
import AboutBody from "../components/AboutBody";
import Seo from "../components/Seo";
import Layout from "../Layout";

const About = () => {
  return (
    <Layout>
      <Seo
        title="About Us - vPossible.au"
        description="About Us – vPossible is the premier IT services company in Australia. We provide the best services for businesses, companies and organisations."
        canonical="https://www.vpossible.com.au/about"
        robot="https://www.vpossible.com.au/about"
      />

      <AboutBanner />
      <AboutBody />
    </Layout>
  );
};

export default About;
