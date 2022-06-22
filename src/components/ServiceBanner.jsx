import React from "react";

const ServiceBanner = () => {
  return (
    <div className="serviceBanner_container">
      <div className="page_container">
        <div className="container-fluid">
          <div className="row">
            <div className="10 col-12 mx-auto">
              <div className="innerServiceContainer">
                <h1 className="text-uppercase textColor2 f600 text-center f14 mb-2">
                  Services
                </h1>
                <h2 className="text-center f800 f48 mb-3">
                  <span className="themeBlue">Protect your IT network</span>{" "}
                  <span className="text-white">again any disaster</span>
                </h2>
                <p className="textColor2 text-center">
                  Maintaining a secure and stable IT network is now as important
                  as ever for your business. With our wide range of IT services,
                  we’re confident that you’ll find something to fits your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
