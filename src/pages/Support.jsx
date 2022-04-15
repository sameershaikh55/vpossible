import React, { useState } from "react";

// IMPORTS
import Footer from "../components/Footer";
import Header from "../components/Header";
import CommonBanner from "../components/CommonBanner";
import Accordion from "../components/Accordion";
import Question from "../components/Question";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

const Support = () => {
	const [isOpen, setIsOpen] = useState(false);

	const OnClick = () => {
		setIsOpen(!isOpen);
	};

	const faqData = [
		{
			t: "Are free anti-virus softwares any good?",
			p: (
				<p className="mb-0">
					First and foremost, you never want to go without security protection
					on your computer. Free Anti-Virus has very low detection rates.{" "}
					<Link className="text-decoration-none" to="/contact">
						Give us a call
					</Link>{" "}
					and we will be happy to inform you of the latest security software we
					recommend and sell to all our clients for Spyware, Malware and Virus
					protection.
				</p>
			),
		},
		{
			t: "What is Cloud Backup?",
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
			t: "What is the duration of a Managed Services contract?",
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
			t: "How much does Managed IT Services cost?",
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
			t: "How does flat rate billing save me money?",
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
			t: "What exactly are Managed IT Services?",
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
			t: "What kind of response times can I expect?",
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
			t: "What should I do before I call for help?",
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
			t: "What if we already have an internal IT department?",
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
			t: "What types of systems does vPossible Solutions support?",
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
	];

	return (
		<div>
			<Header ClickEvent={OnClick} isOpen={isOpen} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />

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
							<div className="col-12 mx-auto support_inner">
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
