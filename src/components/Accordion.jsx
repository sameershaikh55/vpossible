import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Accordion = ({ t, p }) => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<div
			onClick={() => setCollapsed(!collapsed)}
			className="custom_accordion text-white pointer"
		>
			<div>
				<div className="d-flex align-items-center">
					<h5
						style={{
							transition: "0.4s",
						}}
						className="f14 w-100 mb-0 fw800 textColor3"
					>
						{t}
					</h5>
					<IoIosArrowDown
						style={{
							transform: collapsed && "rotate(180deg)",
							transition: "0.4s",
						}}
						className="icon1 pointer"
						fontSize="1.4rem"
						color={(!collapsed && "#9CA3AF") || "#FF8811"}
					/>
				</div>
				<div
					style={{
						transition: "0.4s",
						height: (collapsed && "auto") || "0px",
						overflowY: (collapsed && "initial") || "hidden",
					}}
					className="mb-0 textColor pe-5"
				>
					<div
						id="content"
						style={{
							opacity: (collapsed && "1") || "0",
							transitionDelay: collapsed && "0.8s",
							transition: collapsed && "0.8s",
						}}
						className="f14 pt-3 mb-0"
					>
						{p}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Accordion;
