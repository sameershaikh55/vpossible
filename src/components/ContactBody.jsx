import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const ContactBody = ({ status, message, onSubmitted }) => {
	const [succes, setSucces] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	let error;
	if (Object.keys(errors).length) {
		error = (
			<p
				style={{
					color: "#FF5555",
				}}
				className="ms-lg-3 mb-0 f14"
			>
				Please complete all required fields in order to successfully submit
				form.
			</p>
		);
	} else {
		if (succes)
			error = (
				<p
					style={{
						color: "#12D28D",
					}}
					className="ms-lg-3 mb-0 f14"
				>
					Your message has been submitted.
				</p>
			);
	}

	const onSubmit = (data) => {
		const { firstname, surname, company, email, phone, messageT } = data;

		// CHIMP SUBMIT FUNCTION START
		onSubmitted({
			FNAME: firstname,
			LNAME: surname,
			EMAIL: email,
			PHONE: phone,
			COMPANY: company,
			MESSAGE: messageT,
		});
		// CHIMP SUBMIT FUNCTION END

		reset();

		setSucces(true);
	};

	return (
		<div>
			<div className="contact_container">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-11 col-md-12 mx-auto">
								<div className="row">
									<div className="col-md-4 col-lg-4">
										<h1 className="text-white f800">Get in-touch</h1>
										<p className="textColor2">
											Write to us regardling any sales or public relations
											enquiries, or to provide customer feedback. For any
											technical assistance, please visit our{" "}
											<NavLink
												className="textLink text-decoration-none"
												to="/support"
											>
												Support
											</NavLink>{" "}
											page.
										</p>

										<div className="mt-5">
											<p className="mb-2 text-white f14 f500">Call Us</p>
											<div className="w-100">
												<a
													href="tel:+61 3 9088 6275"
													className="text-decoration-none themeBlue f14 px-3 py-2 d-inline-block text-center f600"
												>
													+61 3 9088 6275
												</a>
											</div>
										</div>
									</div>

									<div className="d-block d-md-none">
										<hr className="mt-5" />
									</div>

									<div className="col-1 px-0">
										<div className="line ms-auto"></div>
									</div>
									<div className="form_container col-md-7 ps-2 ps-md-5">
										<form onSubmit={handleSubmit(onSubmit)}>
											<div className="row">
												<div className="col-12 position-relative col-sm-6 d-flex flex-column mtContact">
													<div className="d-flex align-items-center justify-content-between">
														<label
															className="text-white f14 mb6"
															htmlFor="First Name*"
														>
															First Name*
														</label>
														<div className="redColor me-1">
															{errors.firstname &&
																errors.firstname.type === "required" &&
																"Required"}
															{/* {errors.firstname &&
																errors.firstname.type === "maxLength" &&
																"Maximum 10 Characters Allowed"}
															{errors.firstname &&
																errors.firstname.type === "pattern" &&
																"please enter valid name"} */}
														</div>
													</div>
													<div className="w-100">
														<input
															{...register("firstname", {
																required: true,
																maxLength: 10,
																pattern:
																	/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
															})}
															className="py-1 w-100"
															type="text"
														/>
													</div>
												</div>
												<div className="col-12 col-sm-6 d-flex flex-column mtContact">
													<div className="d-flex align-items-center justify-content-between">
														<label
															className="text-white f14 mb6"
															htmlFor="First Name*"
														>
															Surname*
														</label>
														<div className="redColor">
															{errors.surname &&
																errors.surname.type === "required" &&
																"Required"}
															{/* {errors.surname &&
																errors.surname.type === "maxLength" &&
																"Maximum 10 Characters Allowed"} */}
															{/* {errors.surname &&
																errors.surname.type === "pattern" &&
																"please enter valid name"} */}
														</div>
													</div>
													<div className="position-relative w-100">
														<input
															className="py-1 w-100"
															type="text"
															{...register("surname", {
																required: true,
																maxLength: 10,
																pattern:
																	/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
															})}
														/>
													</div>
												</div>
												<div className="col-12 d-flex flex-column mtContact">
													<div className="d-flex align-items-center justify-content-between">
														<label
															className="text-white f14 mb6"
															htmlFor="First Name*"
														>
															Email Address*
														</label>
														<div className="redColor">
															{errors.email &&
																errors.email.type === "required" &&
																"Required"}
															{errors.email &&
																errors.email.type === "pattern" &&
																"Invalid Email Address"}
														</div>
													</div>

													<div className="w-100">
														<input
															className="py-1 w-100"
															type="email"
															{...register("email", {
																required: true,
																pattern:
																	/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
															})}
														/>
													</div>
												</div>
												<div className="col-12 col-md-6 d-flex flex-column mtContact">
													<label
														className="text-white f14 mb6"
														htmlFor="First Name*"
													>
														Phone*
													</label>
													<div className="position-relative w-100">
														<input className="py-1 w-100" type="number" />
													</div>
												</div>
												<div className="col-12 col-md-6 d-flex flex-column mtContact">
													<label
														className="text-white f14 mb6"
														htmlFor="First Name*"
													>
														Company*
													</label>
													<div className="position-relative w-100">
														<input className="py-1 w-100" type="text" />
													</div>
												</div>
												<div className="col-12 position-relative d-flex flex-column mtContact">
													<div className="d-flex justify-content-between align-items-center">
														<label
															className="text-white f14 mb6"
															htmlFor="First Name*"
														>
															Message*
														</label>
														<div className="redColor">
															{errors.messageT &&
																errors.messageT.type === "required" &&
																"Required"}
														</div>
													</div>

													<textarea
														{...register("messageT", {
															required: true,
														})}
													/>
												</div>
											</div>

											<div className="mt-4 w-100 d-flex flex-column flex-lg-row align-items-center">
												<div className="btn_cont_submit">
													<button
														type="submit"
														className="f600 border-0 px-4 py-2 f14"
													>
														Submit
													</button>
												</div>
												<div className="mt-2 mt-lg-0">{error}</div>
											</div>
										</form>
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

export default ContactBody;
