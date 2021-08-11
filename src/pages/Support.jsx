import React from "react";
import { NavLink } from "react-router-dom";

// IMPORTS
import Footer from "../components/Footer";
import Header from "../components/Header";

const Support = () => {
	return (
		<div>
			<Header />

			{/* BODY START */}
			<div className="support_container">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-11 col-lg-12 mx-auto">
								<div className="row">
									<div className="col-md-6 col-lg-4">
										<h1 className="text-white mb-3">Need assistance?</h1>
										<p className="textColor2">
											Please use the following contact lines for technical
											support requests only. For all other enquiries, please
											complete the form on the{" "}
											<NavLink
												className="textLink text-decoration-none"
												to="/contact"
											>
												Contact
											</NavLink>{" "}
											page.
										</p>
										<hr className="my-5 d-block d-md-none" />
									</div>
									<div className="col-1 px-0">
										<div className="line ms-auto"></div>
									</div>
									<div className="col-md-5 col-lg-7 ps-2 ps-md-5">
										<div className="mb-4">
											<p className="mb6 text-white f14">Send an Email</p>
											<div className="w-100">
												<a
													href="mailto:support@vpossible.com.au"
													className="text-decoration-none themeBlue f14 px-3 py-2 d-inline-block text-center"
												>
													support@vpossible.com.au
												</a>
											</div>
										</div>

										<div className="mb-4">
											<p className="mb6 text-white f14">Call Us</p>
											<div className="w-100">
												<a
													href="tel:+61 3 9088 6275"
													className="text-decoration-none themeBlue f14 px-3 py-2 d-inline-block text-center"
												>
													+61 3 9088 6275
												</a>
											</div>
										</div>

										<div>
											<p className="text-white mb-2 f14">Contact an Agent</p>
											<button className="text-dark f600 f14 px-3 py-2 border-0">
												Activate LiveChat
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* BODY END */}

			<Footer />
		</div>
	);
};

export default Support;
