import React from "react";
import { Link } from "react-router-dom";

const Question = () => {
	return (
		<div className="question_container">
			<div className="text-center">
				<h3>Still have questions?</h3>
				<p className="textColor">
					Speak to our industry experts to resolve those pricklier technical
					issues.
				</p>

				<Link to="/contact">
					<button className="btn">Get In-Touch</button>
				</Link>
			</div>
		</div>
	);
};

export default Question;
