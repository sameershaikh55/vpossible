import React from "react";
import { Link } from "react-router-dom";
import i1 from "../assets/technicalAssistance/i1.svg";
import i2 from "../assets/technicalAssistance/i2.svg";
import i3 from "../assets/technicalAssistance/i3.svg";

const TechnicalAssistance = () => {
	const technicalAssistance = [
		{
			picture: i1,
			text: "Send us an email",
		},
		{
			picture: i2,
			text: "Call us on (03) 9088 6275",
		},
		{
			picture: i3,
			text: "Start a Live Chat",
		},
	];

	return (
		<div className="technical_assistance_container">
			<div className="inner_technical_assistance_container">
				<div className="container-fluid">
					<div className="row">
						<div className="text_head">
							<h1 className="text-center f24 f900 mb-3">
								Need technical assistance?
							</h1>
							<p className="text-center f16 textColor mb-0 f400">
								Visit our{" "}
								<Link className="text-decoration-none" to="/support">
									Support
								</Link>{" "}
								page to find the answers you’re looking for.
								<br />
								Alternatively, use the following contact lines for direct
								technical support.
							</p>
						</div>

						<div className="row">
							{technicalAssistance.map((content, i) => {
								return (
									<div key={i} className="col-4">
										<div className="single_cta_container d-flex flex-column justify-content-center align-items-center">
											<img className="mb-2" src={content.picture} alt="" />
											<p className="mb-0 text-white f14">{content.text}</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TechnicalAssistance;
