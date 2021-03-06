import React from "react";
import { NavLink } from "react-router-dom";
import ThreeCards from "./ThreeCards";

const Hero = () => {
	return (
		<div className="hero_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-sm-10 col-md-12 mx-auto px-1">
							<div className="row">
								<div className="col-12 col-md-11 mx-auto mx-lg-0 col-lg-6">
									<p className="topText text-center text-sm-start textColor2 mb-3 text-uppercase f14 f500">
										Diverse IT Solutions
									</p>
									<h1 className="mb-3 text-center text-sm-start">
										<span className="themeBlue">Tailored IT Solutions</span> to
										<br className="d-none d-sm-block d-md-none" /> help your
										business grow
									</h1>
									<p className="bottomText textColor2 text-center text-sm-start">
										A wide range of network and security consulting services,
										technology training <br className="d-none d-xl-block" /> and
										manage IT services to Australian service provider and
										enterprise markets.
									</p>
									<div className="btn_container">
										<NavLink to="/contact">
											<button className="f600 border-0 f14 textColor3">
												Get Started
											</button>
										</NavLink>
										<NavLink to="/service">
											<button className="f500 ms-0 ms-sm-4 f14">
												Browse Services
											</button>
										</NavLink>
									</div>
								</div>
								<div className="col-12 col-md-11 mx-auto col-lg-4 mt-5 mt-md-0 text-center d-none d-md-block"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ThreeCards />
		</div>
	);
};

export default Hero;
