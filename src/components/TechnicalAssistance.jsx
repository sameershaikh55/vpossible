import React from "react";
import { Link } from "react-router-dom";
import i1 from "../assets/technicalAssistance/i1.svg";
import i2 from "../assets/technicalAssistance/i2.svg";
import i3 from "../assets/technicalAssistance/i3.svg";

const TechnicalAssistance = () => {
  const technicalAssistance = [
    {
      picture: i1,
      text: "Send us an email",
      link: "mailto:voperations@vpossible.com.au",
    },
    {
      picture: i2,
      text: "Call us on (03) 9088 6275",
      link: "tel:(03) 9088 6275",
    },
  ];

  return (
    <div className="technical_assistance_container">
      <div className="inner_technical_assistance_container">
        <div className="container-fluid">
          <div className="row">
            <div className="text_head">
              <h3 className="text-center f24 f900 mb-3">
                Need technical assistance?
              </h3>
              <p className="text-center f16 textColor mb-0 f400">
                Visit our{" "}
                <Link className="text-decoration-none" to="/support">
                  Support
                </Link>{" "}
                page to find the answers you’re looking for.
                <br />
                Alternatively, use the following contact lines for direct
                technical support.
              </p>
            </div>

            <div className="container-fluid px-3">
              <div className="row gy-3 gy-sm-0">
                {technicalAssistance.map((content, i) => {
                  return (
                    <div key={i} className="col-12 col-md-4">
                      <a
                        href={content.link}
                        className="pointer text-decoration-none"
                      >
                        <div className="single_cta_container d-flex flex-row flex-sm-column justify-content-center align-items-center gap-2">
                          <img src={content.picture} alt={content.text} />
                          <p className="mb-0 text-white f14">{content.text}</p>
                        </div>
                      </a>
                    </div>
                  );
                })}
                <div className="col-12 col-md-4">
                  <button className="pointer text-decoration-none border-0 w-100">
                    <div className="single_cta_container d-flex flex-row flex-sm-column justify-content-center align-items-center gap-2">
                      <img src={i3} alt="Start a Live Chat" />
                      <p className="mb-0 text-white f14">Start a Live Chat</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalAssistance;
