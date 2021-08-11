import React from "react";
import { NavLink } from "react-router-dom";

import startedHome from "../assets/startedHome.svg";
import startedHomeT from "../assets/startedHome.png";

const StartedHome = () => {
	return (
		<div>
			<div className="page_container d-block d-sm-none d-md-block">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row">
								<div className="col-12">
									<div className="started_container py-4 py-md-0 d-flex align-items-center justify-content-between w-100">
										<div className="first ps-4 pe-4 pe-md-0 ps-md-5 w-100">
											<h6 className="topText f14 f600 text-uppercase">
												The vpossibilities are endless
											</h6>
											<h4 className="f800 text-white mb-0">
												Get started today with a free{" "}
												<br className="d-none d-lg-block" /> professional
												consultation
											</h4>
											<div className="btn_cont">
												<NavLink to="/contact">
													<button className="border-0 px-3 f14 py-2 f600">
														Claim Now
													</button>
												</NavLink>
											</div>
										</div>
										<div className="w-100 d-none d-md-block">
											<img className="w-100" src={startedHome} alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="page_container d-none d-sm-block d-md-none">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row">
								<div className="col-12">
									<div className="started_container py-4 py-md-0 d-flex align-items-center justify-content-between">
										<div className="col-4 first ps-4 ps-md-5">
											<h6 className="topText f14 f600 text-uppercase">
												The vpossibilities are endless
											</h6>
											<h4 className="f800 text-white mb-0">
												Get started today with a free{" "}
												<br className="d-none d-lg-block" /> professional
												consultation
											</h4>
											<div className="btn_cont">
												<NavLink to="/contact">
													<button className="border-0 px-3 f14 py-2 f600">
														Claim Now
													</button>
												</NavLink>
											</div>
										</div>
										<div className="col-3 ms-5">
											<img className="" src={startedHomeT} alt="" />
										</div>
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

export default StartedHome;
