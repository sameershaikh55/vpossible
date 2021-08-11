import React from "react";
import { NavLink } from "react-router-dom";

const ContactBody = () => {
	return (
		<div>
			<div className="contact_container">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-11 col-md-12 mx-auto">
								<div className="row">
									<div className="col-md-4 col-lg-4">
										<h1 className="text-white f800">Get in-touch</h1>
										<p className="textColor2">
											Write to us regardling any sales or public relations
											enquiries, or to provide customer feedback. For any
											technical assistance, please visit our{" "}
											<NavLink
												className="textLink text-decoration-none"
												to="/support"
											>
												Support
											</NavLink>{" "}
											page.
										</p>

										<div className="mt-5">
											<p className="mb-2 text-white f14 f500">Call Us</p>
											<div className="w-100">
												<a
													href="tel:+61 3 9088 6275"
													className="text-decoration-none themeBlue f14 px-3 py-2 d-inline-block text-center f600"
												>
													+61 3 9088 6275
												</a>
											</div>
										</div>
									</div>

									<div className="d-block d-md-none">
										<hr className="mt-5" />
									</div>

									<div className="col-1 px-0">
										<div className="line ms-auto"></div>
									</div>
									<div className="form_container col-md-7 ps-2 ps-md-5">
										<div className="row">
											<div className="col-12 col-sm-6 d-flex flex-column mtContact">
												<label
													className="text-white f14 mb6"
													htmlFor="First Name*"
												>
													First Name*
												</label>
												<input className="py-1" type="text" name="" id="" />
											</div>
											<div className="col-12 col-sm-6 d-flex flex-column mtContact">
												<label
													className="text-white f14 mb6"
													htmlFor="First Name*"
												>
													Surname*
												</label>
												<input className="py-1" type="text" name="" id="" />
											</div>
											<div className="col-12 d-flex flex-column mtContact">
												<label
													className="text-white f14 mb6"
													htmlFor="First Name*"
												>
													Email Address*
												</label>
												<input className="py-1" type="text" name="" id="" />
											</div>
											<div className="col-12 col-md-6 d-flex flex-column mtContact">
												<label
													className="text-white f14 mb6"
													htmlFor="First Name*"
												>
													Phone*
												</label>
												<input className="py-1" type="text" name="" id="" />
											</div>
											<div className="col-12 col-md-6 d-flex flex-column mtContact">
												<label
													className="text-white f14 mb6"
													htmlFor="First Name*"
												>
													Company*
												</label>
												<input className="py-1" type="text" name="" id="" />
											</div>
											<div className="col-12 d-flex flex-column mtContact">
												<label
													className="text-white f14 mb6"
													htmlFor="First Name*"
												>
													Message*
												</label>
												<textarea name="" id="" />
											</div>
										</div>

										<div className="mt-4 w-100">
											<NavLink to="/contact" className="d-inline-block">
												<button className="f600 border-0 px-4 py-2 f14 w-100">
													Submit
												</button>
											</NavLink>
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

export default ContactBody;
