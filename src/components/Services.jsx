import React from "react";

// IMPORTS
import ServiceCard from "./ServiceCard";

// IMPORTS
import i1 from "../assets/serviceImg/i1.svg";
import i2 from "../assets/serviceImg/i2.svg";
import i3 from "../assets/serviceImg/i3.svg";
import i4 from "../assets/serviceImg/i4.svg";
import i5 from "../assets/serviceImg/i5.svg";
import i6 from "../assets/serviceImg/i6.svg";
import i7 from "../assets/serviceImg/i7.svg";
import i8 from "../assets/serviceImg/i8.svg";

// IMPORTS ICONS
import i1i from "../assets/serviceIcon/i1.svg";
import i2i from "../assets/serviceIcon/i2.svg";
import i3i from "../assets/serviceIcon/i3.svg";
import i4i from "../assets/serviceIcon/i4.svg";
import i5i from "../assets/serviceIcon/i5.svg";
import i6i from "../assets/serviceIcon/i6.svg";
import i7i from "../assets/serviceIcon/i7.svg";
import i8i from "../assets/serviceIcon/i8.svg";

const Services = () => {
  const data = [
    {
      icon: i1i,
      bg: i1,
      title: "Managed IT Services",
      para: "24/7 maintenance and monitoring that keeps your computers, servers, and systems up and running.",
    },
    {
      icon: i2i,
      bg: i2,
      title: "IT Consultancy",
      para: "Our professionals are expert to demonstrate the best IT consultancy in Australlia.",
    },
    {
      icon: i3i,
      bg: i3,
      title: "Cloud Services",
      para: "We help you to work anywhere from the world for 24/7. Never worry about buying a server gain.",
    },
    {
      icon: i4i,
      bg: i4,
      title: "Communications",
      para: "We provide effective communication,and try to understand the emotion and intention behind every information.",
    },
    {
      icon: i5i,
      bg: i5,
      title: "Cloud & IT Infrastructure",
      para: "Finding the right infrastructure and cloud solution is key to reducing IT costs and to allow for swift scalability to meet business needs.",
    },
    {
      icon: i6i,
      bg: i6,
      title: "IT Security",
      para: "Our experience and the powerful cybersecurity system provide you and your team to work in a safe online environment.",
    },
    {
      icon: i7i,
      bg: i7,
      title: "Backup & Disaster Recovery",
      para: "Keeping your company’s data safe is important and critical as there is a notifiable data breaches occurs in the business world.",
    },
    {
      icon: i8i,
      bg: i8,
      title: "Helpdesk & Support",
      para: "Helpdesk is a department in the organization that is responsible for answering all technical questions of the user. ",
    },
  ];

  return (
    <div className="services_container">
      <div className="page_container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mx-auto px-3">
              <div className="row">
                <div className="col-md-8 mx-auto">
                  <div className="text-center">
                    <p className="topText textColor text-uppercase f14 f500">
                      Services
                    </p>
                    <h2 className="mb-2">
                      Protect your IT network against any disaster
                    </h2>
                    <p className="bottomText textColor">
                      vPossible is a company offering high-quality IT support
                      and services across Australia. With full-services in IT,
                      we also provide the maintenance service to fit the needs
                      of your business, home, or Company.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row gy-4 mt-1">
                {data.map((item, i) => {
                  return <ServiceCard item={item} i={i} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
