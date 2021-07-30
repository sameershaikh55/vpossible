import React from "react";

import startedHome from "../assets/startedHome.svg";

const StartedHome = () => {
	return (
		<div className="page_container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-11 col-md-12 mx-auto">
						<div className="row">
							<div className="col-12">
								<div className="started_container py-4 py-md-0 d-flex align-items-center justify-content-between w-100">
									<div className="first ps-4 pe-4 pe-md-0 ps-md-5 w-100">
										<h6 className="f14 text-uppercase mb-1">
											The vpossibilities are endless
										</h6>
										<h4 className="fw-bold f800 text-white">
											Get started today with a free{" "}
											<br className="d-none d-lg-block" /> professional
											consultation
										</h4>
										<div className="mt-4">
											<button className="bg-white border-0 px-3 f14 py-2 f600">
												Claim Now
											</button>
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
	);
};

export default StartedHome;
