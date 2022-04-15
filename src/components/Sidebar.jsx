import React from "react";
import { NavLink } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Sidebar = ({ isOpen, ClickEvent }) => {
	const navigations = [
		{ text: "Services", navigation: "/service" },
		{ text: "About", navigation: "/about" },
		{ text: "Support", navigation: "/support" },
	];

	return (
		<div
			onClick={ClickEvent}
			style={{
				opacity: `${isOpen ? "1" : "0"}`,
				top: `${isOpen ? "0%" : "-100%"}`,
			}}
			className="SideBarContainer"
		>
			<ul>
				{navigations.map((item, i) => {
					return (
						<li className="fw600 text-white f28 pointer" key={i}>
							<NavLink to={item.navigation}>{item.text}</NavLink>
						</li>
					);
				})}
			</ul>
			<NavLink
				to="/contact"
				className="text-decoration-none get_started d-flex justify-content-center"
			>
				<button className="f500 text-white">
					Get Started <FiArrowRight color="#fff" />
				</button>
			</NavLink>
		</div>
	);
};

export default Sidebar;
