import React from "react";

// IMPORTS
// import service1 from "../assets/service1.svg";
// import service2 from "../assets/service2.svg";
// import serviceRes from "../assets/serviceRes.svg";
// import tabletService from "../assets/tabletService.svg";
// import { Link } from "react-scroll";

const ServiceBanner = () => {
	return (
		<div className="serviceBanner_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-10 col-lg-12 mx-auto">
							<div className="innerServiceContainer">
								<h6 className="text-uppercase textColor2 f600 text-center f14 mb-2">
									Services
								</h6>
								<h1 className="text-center f800 f48 mb-3">
									<span className="themeBlue">Protect your IT network</span>{" "}
									<span className="text-white">again any disaster</span>
								</h1>
								<p className="textColor2 text-center">
									Maintaining a secure and stable IT network is now as important
									as ever for your business. With our wide range of IT services,
									we’re confident that you’ll find something to fits your needs.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* <div className="responsive_image d-block d-sm-none">
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
				</div> */}
			</div>
		</div>
	);
};

export default ServiceBanner;
