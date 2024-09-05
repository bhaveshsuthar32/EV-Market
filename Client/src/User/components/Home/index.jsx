import React from "react";
import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";
import { Bike } from "@Home/Bike";
import { cowork01, cowork02, cowork03 } from "@image";
import { Link } from "react-router-dom";
import { BikeUpcoming } from "@Home/Bike/upcoming";
import { BikeUsed } from "./Bike/used";
import { Scooter } from "@Home/Scooter";
import { ScooterUpcoming } from "@Home/Scooter/upcoming";
import { ScooterUsed } from "@Home/Scooter/used";
import { Bicycle } from "@Home/Bicycle";
import { BicycleUpcoming } from "@Home/Bicycle/upcoming";
import { BicycleUsed } from "@Home/Bicycle/used";
import { Car } from "./Car";
import { CarUpcoming } from "./Car/upcoming";
import { CarUsed } from "./Car/used";


export function Home() {

  return (
    <>
      <div className="main-wrapper mt-[50px]">
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
                  className="d-block w-100 h-[270px] sm:h-[500px]"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={cowork02}
                  className="d-block w-100 h-[270px] sm:h-[500px]"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={cowork01}
                  className="d-block w-100 h-[270px] sm:h-[500px]"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={cowork03}
                  className="d-block w-100 h-[270px] sm:h-[500px]"
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
              {/* <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                <a href="categories.html" className="category-links shadow-sm text-center">
                  <img src={cowork01} alt="icons" height="80px" width="80px" />
                  <h6 className="mt-3">New EV</h6>
                </a>
              </div> */}

              <div className="grid grid-cols-6 gap-1">
                <div className="md:col-span-1 col-span-2 shadow-sm mx-auto md:px-8 px-3 md:py-2 py-1 rounded-[8px] mb-2">
                    <a href="">
                      <img
                        src={cowork01}
                        alt="icons"
                        height="100px"
                        width="100px"
                      />
                    </a>
                    <h4 className="text-center mt-2">abcd </h4>
                </div>
                <div className="md:col-span-1 col-span-2 shadow-sm mx-auto md:px-8 px-3 md:py-2 py-1 rounded-[8px] mb-2">
                    <a href="">
                      <img
                        src={cowork01}
                        alt="icons"
                        height="100px"
                        width="100px"
                      />
                    </a>
                    <h4 className="text-center mt-2">abcd </h4>
                </div>
                <div className="md:col-span-1 col-span-2 shadow-sm mx-auto md:px-8 px-3 md:py-2 py-1 rounded-[8px] mb-2">
                    <a href="">
                      <img
                        src={cowork01}
                        alt="icons"
                        height="100px"
                        width="100px"
                      />
                    </a>
                    <h4 className="text-center mt-2">abcd </h4>
                </div>
                <div className="md:col-span-1 col-span-2 shadow-sm mx-auto md:px-8 px-3 md:py-2 py-1 rounded-[8px] mb-2">
                    <a href="">
                      <img
                        src={cowork01}
                        alt="icons"
                        height="100px"
                        width="100px"
                      />
                    </a>
                    <h4 className="text-center mt-2">abcd </h4>
                </div>
                <div className="md:col-span-1 col-span-2 shadow-sm mx-auto md:px-8 px-3 md:py-2 py-1 rounded-[8px] mb-2">
                    <a href="">
                      <img
                        src={cowork01}
                        alt="icons"
                        height="100px"
                        width="100px"
                      />
                    </a>
                    <h4 className="text-center mt-2">abcd </h4>
                </div>
                <div className="md:col-span-1 col-span-2 shadow-sm mx-auto md:px-8 px-3 md:py-2 py-1 rounded-[8px] mb-2">
                    <a href="">
                      <img
                        src={cowork01}
                        alt="icons"
                        height="100px"
                        width="100px"
                      />
                    </a>
                    <h4 className="text-center mt-2">abcd </h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* E-Bike */}
        <section className="featured-section s_box section-blk py-0 section-blk blog-blk my-0">
          <div className="container">
            <div className="row ">
              <div className="col-sm-12 my-4">
                <h4 className="text-[26px] font-semibold mb-4">Electric Bikes Zone</h4>
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
                      <BikeUpcoming />
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
                      <BikeUsed />
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


        {/* E-Scooter */}
        <section className="featured-section s_box section-blk py-0 section-blk blog-blk my-0">
          <div className="container">
            <div className="row ">
              <div className="col-sm-12 my-4">
                <h4 className="text-[26px] font-semibold mb-4">Electric Scooter Zone</h4>
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
                              href="#e-scooter"
                            >
                              Electric Scooter
                            </a>
                          </li>
                          <li>
                            <a
                              className="rounded-3"
                              data-bs-toggle="tab"
                              href="#e-scooter_up"
                            >
                              Upcoming Electric Scooter
                            </a>
                          </li>
                          <li>
                            <a
                              className="rounded-3"
                              data-bs-toggle="tab"
                              href="#e-scooter_us"
                            >
                              Used Electric Scooter
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body tab-content">
                  <div className="tab-pane active" id="e-scooter">
                    <Scooter />
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
                  <div className="tab-pane fade" id="e-scooter_up">
                    <div className="owl-carousel featured-slider grid-view">
                      <ScooterUpcoming />
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
                  <div className="tab-pane fade" id="e-scooter_us">
                    <div className="owl-carousel featured-slider grid-view">
                      <ScooterUsed />
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
        {/* End E-Scooter */}

        {/* Category */}
        <section className="category-section my-0">
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

        
        {/* E-Bicycle */}
        <section className="featured-section s_box section-blk py-0 section-blk blog-blk my-0">
          <div className="container">
            <div className="row ">
              <div className="col-sm-12 my-4">
                <h4 className="text-[26px] font-semibold mb-4">Electric Bicycle Zone</h4>
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
                              href="#e-bicycle"
                            >
                              Electric Bicycle
                            </a>
                          </li>
                          <li>
                            <a
                              className="rounded-3"
                              data-bs-toggle="tab"
                              href="#e-bicycle_up"
                            >
                              Upcoming Electric Bicycle
                            </a>
                          </li>
                          <li>
                            <a
                              className="rounded-3"
                              data-bs-toggle="tab"
                              href="#e-bicycle_us"
                            >
                              Used Electric Bicycle
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body tab-content">
                  <div className="tab-pane active" id="e-bicycle">
                    <Bicycle />
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
                  <div className="tab-pane fade" id="e-bicycle_up">
                    <div className="owl-carousel featured-slider grid-view">
                      <BicycleUpcoming />
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
                  <div className="tab-pane fade" id="e-bicycle_us">
                    <div className="owl-carousel featured-slider grid-view">
                      <BicycleUsed />
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
        {/* End E-Bicycle */}


        
        {/* E-Car */}
        <section className="featured-section s_box section-blk py-0 section-blk blog-blk my-0">
          <div className="container">
            <div className="row ">
              <div className="col-sm-12 my-4">
                <h4 className="text-[26px] font-semibold mb-4">Electric Car Zone</h4>
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
                              href="#e-car"
                            >
                              Electric Car
                            </a>
                          </li>
                          <li>
                            <a
                              className="rounded-3"
                              data-bs-toggle="tab"
                              href="#e-car_up"
                            >
                              Upcoming Electric Car
                            </a>
                          </li>
                          <li>
                            <a
                              className="rounded-3"
                              data-bs-toggle="tab"
                              href="#e-car_us"
                            >
                              Used Electric Car
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body tab-content">
                  <div className="tab-pane active" id="e-car">
                    <Car />
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
                  <div className="tab-pane fade" id="e-car_up">
                    <div className="owl-carousel featured-slider grid-view">
                      <CarUpcoming />
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
                  <div className="tab-pane fade" id="e-car_us">
                    <div className="owl-carousel featured-slider grid-view">
                      <CarUsed />
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
        {/* End E-Car */}


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

        {/* <h1 className="text-[100px]">add new section</h1> */}
      </div>
    </>
  );
}
