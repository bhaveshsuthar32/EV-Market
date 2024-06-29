import React, { useState, useEffect, useRef } from "react";
import { cowork01, cowork02, cowork03 } from "@image";
// import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function TwoDetails() {
  const [lastX, setLastX] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const scrollSpeed = 10;
      const mouseX = e.pageX - navRef.current.offsetLeft;
      navRef.current.scrollLeft += (lastX - mouseX) * scrollSpeed;
      setLastX(mouseX);
    };

    const handleMouseEnter = () => {
      setLastX(0);
    };

    const nav = navRef.current;
    nav.addEventListener("mousemove", handleMouseMove);
    nav.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      nav.removeEventListener("mousemove", handleMouseMove);
      nav.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [lastX]);

  //   seconde vehicle details like name it
  const [showOnRoad, setShowOnRoad] = useState(false);

  const onRoadPrice = () => {
    setShowOnRoad(true);
  };

  const cancelOnRoadPrice = () => {
    setShowOnRoad(false);
  };

  return (
    <>
      <div className="main-wrapper">
        {/* <Navbar /> */}
        <section className="pb-4 shadow-sm mt-28  bg-white">
          <div className=" shadow-sm">
            <div className="row px-2">
              <div className="col-12 ">
                <nav
                  ref={navRef}
                  className="horizontal-scroll-nav p-2 overflow-x-auto cursor-ew-resize whitespace-nowrap text-sm"
                  style={{ fontSize: "14px" }}
                >
                  <a className="px-3 inline-block" href="#overview">
                    OVERVIEW
                  </a>
                  <a className="px-3 inline-block" href="#price">
                    PRICE
                  </a>
                  <a className="px-3 inline-block" href="#features">
                    FEATURES
                  </a>
                  <a className="px-3 inline-block" href="#trending">
                    TRENDING SCOOTERS
                  </a>
                  <a className="px-3 inline-block" href="#summary">
                    SUMMARY
                  </a>
                  {/* <a className="px-3 inline-block" href="#dealers">DEALERS</a> */}
                  {/* <a className="px-3 inline-block" href="#reviews">REVIEWS</a> */}
                  <a className="px-3 inline-block" href="#color">
                    COLOURS
                  </a>
                  <a className="px-3 inline-block" href="#faq">
                    FAQs
                  </a>
                </nav>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 h-[500px] ">
            <div className="border-[1px]">
              <div className="card-body px-4 m-4 container">
                <div id="carouselExample" className="carousel slide">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={cowork01}
                        className="d-block w-100 lg:h-[350px] h-[300px]"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={cowork02}
                        className="d-block w-100 h-[300px] lg:h-[350px]"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={cowork03}
                        className="d-block w-100 h-[300px] lg:h-[350px]"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon bg-dark"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon bg-dark"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="inline-block p-2">
                <Link to={"#"}>
                  <span className="ml-4">
                    <Link to={"#"} className="">
                      {/* <FontAwesomeIcon icon="fa-solid fa-palette " /> */}
                      Colors
                    </Link>
                  </span>
                  <span className="mx-4">
                    <Link to={"#"} className="">
                      <i className="fa-regular fa-image"></i> Images
                    </Link>
                  </span>
                  <span className="mx-4">
                    <Link to={"#"} className="">
                      <i className="fa-regular fa-file-video"></i> Videos
                    </Link>
                  </span>
                </Link>
              </div>
            </div>
            <div className="border-2 border-red-600 ">
              <div className="px-0 border-2">
                <div className=" px-4 mx-2">
                  <div className=" mb-2 py-1 relative">
                    <div className="grid grid-cols-2">
                      <div className="border-[1px] p-2 px-4">
                        <strong>Vehicle Type</strong> <br />
                        <strong>Honda</strong>
                      </div>
                      <div className="border-[1px] p-2 px-4">
                        <strong>City</strong> <br />
                        <strong>Vadodra</strong>
                      </div>
                    </div>
                  </div>
                </div>
                {/* First div */}
                <div
                  className={`row ${showOnRoad ? "hidden" : "block"} px-3 mx-2`}
                  id="price_details"
                >
                  <div className="col-12">
                    <div className="mt-2">
                      <h5>
                        ₹ <span>120000</span>
                        <span>
                          <a
                            href="#"
                            className="text-primary text-xs"
                            onClick={onRoadPrice}
                          >
                            Click on-road price
                          </a>
                        </span>
                      </h5>
                      <p>
                        <a href={""}>Color</a>
                      </p>
                    </div>
                    <div className="row my-2">
                      <div className="col-lg-8 col-sm-12" id="emi_1">
                        <p className="text-base">
                          EMI Rs. <span id="monthlyShowEMI_2"></span>/month{" "}
                          <br />
                          <span>
                            <a
                              href="#"
                              className="text-primary"
                              id="emiCalculator2"
                            >
                              EMI Calculator
                            </a>
                          </span>
                        </p>
                      </div>
                      <div className="col-lg-4 col-sm-12">
                        <button className="bg-danger rounded-1 text-white py-1 px-3 text-xs border-none">
                          Get EMI Offers
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second div */}
                <div
                  className={` ${
                    showOnRoad ? "block" : "hidden"
                  } absolute w-full`}
                  id="onRoadPriceDetails"
                >
                  <div className=" border-end">
                    <div className="mt-2 px-3 py-0">
                      <div className="grid grid-rows-4">
                        <div className="">
                          <h5>On road price</h5>
                        </div>
                        <div className="">
                          <h3
                            onClick={cancelOnRoadPrice}
                            className="bg-danger rounded-1 text-white py-1 text-center text-sm border-none cursor-pointer"
                          >
                            Cancel
                          </h3>
                        </div>
                      </div>

                      <div className="row pb-2">
                        <div className="col-7 ">
                          <span>Ex-price</span>
                          <br />
                          <span>RTO</span>
                          <br />
                          <span>RTO Expense</span>
                          <br />
                          <span>Smart Card</span>
                          <br />
                          <span>Insurance (Comprehensive)</span>
                          <br />
                          <span>Handling Charges</span>
                        </div>
                        <div className="col-5">
                          <p>
                            <span>₹ </span>
                            <span id="shr_value" className="bg-slate-600">
                              10
                            </span>
                            <br />
                            <span>₹ </span>
                            <span id="rto_value">10</span>
                            <br />
                            <span>₹ </span>
                            <span id="rtoExp_value">10</span>
                            <br />
                            <span>₹ </span>
                            <span id="smart_value">10</span>
                            <br />
                            <span>₹ </span>
                            <span id="ins_value">10</span>
                            <br />
                            <span>₹ </span>
                            <span id="hand_value">10</span>
                            <br />
                          </p>
                        </div>
                      </div>
                      <div className="row border-t-2 w-[550px] my-2">
                        <div className="col-7">
                          <p>Total Price</p>
                        </div>
                        <div className="col-5">
                          <p>
                            <span>₹ </span>
                            <span id="total"></span>
                          </p>
                        </div>
                      </div>
                      <div className="row my-2 mt-2" id="emi_1">
                        <div className="col-4">
                          <p style={{ font: "12px" }}>
                            EMI Rs. <span id="monthlyShowEMI_1"></span>/month{" "}
                            <br />
                            <span>
                              <a
                                href="#"
                                className="text-primary"
                                id="emiCalculator"
                              >
                                {" "}
                                EMI Calculator
                              </a>
                            </span>
                          </p>
                        </div>
                        <div className="col-2">
                          <button className="bg-danger rounded-1 text-white py-1 px-3 text-xs border-none">
                            Get EMI Offers
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
