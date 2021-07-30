import React from "react";

// IMPORTS
import Footer from "../components/Footer";
import Header from "../components/Header";
import ServiceBanner from "../components/ServiceBanner";
import ServiceBody from "../components/ServiceBody";
import StartedHome from "../components/StartedHome";

const Services = () => {
	return (
		<div>
			<Header />
			<ServiceBanner />
			<ServiceBody />
			<StartedHome />
			<Footer />
		</div>
	);
};

export default Services;
