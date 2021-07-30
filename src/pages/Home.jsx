import React from "react";

// IMPORTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ThreeCards from "../components/ThreeCards";

const Home = () => {
	return (
		<>
			<Header />
			<Hero />
			<ThreeCards />
			<Services />
		</>
	);
};

export default Home;
