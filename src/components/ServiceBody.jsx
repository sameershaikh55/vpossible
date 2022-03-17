import React from "react";

// IMPORTING IMAGES
import i1i from "../assets/serviceBody/i1.svg";
import i2i from "../assets/serviceBody/i2.svg";
import i3i from "../assets/serviceBody/i3.svg";
import i4i from "../assets/serviceBody/i4.svg";
import i5i from "../assets/serviceBody/i5.svg";
import i6i from "../assets/serviceBody/i6.svg";
import i7i from "../assets/serviceBody/i7.svg";
import i8i from "../assets/serviceBody/i8.svg";

// IMPORTING IMAGES
import i1 from "../assets/serviceBodyBanner/i1.svg";
import i2 from "../assets/serviceBodyBanner/i2.svg";
import i3 from "../assets/serviceBodyBanner/i3.svg";
import i4 from "../assets/serviceBodyBanner/i4.svg";
import i5 from "../assets/serviceBodyBanner/i5.svg";
import i6 from "../assets/serviceBodyBanner/i6.svg";
import i7 from "../assets/serviceBodyBanner/i7.svg";
import i8 from "../assets/serviceBodyBanner/i8.svg";

// SERVICE CARD 2
import ServiceCard2 from "./ServiceCard2";

const ServiceBody = () => {
	const data = [
		{
			i: i1i,
			bg: i1,
			t: "Managed IT Services",
			d: "24/7 maintenance and monitoring that keeps your computers, servers, and systems up and running. Competitive completely the sofa matters was occupied was harmonic the they'd more the sad. And been or me apparent if hard came them out all the afloat, blind rationalize stuffed back motivator, poured the was led economic to however, quite height even people or wanted were text more, options however be embarrassed rain of first least, any emphasis objects these.",
		},
		{
			i: i2i,
			bg: i2,
			t: "IT Consultancy",
			d: "Our professionals are expert to demonstrate the best IT consultancy in Australia. Competitive completely the sofa matters was occupied was harmonic the they'd more the sad. And been or me apparent if hard came them out all the afloat, blind rationalize stuffed back motivator, poured the was led economic to however, quite height even people or wanted were text more, options however be embarrassed rain of first least, any emphasis objects these.",
		},
		{
			i: i3i,
			bg: i3,
			t: "Communications",
			d: "We help you to work anywhere from the world for 24/7. Never worry about buying a server gain. Competitive completely the sofa matters was occupied was harmonic the they'd more the sad. And been or me apparent if hard came them out all the afloat, blind rationalize stuffed back motivator, poured the was led economic to however, quite height even people or wanted were text more, options however be embarrassed rain of first least, any emphasis objects these.",
		},
		{
			i: i4i,
			bg: i4,
			t: "Cloud Services",
			d: "We provide effective communication,and try to understand the emotion and intention behind every information. Competitive completely the sofa matters was occupied was harmonic the they'd more the sad. And been or me apparent if hard came them out all the afloat, blind rationalize stuffed back motivator, poured the was led economic to however, quite height even people or wanted were text more, options however be embarrassed rain of first least, any emphasis objects these.",
		},
		{
			i: i5i,
			bg: i5,
			t: "Cloud & IT Infrastructure",
			d: "Finding the right infrastructure and cloud solution is key to reducing IT costs and to allow for swift scalability to meet business needs. Competitive completely the sofa matters was occupied was harmonic the they'd more the sad. And been or me apparent if hard came them out all the afloat, blind rationalize stuffed back motivator, poured the was led economic to however, quite height even people or wanted were text more.",
		},
		{
			i: i6i,
			bg: i6,
			t: "IT Security",
			d: "Our experience and the powerful cybersecurity system provide you and your team to work in a safe online environment. Competitive completely the sofa matters was occupied was harmonic the they'd more the sad. And been or me apparent if hard came them out all the afloat, blind rationalize stuffed back motivator, poured the was led economic to however, quite height even people or wanted were text more, options however be embarrassed rain of first least.",
		},
		{
			i: i7i,
			bg: i7,
			t: "Backup & Disaster Recovery",
			d: "Keeping your company’s data safe is important and critical as there is a notifiable data breaches occurs in the business world. Competitive completely the sofa matters was occupied was harmonic the they'd more the sad. And been or me apparent if hard came them out all the afloat, blind rationalize stuffed back motivator, poured the was led economic to however, quite height even people or wanted were text more, options however be embarrassed rain of first least.",
		},
		{
			i: i8i,
			bg: i8,
			t: "Helpdesk & Support Services",
			d: "Helpdesk is a department in the organization that is responsible for answering all technical questions of the user. Competitive completely the sofa matters was occupied was harmonic the they'd more the sad. And been or me apparent if hard came them out all the afloat, blind rationalize stuffed back motivator, poured the was led economic to however, quite height even people or wanted were text more, options however be embarrassed rain of first least.",
		},
	];

	return (
		<div id="services" className="service_body_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-10 col-lg-12 mx-auto">
							<div className="row gy-4">
								{data.map((item, i) => {
									return <ServiceCard2 item={item} i={i} />;
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceBody;
