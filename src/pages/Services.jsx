import React from "react";

// IMPORTS
import ServiceBanner from "../components/ServiceBanner";
import ServiceBody from "../components/ServiceBody";
import StartedHome from "../components/StartedHome";
import Seo from "../components/Seo";
import Layout from "../Layout";

const Services = () => {
  return (
    <Layout>
      <Seo
        title="IT Services in Australia: We provide at vPossible.au"
        description="Get the best IT service solutions in Australia. To help your IT systems maintain optimum business performance."
        canonical="https://www.vpossible.com.au/service"
        robot="https://www.vpossible.com.au/service"
      />

      <ServiceBanner />
      <ServiceBody />
      <StartedHome />
    </Layout>
  );
};

export default Services;
