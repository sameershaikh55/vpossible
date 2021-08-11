import React from "react";

// IMPORTS
import service1 from "../assets/service1.svg";
import service2 from "../assets/service2.svg";
import serviceRes from "../assets/serviceRes.svg";
import tabletService from "../assets/tabletService.svg";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-scroll";

const ServiceBanner = () => {
	return (
		<>
			<div className="serviceBanner_container">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-11 col-md-10 col-lg-12 mx-auto">
								<div className="innerServiceContainer">
									<div className="cont d-none d-lg-block">
										<img className="w-100" src={service1} alt="" />
									</div>
									<div className="cont">
										<h6 className="text-uppercase textColor2 f600 text-center f14 mb-2">
											Services
										</h6>
										<h1 className="text-center f800">
											<span className="themeBlue">Protect your IT network</span>{" "}
											<span className="text-white">again any disaster</span>
										</h1>
										<p className="textColor2 text-center">
											Maintaining a secure and stable IT network is now as
											important as ever for your business. With our wide range
											of IT services, we’re confident that you’ll find something
											to fits your needs.
										</p>
										<div className="text-center d-none d-lg-block mt-4">
											<Link
												to="services"
												smooth={true}
												duration={600}
												spy={true}
												offset={-90}
											>
												<IoIosArrowDown className="pointer themeBlue h5" />
											</Link>
										</div>
									</div>
									<div className="cont d-none d-lg-block">
										<img className="w-100" src={service2} alt="" />
									</div>
								</div>
							</div>
							<div className="col-12 mx-auto d-none d-sm-flex d-lg-none">
								<img className="w-100" src={tabletService} alt="" />
							</div>
							<div className="text-center d-none d-md-block d-lg-none">
								<Link
									to="services"
									smooth={true}
									duration={600}
									spy={true}
									offset={-90}
								>
									<IoIosArrowDown className="pointer themeBlue h5" />
								</Link>
							</div>
						</div>
					</div>

					<div className="responsive_image d-block d-sm-none">
						<img className="w-100" src={serviceRes} alt="" />
					</div>
					<div className="text-center d-block d-sm-none mt-4">
						<Link
							to="services"
							smooth={true}
							duration={600}
							spy={true}
							offset={-90}
						>
							<IoIosArrowDown className="pointer themeBlue h2" />
						</Link>
					</div>
				</div>
			</div>
			<div className="page_container px-4 px-md-0">
				<hr />
			</div>
		</>
	);
};

export default ServiceBanner;
