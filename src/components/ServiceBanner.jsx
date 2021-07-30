import React from "react";

// IMPORTS
import service1 from "../assets/service1.svg";
import service2 from "../assets/service2.svg";
import serviceRes from "../assets/serviceRes.svg";
import { IoIosArrowDown } from "react-icons/io";

const ServiceBanner = () => {
	return (
		<>
			<div className="serviceBanner_container">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-11 col-md-12 mx-auto">
								<div className="innerServiceContainer">
									<div className="cont d-none d-md-block">
										<img className="w-100" src={service1} alt="" />
									</div>
									<div className="cont">
										<h6 className="text-uppercase textColor2 f600 text-start text-md-center f14">
											Services
										</h6>
										<h1 className="text-start text-md-center f800">
											<span className="themeBlue">Protect your IT network</span>{" "}
											<span className="text-white">again any disaster</span>
										</h1>
										<p className="textColor2 text-start text-md-center">
											Maintaining a secure and stable IT network is now as
											important as ever for your business. With our wide range
											of IT services, we’re confident that you’ll find something
											to fits your needs.
										</p>
										<div className="text-center d-none d-md-block">
											<IoIosArrowDown className="themeBlue h5" />
										</div>
									</div>
									<div className="cont d-none d-md-block">
										<img className="w-100" src={service2} alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="responsive_image d-block d-md-none">
						<img className="w-100" src={serviceRes} alt="" />
					</div>
					<div className="text-center d-block d-md-none mt-4">
						<IoIosArrowDown className="themeBlue h2" />
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
