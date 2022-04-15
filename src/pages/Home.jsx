import React from "react";

// IMPORTS
import Hero from "../components/Hero";
import Services from "../components/Services";
import StartedHome from "../components/StartedHome";
import StackUpTable from "../components/StackUpTable";
import Layout from "../Layout";

const Home = () => {
	return (
		<Layout>
			<Hero />
			<Services />
			<StackUpTable />
			<StartedHome />
		</Layout>
	);
};

export default Home;
