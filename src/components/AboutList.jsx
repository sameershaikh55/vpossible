import React from "react";

// LIST OF ABOUT
import i1 from "../assets/about/i1.svg";
import i2 from "../assets/about/i2.svg";
import i3 from "../assets/about/i3.svg";
import i4 from "../assets/about/i4.svg";
import i5 from "../assets/about/i5.svg";

const AboutList = () => {
	const data = [
		{
			picture: i1,
			text: "100% Australian",
		},
		{
			text: "line",
		},
		{
			picture: i2,
			text: "Founded in 2019",
		},
		{
			text: "line",
		},
		{
			picture: i3,
			text: "23 Years Experience",
		},
		{
			text: "line",
		},
		{
			picture: i4,
			text: "Independantly-Owned",
		},
		{
			text: "line",
		},
		{
			picture: i5,
			text: "Industry Specialists",
		},
	];

	return (
		<div className="about_list_container">
			<div className="container-fluid">
				<ul className="row_list list-unstyled d-flex flex-column flex-sm-row flex-wrap gap-sm-4 gap-lg-3 justify-content-sm-center justify-content-lg-between align-items-sm-center mb-0">
					{data.map((item, i) => {
						return (
							<div
								className={`${(i === 5 && "d-none d-md-block") || ""} ${
									(i === 7 && "d-block d-md-none d-lg-none") || ""
								} ${
									item.text === "line" && "d-none d-sm-block"
								} h-100 single_about_list`}
							>
								{(item.text === "line" && (
									<div className="d-none d-sm-block border-start h-100 py-sm-3"></div>
								)) || (
									<li key={i} className="d-flex">
										<img src={item.picture} alt="" />
										<p className="ms-2 mb-0 f14 f500 textColor3">{item.text}</p>
									</li>
								)}
							</div>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default AboutList;
