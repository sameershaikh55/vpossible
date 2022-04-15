import React from "react";
import i1 from "../assets/gaurantee/i1.svg";
import i2 from "../assets/gaurantee/i2.svg";

const AboutBody = () => {
	return (
		<div className="about_body_container">
			<div className="page_container">
				<div className="container-fluid px-3 px-sm-4">
					<div className="row">
						<div className="col-12 col-lg-8 pe-lg-4">
							<h2 className="f24 fw-bold mb-3 textColor3">Our Mission</h2>

							<p className="textColor f14">
								With a passion for building durable and reliable IT solutions
								and to strengthen Australian businesses against any
								cyber-threats, our team has worked tirelessly to cultivate
								healthy working relationships with our clients and credibility
								for our business. Our solutions and services extend from the
								desktop to the cloud, and our client base spans a wide range of
								industries, from manufacturing to financial services, through to
								hospitality and non-for-profits.
							</p>

							<p className="textColor f14 mb-0">
								Our team of industry specialists works together to provide
								outstanding solutions to complex technology problems, in
								addition to taking ownership of our clients IT challenges by
								leveraging technologies to improve business performance, align
								strategy, and drive their business objectives. With technical
								expertise, experience and infrastructure, vPossible are the
								ideal technology partner for organisations looking for a
								professional IT services partner that will enable them to free
								up capital expenditure and focus on their core business –
								knowing their IT is aligned with the business’s needs, tailored
								for their objectives and underpinned by a team of industry
								experts.
							</p>
						</div>
						<div className="col-12 col-lg-4 border_right">
							<h2 className="f24 fw-bold mb-3">Our Guarantee</h2>

							<div className="d-flex flex-column flex-sm-row flex-md-column gap-4 gap-sm-5 gap-lg-4 align-items-start">
								<div>
									<img src={i1} alt="" />
									<h5 className="f500 f14 my-2 textColor3">
										Prompt and Professional Service
									</h5>
									<p className="f14 textColor mb-0">
										We guarantee around-the clock technical support to service
										you in times of unprecedented issues and difficuties to
										ensure your business remains online.
									</p>
								</div>

								<div>
									<img src={i2} alt="" />
									<h5 className="f500 f14 my-2 textColor3">
										Business Planning Assistance
									</h5>
									<p className="f14 textColor">
										We go further than just setting-up an immediate IT
										infrastructure, our business consultants will provide
										assistance with IT budgeting and future planning.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutBody;
