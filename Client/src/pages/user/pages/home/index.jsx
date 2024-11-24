import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";

import { Footer } from "../../components/Footer";
import { Bike } from "./bike";
// import { "", "", "" } from "@image";
import { Link } from "react-router-dom";
import { BikeUpcoming } from "./bike/upcoming";
import { BikeUsed } from "./bike/used";
import { Scooter } from "./scooter";
import { ScooterUpcoming } from "./scooter/upcoming";
import { ScooterUsed } from "./scooter/used";
import { Rickshaw } from "./rickshaw";
import { RickshawUpcoming } from "./rickshaw/upcoming";
import { RickshawUsed } from "./rickshaw/used";
import { Car } from "./car";
import { CarUpcoming } from "./car/upcoming";
import { CarUsed } from "./car/used";

import { getBrand } from "../../../../api";


export function Home() {

  const [brand, setBrand] = useState([]);

  const brandData = async () => {
    const response = await getBrand();
    setBrand(response.data);
  }

  useEffect(() => {
    brandData();
  }, [])

  return (
    <>
      <div className="main-wrapper mt-2 ">
        <Navbar />
        <section className="banner-section">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={"https://res.cloudinary.com/dsp9kw0cm/image/upload/f_auto,q_auto/v1/evmarket/h3jvw4otrknxuk7uumiw"}
                  className="d-block w-100 h-[270px] sm:h-[500px]"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={"https://res.cloudinary.com/dsp9kw0cm/image/upload/f_auto,q_auto/v1/evmarket/ans3etxrrexnx9x5n062"}
                  className="d-block w-100 h-[270px] sm:h-[500px]"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={"https://res.cloudinary.com/dsp9kw0cm/image/upload/f_auto,q_auto/v1/evmarket/yezjmofajnddmbyyt9rz"}
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
                  <img src={""} alt="icons" height="80px" width="80px" />
                  <h6 className="mt-3">New EV</h6>
                </a>
              </div> */}

              <div className="grid grid-cols-6 gap-1">
                <div className="md:col-span-1 col-span-2 shadow-sm mx-auto md:px-8 px-3 md:py-2 py-1 rounded-[8px] mb-2">
                  <a href="">
                    <img
                      src={""}
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
                      src={""}
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
                      src={""}
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
                      src={""}
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
                      src={""}
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
                      src={""}
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
                  </div>
                  <div className="tab-pane fade" id="e-bike_up">
                    <BikeUpcoming />
                  </div>
                  <div className="tab-pane fade" id="e-bike_us">
                    <BikeUsed />
                  </div>
                  <div className="text-center">
                    <Link
                      to={"/bike"}
                      className="btn btn-view text"
                    >
                      View All
                    </Link>
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
                  </div>
                  <div className="tab-pane fade" id="e-scooter_up">
                    <ScooterUpcoming />
                  </div>
                  <div className="tab-pane fade" id="e-scooter_us">
                    <ScooterUsed />
                  </div>
                </div>
                <div className="text-center">
                  <Link
                    to={"/scooter"}
                    className="btn btn-view text"
                  >
                    View All
                  </Link>
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
                      Br{" "}
                    </span>{" "}
                    and
                  </h2>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-4">

              {brand.map((brandInfo) => (
                <div className="lg:col-span-1 sm:col-span-2 col-span-3 " key={brandInfo._id}>
                  <a href="#" className="category-links p-0 shadow-sm hover:text-white">
                    <img
                      src={brandInfo.brand_logo}
                      alt={brandInfo.brand_name}
                      className="rounded-t-lg w-full h-[100px]"
                    />
                    <p className="h-[40px] mt-3">{brandInfo.brand_name}</p>
                  </a>
                </div>
              ))}


              
            </div>
          </div>
        </section>


        {/* E-Bicycle */}
        <section className="featured-section s_box section-blk py-0 section-blk blog-blk my-0">
          <div className="container">
            <div className="row ">
              <div className="col-sm-12 my-4">
                <h4 className="text-[26px] font-semibold mb-4">Electric Rickshaws Zone</h4>
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
                              Electric Rickshaws
                            </a>
                          </li>
                          <li>
                            <a
                              className="rounded-3"
                              data-bs-toggle="tab"
                              href="#e-bicycle_up"
                            >
                              Upcoming Electric Rickshaws
                            </a>
                          </li>
                          <li>
                            <a
                              className="rounded-3"
                              data-bs-toggle="tab"
                              href="#e-bicycle_us"
                            >
                              Used Electric Rickshaws
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body tab-content">
                  <div className="tab-pane active" id="e-bicycle">
                    <Rickshaw />
                  </div>
                  <div className="tab-pane fade" id="e-bicycle_up">
                    <RickshawUpcoming />
                  </div>
                  <div className="tab-pane fade" id="e-bicycle_us">
                    <RickshawUsed />
                  </div>
                </div>
                <div className="text-center">
                  <Link
                    to={"/bicycle"}
                    className="btn btn-view text"
                  >
                    View All
                  </Link>
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
                  </div>
                  <div className="tab-pane fade" id="e-car_up">
                    <CarUpcoming />
                  </div>
                  <div className="tab-pane fade" id="e-car_us">
                    <CarUsed />
                  </div>
                </div>
                <div className="text-center">
                  <Link
                    to={"/car"}
                    className="btn btn-view text"
                  >
                    View All
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End E-Car */}


        <br />
        <div className="btn">
          <Link
            to={"/two-details"}
            className="bg-slate-900 text-white mb-3 p-2 mx-2"
          >
            Two details
          </Link>
          <Link
            to={"/three-details"}
            className="bg-slate-900 text-white mb-3 p-2 mx-2"
          >
            Three details
          </Link>
          <Link
            to={"/four-details"}
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
