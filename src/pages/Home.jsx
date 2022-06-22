import React from "react";

// IMPORTS
import Hero from "../components/Hero";
import Services from "../components/Services";
import StartedHome from "../components/StartedHome";
import StackUpTable from "../components/StackUpTable";
import Seo from "../components/Seo";
import Layout from "../Layout";

const Home = () => {
  return (
    <Layout>
      <Seo
        title="Leading IT Solutions Company | IT Support Services in Australia"
        description="vPossible is a leading IT solutions company in Australia. We offer and managed IT support services, IT consulting services for your home, business or company."
        canonical="https://www.vpossible.com.au/"
        robot="https://www.vpossible.com.au/"
      />

      <Hero />
      <Services />
      <StackUpTable />
      <StartedHome />
    </Layout>
  );
};

export default Home;
