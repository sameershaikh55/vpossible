import React from "react";

import { SiFacebook, SiTwitter, SiLinkedin } from "react-icons/si";
import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<div className="footer_container">
			<div className="page_container">
				<hr />
				<div className="container-fluid pt-4 pb-4">
					<ul className="list-unstyled d-flex justify-content-center">
						<li className="f14">
							<NavLink className="textColor text-decoration-none" to="/service">
								Services
							</NavLink>
						</li>
						<li className="f14 ms-4">
							<NavLink className="textColor text-decoration-none" to="/about">
								About
							</NavLink>
						</li>
						<li className="f14 ms-4">
							<NavLink className="textColor text-decoration-none" to="/contact">
								Contact
							</NavLink>
						</li>
						<li className="f14 ms-4">
							<NavLink className="textColor text-decoration-none" to="/support">
								Support
							</NavLink>
						</li>
					</ul>

					<div className="d-flex justify-content-center mt-4">
						<SiFacebook color="#9CA3AF" fontSize="1.4rem" />
						<SiTwitter color="#9CA3AF" fontSize="1.4rem" className="ms-3" />
						<SiLinkedin color="#9CA3AF" fontSize="1.4rem" className="ms-3" />
					</div>

					<p className="f14 text-center mt-4">
						Copyright © 2021 vPossible Solutions. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
