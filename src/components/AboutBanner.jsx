import React from "react";
import AboutList from "./AboutList";

const AboutBanner = () => {
	return (
		<>
			<div className="about_banner_container">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-11 col-md-10 col-lg-12 mx-auto">
								<div className="innerAboutContainer">
									<h6 className="text-uppercase textColor2 f600 text-center f14 mb-2">
										Who Are we
									</h6>
									<h1 className="text-white text-center f800 f48 mb-3">
										An Australian business, created{" "}
										<span className="themeBlue"> for Australians </span>
									</h1>
									<p className="textColor2 text-center f16 mb-0">
										vPossible Solutions is a Melbourne-based IT implementation
										and consulting company with a focus on providing local
										business with customisable IT service packages at low-costs,
										without compromising on quality and technical expertise.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<AboutList />
		</>
	);
};

export default AboutBanner;
