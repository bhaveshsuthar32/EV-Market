import React from "react";
import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";
import { Bike } from "@Home/Bike";
import { cowork01, cowork02, cowork03 } from "@image";
import { Link } from "react-router-dom";


export function Home() {

  return (
    <>
      <div className="main-wrapper mt-[70px]">
        <Navbar />
        <section className="banner-section">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={cowork01}
                  className="d-block w-100 h-[300px] sm:h-[500px]"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={cowork02}
                  className="d-block w-100 h-[300px] sm:h-[500px]"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={cowork01}
                  className="d-block w-100 h-[300px] sm:h-[500px]"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={cowork03}
                  className="d-block w-100 h-[300px] sm:h-[500px]"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        {/* category section */}
        <section className="category-section">
          <div className="container">
            <div className="row px-3">
              <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                <a href="categories.html" className="category-links shadow-sm">
                  <img src={cowork01} alt="icons" height="80px" width="80px" />
                  <h6 className="mt-3">New EV</h6>
                </a>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                <a href="categories.html" className="category-links shadow-sm">
                  <img src={cowork01} alt="icons" height="80px" width="80px" />
                  <h6 className="mt-3">New EV</h6>
                </a>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                <a href="categories.html" className="category-links shadow-sm">
                  <img src={cowork01} alt="icons" height="80px" width="80px" />
                  <h6 className="mt-3">New EV</h6>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* E-Bike */}
        <section className="featured-section s_box section-blk py-4 section-blk blog-blk">
          <div className="container">
            <div className="row container">
              <div className="col-sm-12 my-4">
                <h4>Electric Bikes Zone</h4>
                <div className="row mb-2">
                  <div className="col-lg-12">
                    <div className="col-sm-12" data-aos="fade-up">
                      <div className="recommended-tabs-blk">
                        <ul className="nav gap-2 fw-bold" data-bs-tabs="tabs">
                          <li>
                            <a
                              className="active rounded-3"
                              aria-current="true"
                              data-bs-toggle="tab"
                              href="#e-bike"
                            >
                              Electric Bike
                            </a>
                          </li>
                          <li>
                            <a
                              className="rounded-3"
                              data-bs-toggle="tab"
                              href="#e-bike_up"
                            >
                              Upcoming Electric Bike
                            </a>
                          </li>
                          <li>
                            <a
                              className="rounded-3"
                              data-bs-toggle="tab"
                              href="#e-bike_us"
                            >
                              Used Electric Bike
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body tab-content">
                  <div className="tab-pane active" id="e-bike">
                    <Bike />
                    <div
                      className="col-md-6 text-md-end aos aos-init aos-animate d-flex mx-auto mt-3"
                      data-aos="fade-up"
                    >
                      <Link
                        to={"/twoWheeler"}
                        className="btn btn-view text-center d-flex mx-auto"
                      >
                        View All
                      </Link>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="e-bike_up">
                    <div className="owl-carousel featured-slider grid-view">
                      {/* {mainBike.map((bike, index) => (
                        <BikeCard key={index} bike={bike} />
                      ))} */}
                      <h6>bike1</h6>
                    </div>
                    <div
                      className="col-md-6 text-md-end aos aos-init aos-animate d-flex mx-auto mt-3"
                      data-aos="fade-up"
                    >
                      <a
                        href="/User/two_data"
                        className="btn btn-view text-center d-flex mx-auto"
                      >
                        View All
                      </a>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="e-bike_us">
                    <div className="owl-carousel featured-slider grid-view">
                      {/* {mainBike.map((bike, index) => (
                        <BikeCard key={index} bike={bike} />
                      ))} */}
                      <h6>Batman</h6>
                    </div>
                    <div
                      className="col-md-6 text-md-end aos aos-init aos-animate d-flex mx-auto mt-3"
                      data-aos="fade-up"
                    >
                      <a
                        href="/User/two_data"
                        className="btn btn-view text-center d-flex mx-auto"
                      >
                        View All
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End E-Bike */}

        {/* Category */}
        <section className="category-section co">
          <div className="container">
            <div className="section-heading">
              <div className="row align-items-center">
                <div
                  className="col-md-6 aos aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <h2>
                    EV{" "}
                    <span style={{ backgroundColor: "red", padding: "4px" }}>
                      {" "}
                      Sp{" "}
                    </span>{" "}
                    ares
                  </h2>
                </div>
              </div>
            </div>
            <div className="row small">
              <div className="col-lg-2 col-md-3 col-sm-6">
                <a href="categories.html" className="category-links shadow-sm">
                  <img
                    src="/assets/img/evs_logo1.png"
                    alt="icons"
                    height="100px"
                    width="80px"
                  />
                  <p className="mt-3">Li Battery Packs(6)</p>
                </a>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <a href="categories.html" className="category-links shadow-sm">
                  <img
                    src="/assets/img/evs_logo2.png"
                    alt="icons"
                    height="100px"
                    width="80px"
                  />
                  <p className="mt-3">Battery Chargers(7)</p>
                </a>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <a href="categories.html" className="category-links shadow-sm">
                  <img
                    src="/assets/img/evs_logo3.png"
                    alt="icons"
                    height="100px"
                    width="80px"
                  />
                  <p className="mt-3">Motor Controller(13)</p>
                </a>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <a href="categories.html" className="category-links shadow-sm">
                  <img
                    src="/assets/img/evs_logo4.png"
                    alt="icons"
                    height="100px"
                    width="80px"
                  />
                  <p className="mt-3">BMS(6)</p>
                </a>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <a href="categories.html" className="category-links shadow-sm">
                  <img
                    src="/assets/img/evs_logo5.png"
                    alt="icons"
                    height="80px"
                    width="80px"
                  />
                  <p className="mt-3">EV Conversion Kits(22)</p>
                </a>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <a href="categories.html" className="category-links shadow-sm">
                  <img
                    src="/assets/img/evs_logo6.png"
                    alt="icons"
                    height="100px"
                    width="80px"
                  />
                  <p className="mt-3">Lithium Cells(5)</p>
                </a>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <a href="categories.html" className="category-links shadow-sm">
                  <img
                    src="/assets/img/evs_logo7.png"
                    alt="icons"
                    height="80px"
                    width="80px"
                  />
                  <p className="mt-3">Vehicle & Accessories(16)</p>
                </a>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <a href="categories.html" className="category-links shadow-sm">
                  <img
                    src="/assets/img/evs_logo8.png"
                    alt="icons"
                    height="100px"
                    width="80px"
                  />
                  <p className="mt-3">Connectors(1)</p>
                </a>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <a href="categories.html" className="category-links shadow-sm">
                  <img
                    src="/assets/img/evs_logo9.png"
                    alt="icons"
                    height="80px"
                    width="80px"
                  />
                  <p className="mt-3">Mechanical Accessories(5)</p>
                </a>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <a href="categories.html" className="category-links shadow-sm">
                  <img
                    src="/assets/img/evs_logo10.png"
                    alt="icons"
                    height="80px"
                    width="80px"
                  />
                  <p className="mt-3">Electronics Components(23)</p>
                </a>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <a href="categories.html" className="category-links shadow-sm">
                  <img
                    src="/assets/img/evs_logo11.png"
                    alt="icons"
                    height="80px"
                    width="80px"
                  />
                  <p className="mt-3">Tools & Equipments(27)</p>
                </a>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <a href="categories.html" className="category-links shadow-sm">
                  <img
                    src="/assets/img/evs_logo12.jpeg"
                    alt="icons"
                    height="100px"
                    width="80px"
                  />
                  <p className="mt-3">Wires & Cables(0)</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        <br />
        <div className="btn">
          <Link
            to={"/twodetails"}
            className="bg-slate-900 text-white mb-3 p-2 mx-2"
          >
            Two details
          </Link>
          <Link
            to={"/threedetails"}
            className="bg-slate-900 text-white mb-3 p-2 mx-2"
          >
            Three details
          </Link>
          <Link
            to={"/fourdetails"}
            className="bg-slate-900 text-white mb-3 p-2 mx-2"
          >
            Four details
          </Link>
        </div>

        {/* Category */}
        <Footer />

        <h1 className="text-[100px]">hello world</h1>
      </div>
    </>
  );
}
