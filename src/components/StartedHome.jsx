import React from "react";
import { NavLink } from "react-router-dom";

import startedHome from "../assets/startedHome.svg";

const StartedHome = () => {
  return (
    <div>
      <div className="page_container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mx-auto px-sm-3 px-md-0 px-3">
              <div className="row">
                <div className="col-12">
                  <div className="started_container d-flex align-items-center justify-content-between w-100">
                    <div className="first ps-md-4 pe-md-4 pe-md-0 ps-md-5 w-100">
                      <h6 className="topText f14 f600 text-uppercase">
                        The vpossibilities are endless
                      </h6>
                      <h4 className="f800 text-white mb-0">
                        Get started today with a free{" "}
                        <br className="d-none d-lg-block" /> professional
                        consultation
                      </h4>
                      <div className="btn_cont">
                        <NavLink to="/contact">
                          <button className="border-0 px-3 f14 py-2 f600">
                            Claim Now
                          </button>
                        </NavLink>
                      </div>
                    </div>
                    <div className="d-none d-sm-block img_container">
                      <img
                        src={startedHome}
                        alt="Get started today with a free consultation"
                      />
                    </div>
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

export default StartedHome;
