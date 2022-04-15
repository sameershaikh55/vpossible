import React, { useState } from "react";

// IMPORTS
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactBody from "../components/ContactBody";
import CommonBanner from "../components/CommonBanner";
import TechnicalAssistance from "../components/TechnicalAssistance";
import Sidebar from "../components/Sidebar";

const Contact = () => {
	const [isOpen, setIsOpen] = useState(false);

	const OnClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<Header ClickEvent={OnClick} isOpen={isOpen} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			<CommonBanner
				banner={{
					mainClass: "contact_banner_Container",
					aboveTitle: "Contact",
					title: "Get In-Touch",
					belowTitle:
						"<p class='mb-0'>Write to us for sales or public relations enquiries, or to provide feedback. <br class='d-none d-md-block' /> For any technical assistance, please visit our <a href='/support' class='text-decoration-none themeBlue'>Support</a> page.</p>",
				}}
			/>

			<ContactBody />
			<TechnicalAssistance />
			<Footer contact />
		</div>
	);
};

export default Contact;
