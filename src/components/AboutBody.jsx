import React from "react";
import about from "../assets/about.png";

import a1 from "../assets/about/a1.svg";
import a2 from "../assets/about/a2.svg";
import a3 from "../assets/about/a3.svg";
import a4 from "../assets/about/a4.svg";
import a5 from "../assets/about/a5.svg";
import like from "../assets/like.svg";

const AboutBody = () => {
	const data = [
		{
			i: a1,
			t: "100% Australian",
		},
		{
			i: a2,
			t: "Founded in 2020",
		},
		{
			i: a3,
			t: "18 Years Experience",
		},
		{
			i: a4,
			t: "Independantly-Owned",
		},
		{
			i: a5,
			t: "Industry Specialists",
		},
	];

	return (
		<div className="about_body_container">
			<div className="col-12 col-md-5 d-block d-md-none">
				<img className="w-100" src={about} alt="" />
			</div>
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row">
								<div className="col-12 col-lg-5 d-none d-md-block pe-3 pe-lg-4">
									<img className="w-100" src={about} alt="" />
								</div>
								<div className="col-12 col-lg-7 mt-5 mt-md-0">
									<h6 className="text-uppercase textColor2 f600 f14 mb-3 mt-0 mt-md-4 mt-lg-0 pt-0 pt-md-1 pt-lg-0">
										WHo Are we
									</h6>
									<h1 className="about_head f800 mb-3">
										<span className="text-white">An Australian business,</span>
										<br />
										<span className="themeBlue">
											created for Australians
										</span>{" "}
									</h1>

									<p className="textColor2 upPara">
										vPossible Solutions is a Melbourne-based IT implementation
										and consulting company with a focus on providing local
										business with customisable IT service packages at low-costs,
										without compromising on quality and technical expertise.
									</p>

									<div className="about_list d-flex flex-wrap align-items-center">
										{data.map((p, ind) => {
											const { i, t } = p;
											return (
												<div
													key={ind}
													className={`btns d-flex align-items-center py-2 px-3 text-center mt-3 ms-0 ms-sm-3`}
												>
													<div className="mb-0">
														<img src={i} alt="" />
													</div>
													<div className="iconText text-white f14 mb-0">
														{t}
													</div>
												</div>
											);
										})}
									</div>

									<hr style={{ margin: "64px 0px" }} />

									<h6 className="oMission text-uppercase themeBlue f600 f14">
										Our Mission
									</h6>
									<h4 className="text-white f800">Consistency is our mantra</h4>

									<p className="textColor2 f14 downPara">
										Our solutions and services extend from the desktop to the
										cloud, and our client base spans a wide range of industries,
										from manufacturing to financial services, through to
										hospitality and non-for-profits. Our team of industry
										specialists works together to provide outstanding solutions
										to complex technology problems, in addition to taking
										ownership of our clients IT challenges by leveraging
										technologies to improve business performance, align
										strategy, and drive their business objectives. With
										technical expertise, experience and infrastructure,
										vPossible are the ideal technology partner for organisations
										looking for a professional IT services partner that will
										enable them to free up capital expenditure and focus on
										their core business – knowing that their IT is aligned with
										their needs, tailored for their objectives and underpinned
										by a team of industry experts.
									</p>

									<div className="bottomCont mt-5">
										<h6 className="text-uppercase themeBlue f600 f14">
											The vpossible guarantee
										</h6>

										<div className="mt-3">
											<div className="row">
												<div className="col-12 col-md-6">
													<div className="d-flex">
														<img src={like} alt="" />
														<h6 className="mb-0 text-white ms-4 f14">
															Prompt, professional and <br /> around-the-clock
															service
														</h6>
													</div>
												</div>
												<div className="col-12 col-md-6 mt-4 mt-md-0">
													<div className="d-flex">
														<img src={like} alt="" />
														<h6 className="mb-0 text-white ms-4 f14">
															Assistance with IT budgeting <br /> and future
															planning{" "}
														</h6>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutBody;
