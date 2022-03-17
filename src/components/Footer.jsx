import React from "react";

import { SiFacebook } from "react-icons/si";
import { NavLink } from "react-router-dom";

const Footer = ({ support, contact }) => {
	return (
		<div
			style={{ marginTop: (support && "0px") || (contact && "0px") }}
			className="footer_container"
		>
			<div className="page_container">
				<div className="container-fluid">
					<ul className="list-unstyled d-flex justify-content-center mb-0">
						<li className="f14">
							<NavLink
								className="themeColor text-decoration-none f500"
								to="/service"
							>
								Services
							</NavLink>
						</li>
						<li className="f14">
							<NavLink className="themeColor text-decoration-none" to="/about">
								About
							</NavLink>
						</li>
						<li className="f14">
							<NavLink
								className="themeColor text-decoration-none f500"
								to="/contact"
							>
								Contact
							</NavLink>
						</li>
						<li className="f14">
							<NavLink
								className="themeColor text-decoration-none f500"
								to="/support"
							>
								Support
							</NavLink>
						</li>
					</ul>

					<div className="share_btn d-flex justify-content-center">
						<a target="blank" href="https://wwww.facebook.com/vpossible">
							<SiFacebook color="#6B7280" fontSize="20.5px" />
						</a>
						{/* <SiTwitter color="#9CA3AF" fontSize="1.4rem" className="ms-3" />
						<SiLinkedin color="#9CA3AF" fontSize="1.4rem" className="ms-3" /> */}
					</div>

					<p className="f14 text-center mb-0">
						Copyright © 2021 vPossible Solutions. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
