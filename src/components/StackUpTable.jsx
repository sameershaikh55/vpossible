import React from "react";
import logo from "../assets/logo.svg";
import greenTick from "../assets/stackUp/greenTick.svg";
import redCross from "../assets/stackUp/redCross.svg";
import yellowMinus from "../assets/stackUp/yellowMinus.svg";
import Slider from "react-slick";

const StackUpTable = () => {
	const leftTable = [
		"IT Issue Resolution",
		"Installation of Latest Equipment",
		"Quotations On-Request",
		"Hardware & Software Procurement",
		"Environment Monitoring",
		"Updates & Patch Maintenance",
		"Continual Improvement",
		"Constant Business Productivity Increases",
		"Proactive Risk Identification & Impact Analysis",
		"ROI Objectives-Based Strategic Planning",
		"Accountability for Delivering Business Results",
	];

	const checks = [
		{
			checkin: [
				{
					img: greenTick,
					bg: "rgba(18, 210, 141, 0.1)",
				},
				{
					img: greenTick,
					bg: "rgba(18, 210, 141, 0.1)",
				},
				{
					img: greenTick,
					bg: "rgba(18, 210, 141, 0.1)",
				},
			],
		},
		{
			checkin: [
				{
					img: greenTick,
					bg: "rgba(18, 210, 141, 0.06)",
				},
				{
					img: greenTick,
					bg: "rgba(18, 210, 141, 0.06)",
				},
				{
					img: greenTick,
					bg: "rgba(18, 210, 141, 0.06)",
				},
			],
		},
		{
			checkin: [
				{
					img: greenTick,
					bg: "rgba(18, 210, 141, 0.1)",
				},
				{
					img: greenTick,
					bg: "rgba(18, 210, 141, 0.1)",
				},
				{
					img: greenTick,
					bg: "rgba(18, 210, 141, 0.1)",
				},
			],
		},
		{
			checkin: [
				{
					img: greenTick,
					bg: "rgba(18, 210, 141, 0.06)",
				},
				{
					img: greenTick,
					bg: "rgba(18, 210, 141, 0.06)",
				},
				{
					img: greenTick,
					bg: "rgba(18, 210, 141, 0.06)",
				},
			],
		},
		{
			checkin: [
				{
					img: yellowMinus,
					bg: "rgba(255, 203, 20, 0.1)",
				},
				{
					img: greenTick,
					bg: "rgba(18, 210, 141, 0.1)",
				},
				{
					img: greenTick,
					bg: "rgba(18, 210, 141, 0.1)",
				},
			],
		},
		{
			checkin: [
				{
					img: yellowMinus,
					bg: "rgba(255, 203, 20, 0.06)",
				},
				{
					img: greenTick,
					bg: "rgba(18, 210, 141, 0.06)",
				},
				{
					img: greenTick,
					bg: "rgba(18, 210, 141, 0.06)",
				},
			],
		},
		{
			checkin: [
				{
					img: redCross,
					bg: "rgba(255, 85, 85, 0.1)",
				},
				{
					img: yellowMinus,
					bg: "rgba(255, 203, 20, 0.1)",
				},
				{
					img: greenTick,
					bg: "rgba(18, 210, 141, 0.1)",
				},
			],
		},
		{
			checkin: [
				{
					img: redCross,
					bg: "rgba(255, 85, 85, 0.06)",
				},
				{
					img: redCross,
					bg: "rgba(255, 85, 85, 0.06)",
				},
				{
					img: greenTick,
					bg: "rgba(18, 210, 141, 0.06)",
				},
			],
		},
		{
			checkin: [
				{
					img: redCross,
					bg: "rgba(255, 85, 85, 0.1)",
				},
				{
					img: redCross,
					bg: "rgba(255, 85, 85, 0.1)",
				},
				{
					img: greenTick,
					bg: "rgba(18, 210, 141, 0.1)",
				},
			],
		},
		{
			checkin: [
				{
					img: redCross,
					bg: "rgba(255, 85, 85, 0.06)",
				},
				{
					img: redCross,
					bg: "rgba(255, 85, 85, 0.06)",
				},
				{
					img: greenTick,
					bg: "rgba(18, 210, 141, 0.06)",
				},
			],
		},
		{
			checkin: [
				{
					img: redCross,
					bg: "rgba(255, 85, 85, 0.1)",
				},
				{
					img: redCross,
					bg: "rgba(255, 85, 85, 0.1)",
				},
				{
					img: greenTick,
					bg: "rgba(18, 210, 141, 0.1)",
				},
			],
		},
	];

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div className="stack_competition_container">
			<div className="page_container">
				<div className="container-fluid">
					<h4 className="mb-0 text-center textColor3 fw-bold">
						How do we stack-up against the competition?
					</h4>

					<div className="table_container d-none d-md-block">
						<div className="row gx-0">
							<div className="col-4"></div>
							<div className="col-8">
								<div className="right_side_head row align-items-center gx-0">
									<div className="col-4 text-center">
										Traditional IT Services
									</div>
									<div className="col-4 text-center">
										Industry Standard IT Services
									</div>
									<div className="col-4 text-center">
										<img src={logo} alt="logo" />
									</div>
								</div>
							</div>
							<div className="left_side col-4">
								{leftTable.map((content, i) => {
									return <div key={i}>{content}</div>;
								})}
							</div>
							<div className="col-8">
								<div className="right_table_inner">
									{checks.map((content, i) => {
										return (
											<div
												key={i}
												className="right_side_body row align-items-center gx-0"
											>
												{content.checkin.map((item, ind) => {
													return (
														<div
															key={ind}
															style={{ background: item.bg }}
															className="col-4 text-center"
														>
															<img src={item.img} alt="" />
														</div>
													);
												})}
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>

					<div className="d-none d-sm-block d-md-none">
						<div className="col-11 mx-auto">
							{leftTable.map((content, i) => {
								return (
									<div key={i} className="single_table_tablet">
										<p className="text-center head_text">{content}</p>

										<div className="single_table_inner">
											<div className="single_table_inner_head row align-items-center">
												<div className="col-4 text-center">
													<p className="mb-0">Traditional IT Services</p>
												</div>
												<div className="col-4 text-center">
													<p className="mb-0">Industry Standard IT Services</p>
												</div>
												<div className="col-4 text-center">
													<img src={logo} alt="" />
												</div>
											</div>
											<div className="single_table_inner_body row gx-0">
												{checks[i].checkin.map((item, ind) => {
													return (
														<div
															style={{ background: item.bg }}
															className="col-4 text-center"
															key={ind}
														>
															<img src={item.img} alt="" />
														</div>
													);
												})}
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>

					<div className="d-block d-sm-none stack_up_slider_container">
						<Slider {...settings}>
							{leftTable.map((content, i) => {
								return (
									<div className="slider_single">
										<p className="text-center head_text">{content}</p>

										<div className="single_table_inner single_table_inner_mobile row_">
											<div className="col_9">
												<div className="single_table_inner_head row align-items-center">
													<div className="col-12 pe-0">
														<p className="mb-0">Traditional IT Services</p>
													</div>
													<div className="col-12 pe-0">
														<p className="mb-0">
															Industry Standard IT Services
														</p>
													</div>
													<div className="col-12 pe-0">
														<img src={logo} alt="" />
													</div>
												</div>
											</div>
											<div className="col_3 px-0">
												<div className="single_table_inner_body row gx-0">
													{checks[i].checkin.map((item, ind) => {
														return (
															<div
																style={{ background: item.bg }}
																className="col-12 text-center d-flex justify-content-center"
																key={ind}
															>
																<img src={item.img} alt="" />
															</div>
														);
													})}
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</Slider>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StackUpTable;
