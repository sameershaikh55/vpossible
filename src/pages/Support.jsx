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
					on your computer. Free Anti-Virus has very low detection rates.
					<a className="text-decoration-none mx-1" href="tel:(03) 9088 6275">
						Give us a call
					</a>
					and we will be happy to inform you of the latest security software we
					recommend and sell to all our clients for Spyware, Malware and Virus
					protection. First and foremost, you never want to go without security
					protection on your computer. Free Anti-Virus has very low detection
					rates.
				</p>
			),
		},
		{
			t: "What is Cloud Backup?",
			p: (
				<p className="mb-0">
					Cloud backup also known as Online Backup is the process where your
					onsite backups are transferred to an offsite server every night. The
					server is located in a secure data centre in Perth. Cloud Backup
					replaces the need for someone to take a backup home each night. It is
					more secure, reliable and easier to manage and monitor.
				</p>
			),
		},
		{
			t: "What is the duration of a Managed Services contract?",
			p: (
				<p className="mb-0">
					Managed IT Services Contracts vary by provider. Some providers offer
					month-to-month programs, while others require a multi-year contract.
					Some have a very high startup cost and lower monthly, while others
					require a multi-year contract. Some have a very high startup cost and
					lower monthly, while others offer a middle of the road monthly cost
					and spread the cost of startup over the term of the agreement.
				</p>
			),
		},
		{
			t: "How much does Managed IT Services cost?",
			p: (
				<p className="mb-0">
					Our service model uses a fixed monthly fee, which is based on the size
					and complexity of your particular network. Once contracted, your
					Managed IT Services will cover maintenance and support for every
					component of your network, providing you with peace of mind and the
					ability to accurately forecast your IT maintenance costs.
				</p>
			),
		},
		{
			t: "How does flat rate billing save me money?",
			p: (
				<p className="mb-0">
					Flat-rate billing gives you the ability to budget your IT expenses so
					you can better focus on your core business goals. We customise each
					service package for your unique business, so you only pay for what you
					need. NanoSoft serves as your “one stop shop” for all your managed IT
					services needs. And we do it all for one fixed monthly cost – We Don’t
					Profit from your Pain!
				</p>
			),
		},
		{
			t: "What exactly are Managed IT Services?",
			p: (
				<p className="mb-0">
					Simply put, NanoSoft Managed IT Services means we take care of your
					entire information technology requirement. We manage all your hardware
					and software sourcing, installation, technical support, and IT
					staffing needs. It also means NanoSoft acts as your go-to consultancy
					and support team, providing scheduled maintenance and upgrading of
					your systems, along with emergency assistance to keep your business up
					and running.
				</p>
			),
		},
		{
			t: "What kind of response times can I expect?",
			p: (
				<p className="mb-0">
					We work with each client to establish specific expectations. Our
					measurable service levels specify clear consequences for not living up
					to agreed-upon expectations.
				</p>
			),
		},
		{
			t: "What should I do before I call for help?",
			p: (
				<p className="mb-0">
					When possible, write down any information about error messages and
					take screen shots your issue. Next, attempt to recreate the issue.
					Often times, it helps to close the program and restart the computer to
					reset the system, and possibly resolve the problem.
				</p>
			),
		},
		{
			t: "What if we already have an internal IT department?",
			p: (
				<p className="mb-0">
					No problem! We offer scalable solutions that can be tailored to meet
					your specific needs. Whether you need a full package of managed IT
					services and consulting, security solutions or service desk support,
					NanoSoft makes it simple with an affordable and customised flat rate
					service plan.
				</p>
			),
		},
		{
			t: "What types of systems does vPossible Solutions support?",
			p: (
				<p className="mb-0">
					We pride ourselves on being “ecosystem agnostic”: whether you use
					Google Apps or Office365, Windows or Mac, Android or iOS, we will
					support your team. Need to install a server onsite or host one
					virtually on Amazon or Azure? We will support you. Need to transition
					from one ecosystem to another? We’ll be there for you.
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
