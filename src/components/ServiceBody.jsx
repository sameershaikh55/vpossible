import React from "react";

import s1 from "../assets/serviceImg/s1.svg";
import s2 from "../assets/serviceImg/s2.svg";
import s3 from "../assets/serviceImg/s3.svg";
import s4 from "../assets/serviceImg/s4.svg";
import s5 from "../assets/serviceImg/s5.svg";
import s6 from "../assets/serviceImg/s6.svg";
import s7 from "../assets/serviceImg/s7.svg";
import s8 from "../assets/serviceImg/s8.svg";

const ServiceBody = () => {
	const data = [
		{
			i: s1,
			t: "Managed IT Services",
			d: "24/7 maintenance and monitoring that keeps your computers, servers, and systems up and running.",
		},
		{
			i: s2,
			t: "IT Consultancy",
			d: "Our professionals are expert to demonstrate the best IT consultancy in Australlia.",
		},
		{
			i: s3,
			t: "Communications",
			d: "We provide effective communication, and try to understand the emotion and intention behind every information.",
		},
		{
			i: s4,
			t: "Cloud Services",
			d: "We help you to work anywhere from the world for 24/7. Never worry about buying a server gain.",
		},
		{
			i: s5,
			t: "Cloud & IT Infrastructure",
			d: "Finding right infrastructure and the cloud solution is important so that it will reduce the IT cost and scale infrastructure quickly to meet.",
		},
		{
			i: s6,
			t: "IT Security",
			d: "Our experience and the powerful cybersecurity system provide you and your team to work in a safe online environment.",
		},
		{
			i: s7,
			t: "Backup & Disaster Recovery",
			d: "Keeping your company’s data safe is important and critical as there is a notifiable data breaches occurs in the business world.",
		},
		{
			i: s8,
			t: "Helpdesk & Support Services",
			d: "Helpdesk is a department in the organization that is responsible for answering all technical questions of the user.",
		},
	];

	return (
		<div className="service_body_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-8 col-lg-12 mx-auto">
							<div className="row">
								{data.map((p, ind) => {
									const { i, t, d } = p;
									return (
										<div key={ind} className="col-12 col-md-6 col-lg-4 mt-4">
											<div>
												<div className="mb-3">
													<img src={i} alt="" />
												</div>
												<div>
													<h5 className="text-white f14">{t}</h5>
													<p className="textColor2">{d}</p>
												</div>
											</div>
										</div>
									);
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
