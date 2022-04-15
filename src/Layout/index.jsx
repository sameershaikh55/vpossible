import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const OnClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Header ClickEvent={OnClick} isOpen={isOpen} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
