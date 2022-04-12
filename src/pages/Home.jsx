import React from "react";

// IMPORTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";
import StartedHome from "../components/StartedHome";
import StackUpTable from "../components/StackUpTable";

const Home = () => {
	return (
		<>
			<Header />
			<Hero />
			<Services />
			<StackUpTable />
			<StartedHome />
			<Footer />
		</>
	);
};

export default Home;
