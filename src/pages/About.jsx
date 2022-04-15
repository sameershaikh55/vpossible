import React from "react";
import AboutBanner from "../components/AboutBanner";
import AboutBody from "../components/AboutBody";
import Layout from "../Layout";

const About = () => {
	return (
		<Layout>
			<AboutBanner />
			<AboutBody />
		</Layout>
	);
};

export default About;
