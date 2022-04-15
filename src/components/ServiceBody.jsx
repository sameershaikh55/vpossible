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
			d: "We provide you with dedicated 24/7 maintenance and monitoring that will keep your computers, servers and systems up and running, so you don’t have have to.",
		},
		{
			i: i2i,
			bg: i2,
			t: "IT Consultancy",
			d: "Our team of IT experts will take the time to understand your business’s IT needs and provide you with professional strategic planning and tailored IT solutions that fit your budget.",
		},
		{
			i: i3i,
			bg: i3,
			t: "Cloud Services",
			d: "Never worry about buying a server again, as we provide your with the means to work remotely from anywhere in the world and have one-click access to all your crucial files and documents.",
		},
		{
			i: i4i,
			bg: i4,
			t: "Communications",
			d: "We provide diverse remote and local communication channels to help your business and it’s stakeholders to collaborate and grow without any hiccups or disruptions.",
		},
		{
			i: i5i,
			bg: i5,
			t: "Cloud & IT Infrastructure",
			d: "Finding the right infrastructure and cloud solution is key to reducing IT costs and to allow for swift scalability to meet business needs.",
		},
		{
			i: i6i,
			bg: i6,
			t: "IT Security",
			d: "With years of experience and one of the most powerful cybersecurity systems, we provide your business with a safe online environment so your don’t have to worry.",
		},
		{
			i: i7i,
			bg: i7,
			t: "Backup & Disaster Recovery",
			d: "To avoid data breaches and keep the company’s data safe at all times, we provide an all-in-one solution that helps notify you whenever a data breach occurs and manage your backups in real-time.",
		},
		{
			i: i8i,
			bg: i8,
			t: "Helpdesk & Support Services",
			d: "Our helpdesk staff are available around-the-clock to answer all of your technical questions and queries, and to provide you with useful resources to facilitate the growth of your technical knowledge.",
		},
	];

	return (
		<div id="services" className="service_body_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 mx-auto px-3">
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
