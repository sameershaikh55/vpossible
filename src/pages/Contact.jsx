import React from "react";

// IMPORTS
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactBody from "../components/ContactBody";
import CommonBanner from "../components/CommonBanner";
import TechnicalAssistance from "../components/TechnicalAssistance";

const Contact = () => {
	return (
		<div>
			<Header />
			<CommonBanner
				banner={{
					mainClass: "contact_banner_Container",
					aboveTitle: "Contact",
					title: "Get In-Touch",
					belowTitle:
						"<p class='mb-0'>Write to us for sales or public relations enquiries, or to provide feedback. <br /> For any technical assistance, please visit our <a href='/support' class='text-decoration-none themeBlue'>Support</a> page.</p>",
				}}
			/>

			<ContactBody />
			<TechnicalAssistance />
			<Footer contact />
		</div>
	);
};

export default Contact;
