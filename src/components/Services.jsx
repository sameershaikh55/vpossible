import React from "react";

// IMPORTS
import service from "../assets/service.svg";
import { FiArrowRight } from "react-icons/fi";
import { GoCheck } from "react-icons/go";

const Services = () => {
	return (
		<div className="services_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row">
								<div className="col-md-5 col-lg-4">
									<img className="w-100" src={service} alt="" />
								</div>
								<div className="mt-5 mt-md-0 col-md-7 offset-lg-1">
									<p className="themeBlue text-uppercase f14 f600 mb-2">
										Services
									</p>
									<h1 className="text-white">
										Protect your IT network again any disaster
									</h1>
									<p className="textColor2 f14">
										vPossible is a company offering high-quality IT support and
										services across Australia. With full-services in IT, we also
										provide the maintenance service to fit the needs of your
										business, home, or Company.
									</p>

									<div className="row mt-4 mb-1">
										<ul className="col-md-6 list-unstyled">
											<li className="text-white f14 mb-2">
												<GoCheck
													color="#12D28D"
													fontSize="1.1rem"
													className="me-1"
												/>{" "}
												Managed IT Services
											</li>
											<li className="text-white f14 mb-2">
												<GoCheck
													color="#12D28D"
													fontSize="1.1rem"
													className="me-1"
												/>{" "}
												Cloud Services
											</li>
											<li className="text-white f14 mb-2">
												<GoCheck
													color="#12D28D"
													fontSize="1.1rem"
													className="me-1"
												/>{" "}
												Cloud & IT Infrastructure
											</li>
											<li className="text-white f14 mb-2">
												<GoCheck
													color="#12D28D"
													fontSize="1.1rem"
													className="me-1"
												/>{" "}
												Backup & Disaster Recovery
											</li>
										</ul>
										<ul className="col-md-6 list-unstyled">
											<li className="text-white f14 mb-2">
												<GoCheck
													color="#12D28D"
													fontSize="1.1rem"
													className="me-1"
												/>{" "}
												IT Consultancy
											</li>
											<li className="text-white f14 mb-2">
												<GoCheck
													color="#12D28D"
													fontSize="1.1rem"
													className="me-1"
												/>{" "}
												Communications
											</li>
											<li className="text-white f14 mb-2">
												<GoCheck
													color="#12D28D"
													fontSize="1.1rem"
													className="me-1"
												/>{" "}
												IT Security
											</li>
											<li className="text-white f14 mb-2">
												<GoCheck
													color="#12D28D"
													fontSize="1.1rem"
													className="me-1"
												/>{" "}
												Helpdesk & Support Services
											</li>
										</ul>
									</div>
									<div className="mt-4 mt-md-0">
										<button className="textColor2 f14">
											Learn More <FiArrowRight color="#9CA3AF" />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
