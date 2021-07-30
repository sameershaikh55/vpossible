import React from "react";

// IMPORTS
import hero from "../assets/hero.svg";

const Hero = () => {
	return (
		<div className="hero_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row">
								<div className="col-12 col-md-6 col-lg-7">
									<p className="topText textColor2 mb-2 text-uppercase f14 f600">
										All-Round IT Solutions For Your Business
									</p>
									<h1>
										<span className="themeBlue">Tailored IT Solutions</span> to
										help your business grow
									</h1>
									<p className="bottomText textColor2 my-4">
										A wide range of network and security consulting services,
										technology training and manage IT services to Australian
										service provider and enterprise markets.
									</p>
									<div className="btn_container">
										<button className="f600 border-0 f14">Get Started</button>
										<button className="f600 ms-0 ms-md-4 f14 mt-3">
											Browse Services
										</button>
									</div>
								</div>
								<div className="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
									<img className="w-100" src={hero} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;