import React from "react";

import { SiFacebook, SiTwitter, SiLinkedin } from "react-icons/si";

const Footer = () => {
	return (
		<div className="footer_container">
			<div className="page_container">
				<hr />
				<div className="container-fluid pt-4 pb-4">
					<ul className="list-unstyled d-flex justify-content-center">
						<li className="textColor f14 ">Services</li>
						<li className="textColor f14 ms-4">About</li>
						<li className="textColor f14 ms-4">Contact</li>
						<li className="textColor f14 ms-4">Support</li>
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
