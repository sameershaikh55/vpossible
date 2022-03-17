import React from "react";
// import { NavLink } from "react-router-dom";

// IMPORTS
import Footer from "../components/Footer";
import Header from "../components/Header";
import CommonBanner from "../components/CommonBanner";
import Accordion from "../components/Accordion";
import Question from "../components/Question";

const Support = () => {
	const faqData = [
		{
			t: "Are free anti-virus softwares any good?",
			p: (
				<p className="mb-0">
					First and foremost, you never want to go without security protection
					on your computer. Free Anti-Virus has very low detection rates.{" "}
					<a className="text-decoration-none" href="">
						Give us a call
					</a>{" "}
					and we will be happy to inform you of the latest security software we
					recommend and sell to all our clients for Spyware, Malware and Virus
					protection.
				</p>
			),
		},
		{
			t: "What is Cloud Backup?",
			p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita quidem laudantium aperiam esse earum vel sunt est officia illum! Alias fugiat illo quasi deleniti, fugit suscipit reiciendis vero aperiam repellendus minima, expedita harum saepe ab error. Beatae qui temporibus officiis in aperiam commodi delectus, vel, minima incidunt eligendi esse optio possimus at.",
		},
		{
			t: "What is the duration of a Managed Services contract?",
			p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita quidem laudantium aperiam esse earum vel sunt est officia illum! Alias fugiat illo quasi deleniti, fugit suscipit reiciendis vero aperiam repellendus minima, expedita harum saepe ab error. Beatae qui temporibus officiis in aperiam commodi delectus, vel, minima incidunt eligendi esse optio possimus at.",
		},
		{
			t: "How much does Managed IT Services cost?",
			p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita quidem laudantium aperiam esse earum vel sunt est officia illum! Alias fugiat illo quasi deleniti, fugit suscipit reiciendis vero aperiam repellendus minima, expedita harum saepe ab error. Beatae qui temporibus officiis in aperiam commodi delectus, vel, minima incidunt eligendi esse optio possimus at.",
		},
		{
			t: "How does flat rate billing save me money?",
			p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita quidem laudantium aperiam esse earum vel sunt est officia illum! Alias fugiat illo quasi deleniti, fugit suscipit reiciendis vero aperiam repellendus minima, expedita harum saepe ab error. Beatae qui temporibus officiis in aperiam commodi delectus, vel, minima incidunt eligendi esse optio possimus at.",
		},
		{
			t: "What exactly are Managed IT Services?",
			p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita quidem laudantium aperiam esse earum vel sunt est officia illum! Alias fugiat illo quasi deleniti, fugit suscipit reiciendis vero aperiam repellendus minima, expedita harum saepe ab error. Beatae qui temporibus officiis in aperiam commodi delectus, vel, minima incidunt eligendi esse optio possimus at.",
		},
		{
			t: "What kind of response times can I expect?",
			p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita quidem laudantium aperiam esse earum vel sunt est officia illum! Alias fugiat illo quasi deleniti, fugit suscipit reiciendis vero aperiam repellendus minima, expedita harum saepe ab error. Beatae qui temporibus officiis in aperiam commodi delectus, vel, minima incidunt eligendi esse optio possimus at.",
		},
		{
			t: "What should I do before I call for help?",
			p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita quidem laudantium aperiam esse earum vel sunt est officia illum! Alias fugiat illo quasi deleniti, fugit suscipit reiciendis vero aperiam repellendus minima, expedita harum saepe ab error. Beatae qui temporibus officiis in aperiam commodi delectus, vel, minima incidunt eligendi esse optio possimus at.",
		},
		{
			t: "What if we already have an internal IT department?",
			p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita quidem laudantium aperiam esse earum vel sunt est officia illum! Alias fugiat illo quasi deleniti, fugit suscipit reiciendis vero aperiam repellendus minima, expedita harum saepe ab error. Beatae qui temporibus officiis in aperiam commodi delectus, vel, minima incidunt eligendi esse optio possimus at.",
		},
		{
			t: "What types of systems does vPossible Solutions support?",
			p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita quidem laudantium aperiam esse earum vel sunt est officia illum! Alias fugiat illo quasi deleniti, fugit suscipit reiciendis vero aperiam repellendus minima, expedita harum saepe ab error. Beatae qui temporibus officiis in aperiam commodi delectus, vel, minima incidunt eligendi esse optio possimus at.",
		},
	];

	return (
		<div>
			<Header />
			<CommonBanner
				banner={{
					mainClass: "support_banner_Container",
					aboveTitle: "Support",
					title: "Frequently Asked Questions",
					belowTitle:
						"<p class='mb-0'>Got questions? We’ve got the answers you’re looking for.</p>",
				}}
			/>

			{/* BODY START */}
			<div className="support_container">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-11 col-lg-12 mx-auto">
								{faqData.map((prev, i) => {
									return <Accordion t={prev.t} p={prev.p} key={i} />;
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* BODY END */}

			<Question />
			<Footer support />
		</div>
	);
};

export default Support;
