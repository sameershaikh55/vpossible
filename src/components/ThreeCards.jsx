import React from "react";

import c1 from "../assets/threeCards/c1.svg";
import c2 from "../assets/threeCards/c2.svg";
import c3 from "../assets/threeCards/c3.svg";

const ThreeCards = () => {
	const data = [
		{
			i: c1,
			t: "Certified Engineers",
			d: "With highly experienced IT engineers and consultants at the helm, vPossible ensures a high level of security to mitigate any emerging threats.",
		},
		{
			i: c2,
			t: "Melbourne-Based Team",
			d: "Founded and based in Melbourne, the vPossible team are able to provide a full suite of managed IT services, without compromising on quality.",
		},
		{
			i: c3,
			t: "24/7 Managed IT Services",
			d: "We manage your IT services around the clock to ensure any untimely issues are resolved in a timely manner to avoid interruptions to your business.",
		},
	];

	return (
		<div className="threeCards_container">
			<div className="inner_threeCards_container">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-11 col-md-11 col-lg-12 mx-auto">
								<div className="row">
									{data.map((p, ind) => {
										const { i, t, d } = p;
										return (
											<div
												key={ind}
												className="col-12 col-md-6 col-lg-4 mt-5 mt-lg-0"
											>
												<div className="d-flex">
													<div>
														<img src={i} alt="" />
													</div>
													<div className="ms-4">
														<h5 className="text-white f14">{t}</h5>
														<p className="textColor2 f14 mb-0">{d}</p>
													</div>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThreeCards;
