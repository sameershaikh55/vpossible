import React, { useState } from "react";

// IMPORTS
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactBody from "../components/ContactBody";
import CommonBanner from "../components/CommonBanner";
import TechnicalAssistance from "../components/TechnicalAssistance";
import Seo from "../components/Seo";
import Sidebar from "../components/Sidebar";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const OnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Header ClickEvent={OnClick} isOpen={isOpen} />
      <Sidebar ClickEvent={OnClick} isOpen={isOpen} />
      <Seo
        title="Contact Us - vPossible.au"
        description="Contact Us – vPossible is the premier IT services company in Australia. We provide the best services for businesses, companies and organisations."
        canonical="https://www.vpossible.com.au/contact"
        robot="https://www.vpossible.com.au/contact"
      />

      <CommonBanner
        banner={{
          mainClass: "contact_banner_Container",
          aboveTitle: "Contact",
          title: "Get In-Touch",
          belowTitle:
            "<p class='mb-0'>Write to us for sales or public relations enquiries, or to provide feedback. <br class='d-none d-md-block' /> For any technical assistance, please visit our <a href='/support' class='text-decoration-none themeBlue'>Support</a> page.</p>",
        }}
      />

      <ContactBody />
      <TechnicalAssistance />
      <Footer contact />
    </div>
  );
};

export default Contact;
