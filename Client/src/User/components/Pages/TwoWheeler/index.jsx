import React from "react";
// import Navbar from "@components/Navbar"
import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";

export function TwoWheeler() {
  return (
    <>
      <div className="main-wrapper">

      <Navbar />

        <div className="list-content  mt-[60px] mt-lg-[60px]">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className=" listgrid-sidebar">
                  <div className="count-search mb-[20px] ">
                    <h4>
                      E-Bike for Sale{" "}
                      <span style={{ fontSize: "14px" }}>(Showing 12)</span>
                    </h4>
                  </div>
                  <div className="grid-view listgrid-sidebar row">

                    <div className="col-12 col-lg-3 col-md-4 col-sm-12 ">
                      <div className="card">
                        <div className="blog-widget">
                          <div className="blog-img text-center p-2">
                            <a href="">
                              <img
                                src={""}
                                className="img-fluid"
                                style={{ height: "170px", width: "150px" }}
                                alt="blog-img"
                              />
                            </a>
                          </div>
                          <div className="bloglist-content">
                            <div className="card-body p-3">
                              <div className="amount-details mb-2 ps-2 fw-bold text-dark">
                                <span>Abcd</span>
                                <div className="ratings">
                                  <span>New</span>
                                </div>
                              </div>
                              <div className="blogfeaturelink m-0">
                                <div className="blog-features ps-2 fw-bold mb-2">
                                  <p>₹ 101</p>
                                </div>
                              </div>
                              <div className="blog-location-details mt-1 grid grid-cols-4 text-center text-xs text-black mt-[-20px]">
                                <div>
                                  <img
                                    src="/assets_1/My_img/logo-1.png"
                                    alt=""
                                    className="w-8"
                                  />
                                  <p>Motor Type</p>
                                </div>
                                <div>
                                  <img
                                    src="/assets_1/My_img/logo-2.png"
                                    alt=""
                                    className="w-8"
                                  />
                                  <p>Range</p>
                                </div>
                                <div>
                                  <img
                                    src="/assets_1/My_img/logo-3.png"
                                    alt=""
                                    className="w-8"
                                  />
                                  <p>ChargeTime</p>
                                </div>
                                <div>
                                  <img
                                    src="/assets_1/My_img/logo-4.png"
                                    alt=""
                                    className="w-8"
                                  />
                                  <p>Transmission</p>
                                </div>
                              </div>
                              <div className="blog-location-details text-dark grid grid-cols-4 text-center text-xs mt-[-20px]">
                                <div>abcd1</div>
                                <div>abcd3</div>
                                <div>abcd5</div>
                                <div>Automatic Transmission</div>
                              </div>
                              <div className="amount-details">
                                <div className="amount">
                                  <a className="validrate" href="">
                                    <button className="bg-success text-white text-xs p-1 rounded">
                                      View data
                                    </button>
                                  </a>
                                </div>
                                <div className="ratings mt-2">
                                  <input type="checkbox" /> Add To Compare
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};


