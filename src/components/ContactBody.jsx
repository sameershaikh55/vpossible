import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const ContactBody = ({ status, message, onSubmitted }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

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

		console.log(status, "status");
		console.log(message, "message");
	};

	if (message !== null) {
		var messageSplit = message.split("<");
	}

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
												<div className="col-12 col-sm-6 d-flex flex-column mtContact">
													<label
														className="text-white f14 mb6"
														htmlFor="First Name*"
													>
														First Name*
													</label>
													<div className="position-relative w-100">
														<input
															style={
																errors.firstname && {
																	border: "2px solid #ff040d",
																}
															}
															{...register("firstname", {
																required: true,
																maxLength: 10,
																pattern:
																	/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
															})}
															className="py-1 w-100"
															type="text"
														/>
														<div className="redColor position-absolute end-0">
															{errors.firstname &&
																errors.firstname.type === "required" &&
																"name is required"}
															{errors.firstname &&
																errors.firstname.type === "maxLength" &&
																"Maximum 10 Characters Allowed"}
															{errors.firstname &&
																errors.firstname.type === "pattern" &&
																"please enter valid name"}
														</div>
													</div>
												</div>
												<div className="col-12 col-sm-6 d-flex flex-column mtContact">
													<label
														className="text-white f14 mb6"
														htmlFor="First Name*"
													>
														Surname*
													</label>
													<div className="position-relative w-100">
														<input
															style={
																errors.surname && {
																	border: "2px solid #ff040d",
																}
															}
															className="py-1 w-100"
															type="text"
															{...register("surname", {
																required: true,
																maxLength: 10,
																pattern:
																	/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
															})}
														/>
														<div className="redColor position-absolute end-0">
															{errors.surname &&
																errors.surname.type === "required" &&
																"name is required"}
															{errors.surname &&
																errors.surname.type === "maxLength" &&
																"Maximum 10 Characters Allowed"}
															{errors.surname &&
																errors.surname.type === "pattern" &&
																"please enter valid name"}
														</div>
													</div>
												</div>
												<div className="col-12 d-flex flex-column mtContact">
													<label
														className="text-white f14 mb6"
														htmlFor="First Name*"
													>
														Email Address*
													</label>
													<div className="position-relative w-100">
														<input
															style={
																errors.email && {
																	border: "2px solid #ff040d",
																}
															}
															className="py-1 w-100"
															type="email"
															{...register("email", {
																required: true,
																pattern:
																	/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
															})}
														/>
														<div className="redColor position-absolute end-0">
															{errors.email &&
																errors.email.type === "required" &&
																"Email is required"}
															{errors.email &&
																errors.email.type === "pattern" &&
																"please enter valid email"}
														</div>
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
														<input
															style={
																errors.phone && {
																	border: "2px solid #ff040d",
																}
															}
															className="py-1 w-100"
															type="number"
															{...register("phone", {
																required: true,
																minLength: 8,
																maxLength: 11,
															})}
														/>
														<div className="redColor position-absolute end-0">
															{errors.phone &&
																errors.phone.type === "required" &&
																"name is required"}
															{errors.phone &&
																errors.phone.type === "minLength" &&
																"please enter valid phone number"}
															{errors.phone &&
																errors.phone.type === "maxLength" &&
																"please enter valid phone number"}
														</div>
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
														<input
															style={
																errors.company && {
																	border: "2px solid #ff040d",
																}
															}
															className="py-1 w-100"
															type="text"
															{...register("company", {
																required: true,
																maxLength: 15,
															})}
														/>
														<div className="redColor position-absolute end-0">
															{errors.company &&
																errors.company.type === "required" &&
																"name is required"}
															{errors.company &&
																errors.company.type === "maxLength" &&
																"please enter valid name"}
														</div>
													</div>
												</div>
												<div className="col-12 d-flex flex-column mtContact">
													<label
														className="text-white f14 mb6"
														htmlFor="First Name*"
													>
														Message*
													</label>
													<textarea {...register("messageT")} />
												</div>
											</div>

											<div className="mt-4 w-100 d-flex flex-column flex-lg-row align-items-center">
												<div className="d-inline-block">
													<button
														type="submit"
														className="f600 border-0 px-4 py-2 f14 w-100"
													>
														Submit
													</button>
												</div>
												<p
													style={{
														color:
															(status === "error" && "#FF5555") || "#12D28D",
													}}
													className="ms-3 mb-0 f14"
												>
													{messageSplit && messageSplit[0]}
												</p>
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
