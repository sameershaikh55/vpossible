import React from "react";

// IMPORTS
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactBody from "../components/ContactBody";

const Contact = () => {
	return (
		<div>
			<Header />
			<ContactBody />

			<div className="position-absolute bottom-0 w-100 left-0 d-none d-md-block">
				<Footer />
			</div>
			<div className="d-block d-md-none">
				<Footer />
			</div>
		</div>
	);
};

export default Contact;
