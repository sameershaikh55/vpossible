import React from "react";

const ContactBody = () => {
	return (
		<div className="contact_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row gy-4">
								<div className="col-6">
									<label className="themeColor" htmlFor="First Name">
										First Name
									</label>
									<br />
									<input className="w-100" type="text" id="First Name" />
								</div>
								<div className="col-6">
									<label className="themeColor" htmlFor="Surname">
										Surname
									</label>
									<br />
									<input className="w-100" type="text" id="Surname" />
								</div>
								<div className="col-12">
									<label className="themeColor" htmlFor="Email Address">
										Email Address
									</label>
									<br />
									<input className="w-100" type="text" id="Email Address" />
								</div>
								<div className="col-6">
									<label className="themeColor" htmlFor="Phone (Optional)">
										Phone <span>(Optional)</span>
									</label>
									<br />
									<input className="w-100" type="text" id="Phone (Optional)" />
								</div>
								<div className="col-6">
									<label className="themeColor" htmlFor="Company (Optional)">
										Company <span>(Optional)</span>
									</label>
									<br />
									<input
										className="w-100"
										type="text"
										id="Company (Optional)"
									/>
								</div>
								<div className="col-12">
									<label className="themeColor" htmlFor="Message">
										Message
									</label>
									<br />
									<textarea className="w-100" type="text" id="Message" />
								</div>
								<div className="col-12 d-flex justify-content-end">
									<button>Submit</button>
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
