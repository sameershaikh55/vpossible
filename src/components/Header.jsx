import React from "react";

// IMPORTS
import logo from "../assets/logo.svg";
import hamburger from "../assets/hamburger.svg";
import cross from "../assets/cross.svg";
import { FiArrowRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Header = ({ ClickEvent, isOpen }) => {
	const navigations = [
		{ text: "Services", navigation: "/service" },
		{ text: "About", navigation: "/about" },
		{ text: "Support", navigation: "/support" },
	];

	return (
		<div className="header_container shadow-sm">
			<div className="page_container h-100">
				<div className="container-fluid h-100">
					<div className="row h-100">
						<div className="col-12 mx-auto">
							<div className="d-flex justify-content-between align-items-center h-100">
								<div>
									<NavLink to="/">
										<img src={logo} alt="logo" />
									</NavLink>
								</div>
								<div className="d-block d-sm-none">
									{(isOpen && (
										<img onClick={ClickEvent} src={cross} alt="hamburger" />
									)) || <img onClick={ClickEvent} src={hamburger} alt="hamburger" />}
								</div>
								<div className="d-none d-sm-flex mt-3 mt-sm-0">
									<ul className="list-unstyled d-flex align-items-center mb-0 textColor">
										{navigations.map((item, i) => {
											return (
												<li key={i}>
													<NavLink
														to={item.navigation}
														className="text-decoration-none textColor f500"
													>
														{item.text}
													</NavLink>
												</li>
											);
										})}
									</ul>
									<NavLink to="/contact" className="text-decoration-none">
										<button className="f500 text-white f14">
											Get Started <FiArrowRight color="#fff" />
										</button>
									</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
