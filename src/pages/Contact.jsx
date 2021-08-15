import React from "react";

// IMPORTING MAIL-CHIMP
import MailchimpSubscribe from "react-mailchimp-subscribe";

// IMPORTS
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactBody from "../components/ContactBody";

// API URL TO POST
const url =
	"https://gmail.us5.list-manage.com/subscribe/post?u=9a54d0faf94bd2b2f9f78e651&amp;id=e1ead42f0e";

const Contact = () => {
	return (
		<div>
			<Header />

			{/* MAIL CHIMP START */}
			<MailchimpSubscribe
				url={url}
				render={({ subscribe, status, message }) => (
					<div>
						<ContactBody
							onSubmitted={(formData) => subscribe(formData)}
							status={status}
							message={message}
						/>
					</div>
				)}
			/>
			{/* MAIL CHIMP END */}

			<Footer />
		</div>
	);
};

export default Contact;
