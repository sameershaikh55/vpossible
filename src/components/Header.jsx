import React from "react";

// IMPORTS
import logo from "../assets/logo.svg";
import { FiArrowRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div className="header_container">
			<div className="page_container h-100">
				<div className="container-fluid h-100">
					<div className="d-flex justify-content-between align-items-center h-100">
						<div>
							<img src={logo} alt="logo" />
						</div>
						<div>
							<ul className="list-unstyled d-flex align-items-center mb-0 textColor">
								<li className="fw500">
									<NavLink to="" className="text-decoration-none textColor">
										Services
									</NavLink>
								</li>
								<li className="fw500">
									<NavLink to="" className="text-decoration-none textColor">
										Support
									</NavLink>
								</li>
								<li className="line"></li>
								<li className="fw500">
									<NavLink to="" className="text-decoration-none textColor">
										Get In-Touch <FiArrowRight color="#9CA3AF" />
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
