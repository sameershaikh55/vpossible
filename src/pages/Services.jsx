import React from "react";

// IMPORTS
import ServiceBanner from "../components/ServiceBanner";
import ServiceBody from "../components/ServiceBody";
import StartedHome from "../components/StartedHome";
import Layout from "../Layout";

const Services = () => {
	return (
		<Layout>
			<ServiceBanner />
			<ServiceBody />
			<StartedHome />
		</Layout>
	);
};

export default Services;
