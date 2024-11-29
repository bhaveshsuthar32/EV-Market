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
      <div className="main-wrapper">
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

              <div className="grid grid-cols-6 gap-1">
                <div className="md:col-span-1 col-span-2 shadow-sm mx-auto md:px-8 px-3 md:py-2 py-1 rounded-[8px] mb-2">
                  <a href="">
                    <img
                      src={"https://res.cloudinary.com/dsp9kw0cm/image/upload/v1732627135/evmarket/isaazfhewvhlz9urq1z3.png"}
                      alt="icons"
                      className=" h-[85px] w-[100px]"
                    />
                  </a>
                  <h4 className="text-center mt-3 mb-2 text-[14px] font-semibold">New EV </h4>
                </div>
                <div className="md:col-span-1 col-span-2 shadow-sm mx-auto md:px-8 px-3 md:py-2 py-1 rounded-[8px] mb-2">
                  <a href="">
                    <img
                      src={"https://res.cloudinary.com/dsp9kw0cm/image/upload/v1732627634/evmarket/ivbcghmgt9objk5qxu4n.png"}
                      alt="icons"
                      className=" h-[85px] w-[100px]"
                    />
                  </a>
                  <h4 className="text-center mt-3 mb-2 text-[14px] font-semibold">Used EV </h4>
                </div>

                <div className="md:col-span-1 col-span-2 shadow-sm mx-auto md:px-8 px-3 md:py-2 py-1 rounded-[8px] mb-2">
                  <a href="">
                    <img
                      src={"https://res.cloudinary.com/dsp9kw0cm/image/upload/v1732437742/evmarket/aevzhwixn5pl9h4xvzvc.png"}
                      alt="icons"
                      className=" h-[85px] w-[100px]"
                    />
                  </a>
                  <h4 className="text-center mt-3 mb-2 text-[14px] font-semibold">EV Service </h4>
                </div>

                <div className="md:col-span-1 col-span-2 shadow-sm mx-auto md:px-8 px-3 md:py-2 py-1 rounded-[8px] mb-2">
                  <a href="">
                    <img
                      src={"https://res.cloudinary.com/dsp9kw0cm/image/upload/f_auto,q_auto/v1/evmarket/rd48arnc6s4lreqozdye"}
                      alt="icons"
                      className=" h-[85px] w-[100px]"
                    />
                  </a>
                  <h4 className="text-center mt-3 mb-2 text-[14px] font-semibold">Charging Point </h4>
                </div>

                <div className="md:col-span-1 col-span-2 shadow-sm mx-auto md:px-8 px-3 md:py-2 py-1 rounded-[8px] mb-2">
                  <a href="">
                    <img
                      src={"https://res.cloudinary.com/dsp9kw0cm/image/upload/v1732863305/c_logo16_j5yevh.png"}
                      alt="icons"
                      className=" h-[85px] w-[100px]"
                    />
                  </a>
                  <h4 className="text-center mt-3 mb-2 text-[14px] font-semibold">Dealers </h4>
                </div>

                <div className="md:col-span-1 col-span-2 shadow-sm mx-auto md:px-8 px-3 md:py-2 py-1 rounded-[8px] mb-2">
                  <a href="">
                    <img
                      src={"https://res.cloudinary.com/dsp9kw0cm/image/upload/v1732627634/evmarket/glwenl0eywpiifvjcd3s.png"}
                      alt="icons"
                      className=" h-[85px] w-[100px]"
                    />
                  </a>
                  <h4 className="text-center mt-3 mb-2 text-[14px] font-semibold">Sell EV </h4>
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
                <h4 className="text-[22px] md:text-[26px] font-semibold mb-4">Electric Bikes Zone</h4>
                <div className="row mb-2">
                  <div className="col-lg-12">
                    <div className="col-sm-12" data-aos="fade-up">
                      <div className="recommended-tabs-blk">
                        <ul className="nav gap-2 fw-bold" data-bs-tabs="tabs">
                          <li>
                            <a
                              className="active rounded-2 px-3 lg:py-2 py-1"
                              aria-current="true"
                              data-bs-toggle="tab"
                              href="#e-bike"
                            >
                              Electric Bike
                            </a>
                          </li>
                          <li>
                            <a
                              className="rounded-2 px-3 lg:py-2 py-1"
                              data-bs-toggle="tab"
                              href="#e-bike_up"
                            >
                              Upcoming E-Bike
                            </a>
                          </li>
                          <li>
                            <a
                              className="rounded-2 px-3 lg:py-2 py-1"
                              data-bs-toggle="tab"
                              href="#e-bike_us"
                            >
                              Used E-Bike
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
        <section className="featured-section s_box section-blk py-0 section-blk blog-blk mt-[90px]">
          <div className="container">
            <div className="row ">
              <div className="col-sm-12 my-4">
                <h4 className="text-[22px] md:text-[26px] font-semibold mb-4">Electric Scooter Zone</h4>
                <div className="row mb-2">
                  <div className="col-lg-12">
                    <div className="col-sm-12" data-aos="fade-up">
                      <div className="recommended-tabs-blk">
                        <ul className="nav gap-2 fw-bold" data-bs-tabs="tabs">
                          <li>
                            <a
                              className="active rounded-2 px-3 lg:py-2 py-1"
                              aria-current="true"
                              data-bs-toggle="tab"
                              href="#e-scooter"
                            >
                              E-Scooter
                            </a>
                          </li>
                          <li>
                            <a
                              className="rounded-2 px-3 lg:py-2 py-1"
                              data-bs-toggle="tab"
                              href="#e-scooter_up"
                            >
                              Upcoming E-Scooter
                            </a>
                          </li>
                          <li>
                            <a
                              className="rounded-2 px-3 lg:py-2 py-1"
                              data-bs-toggle="tab"
                              href="#e-scooter_us"
                            >
                              Used E-Scooter
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

        {/* Brand */}
        <section className="category-section mt-[-80px]">
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
            <div className="grid grid-cols-6 gap-8 px-12">

              {brand.map((brandInfo) => (
                <div className="lg:col-span-1 md:col-span-2 col-span-3 gap-3" key={brandInfo._id}>
                  <Link to="#" className="">
                    <img
                      src={brandInfo.brand_logo}
                      alt={brandInfo.brand_name}
                      className="md:w-[120px] w-[100px] md:h-[70px] h-[55px] mx-auto"
                    />
                  </Link>
                  <p className="h-[36px] text-[15px]  mt-2 text-center hover:cursor-pointer font-semibold ">{brandInfo.brand_name}</p>
                </div>
              ))}



            </div>
          </div>
        </section>


        {/* E-Rickshaws */}
        <section className="featured-section s_box section-blk py-0 section-blk blog-blk my-0">
          <div className="container">
            <div className="row ">
              <div className="col-sm-12 my-4">
                <h4 className="text-[22px] md:text-[26px] font-semibold mb-4">Electric Rickshaws Zone</h4>
                <div className="row mb-2">
                  <div className="col-lg-12">
                    <div className="col-sm-12" data-aos="fade-up">
                      <div className="recommended-tabs-blk ">
                        <ul className="nav gap-2 fw-bold" data-bs-tabs="tabs">
                          <li>
                            <a
                              className="active rounded-2 px-3 lg:py-2 py-1"
                              aria-current="true"
                              data-bs-toggle="tab"
                              href="#e-bicycle"
                            >

                              E-Rickshaws

                            </a>
                          </li>
                          <li>
                            <a
                              className="rounded-2 px-3 lg:py-2 py-1 "
                              data-bs-toggle="tab"
                              href="#e-bicycle_up"
                            >
                              Upcoming E-Rickshaws
                            </a>
                          </li>
                          <li>
                            <a
                              className="rounded-2 px-3 lg:py-2 py-1 "
                              data-bs-toggle="tab"
                              href="#e-bicycle_us"
                            >
                              Used E- Rickshaws
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
                    to={"/rickshaws"}
                    className="btn btn-view text"
                  >
                    View All
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End E-Rickshaws */}

        {/* Brand */}
        <section className="category-section ">
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
                      Sta{" "}
                    </span>{" "}
                    rtups
                  </h2>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-8 px-12">

              {brand.map((brandInfo) => (
                <div className="lg:col-span-1 md:col-span-2 col-span-3 gap-3" key={brandInfo._id}>
                  <Link to="#" className="">
                    <img
                      src={brandInfo.brand_logo}
                      alt={brandInfo.brand_name}
                      className="md:w-[120px] w-[100px] md:h-[70px] h-[55px] mx-auto"
                    />
                  </Link>
                  <p className="h-[36px] text-[15px] mt-2 text-center hover:cursor-pointer font-semibold ">{brandInfo.brand_name}</p>
                </div>
              ))}

            </div>
          </div>
        </section>


        {/* E-Car */}
        <section className="featured-section s_box section-blk py-0 section-blk blog-blk mt-0">
          <div className="container">
            <div className="row ">
              <div className="col-sm-12 my-4">
                <h4 className="text-[22px] md:text-[26px] font-semibold mb-4">Electric Car Zone</h4>
                <div className="row mb-2">
                  <div className="col-lg-12">
                    <div className="col-sm-12" data-aos="fade-up">
                      <div className="recommended-tabs-blk">
                        <ul className="nav gap-2 fw-bold" data-bs-tabs="tabs">
                          <li>
                            <a
                              className="active rounded-2 px-3 lg:py-2 py-1"
                              aria-current="true"
                              data-bs-toggle="tab"
                              href="#e-car"
                            >
                              Electric Car
                            </a>
                          </li>
                          <li>
                            <a
                              className="rounded-2 px-3 lg:py-2 py-1"
                              data-bs-toggle="tab"
                              href="#e-car_up"
                            >
                              Upcoming E-Car
                            </a>
                          </li>
                          <li>
                            <a
                              className="rounded-2 px-3 lg:py-2 py-1"
                              data-bs-toggle="tab"
                              href="#e-car_us"
                            >
                              Used E-Car
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
                <div className="text-center mb-8">
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

        {/* why electric vehicle */}
        <section className=" mb-4">
          <div className="grid grid-cols-2 mt-[50px]">
            <div className="md:col-span-1 col-span-2 h-full  px-[30px] md:px-[70px] py-[20px] md:py-[30px]">
              <h1 className="text-[24px] md:text-[36px] font-semibold mb-[18px]">Why Electric <br />Vehicle ?</h1>
              <p className="text-[14px] mb-1"><span className="font-semibold">Eco-Friendly :</span>  Zero emissions for a cleaner, greener planet.</p>
              <p className="text-[14px]"><span className="font-semibold">Future-Ready :</span>  Advanced performance with cutting-edge technology.</p>
              <Link>
                <button className="py-2 px-4 border-[2px] rounded-3 bg-primary-500 text-white mt-3">Get Started</button>
              </Link>
            </div>
            <div className="md:col-span-1 col-span-2 h-full grid grid-cols-2 py-6 gap-y-6 gap-x-4 px-4">
              <div className="px-2 bg-base-100">
                <div className="py-2 md:h-[80px] h-[70px] mb-2 overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dsp9kw0cm/image/upload/v1732625986/evmarket/xxf9kfcz7rlb8ngbentz.png"
                    alt=""
                    className="w-30 h-full bg-cover"
                  />
                </div>
                <h1 className="text-[14px] md:text-[20px] font-semibold mb-1 md:mb-2">Special Financing Offer</h1>
                <p className="text-[12px] leading-4 md:leading-5 md:text-[14px] font-sans">Drive into the future with easy EMIs and low-interest rates on electric vehicles. Your dream EV is now within reach!</p>

              </div>

              <div className="px-2 bg-base-100">
                <div className="py-2 md:h-[80px] h-[70px] mb-2 overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dsp9kw0cm/image/upload/v1732769090/c_logo14_px1ni7.png"
                    alt=""
                    className="w-30 h-full bg-cover"
                  />
                </div>
                <h1 className="text-[14px] md:text-[20px] font-semibold mb-1 md:mb-2">Trusted Dealership</h1>
                <p className="text-[12px] leading-4 md:leading-5 md:text-[14px] font-sans">Your go-to destination for reliable electric vehicles. Enjoy great deals, trusted quality, and outstanding customer service!</p>

              </div>

              <div className="px-2 bg-base-100">
                <div className="py-2 md:h-[80px] h-[70px] mb-2 overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dsp9kw0cm/image/upload/v1732429046/evmarket/u73a0waogn8jmx1exrft.png"
                    alt=""
                    className="w-30 h-full bg-cover"
                  />
                </div>
                <h1 className="text-[14px] md:text-[20px] font-semibold mb-1 md:mb-2">Expert Service</h1>
                <p className="text-[12px] leading-4 md:leading-5 md:text-[14px] font-sans">Premium service for your electric vehicle-trusted expertise, ensuring peak performance and reliability every time!</p>

              </div>

              <div className="px-2 bg-base-100">
                <div className="py-2 md:h-[80px] h-[70px] mb-2 overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dsp9kw0cm/image/upload/v1732769812/evs_logo4_md0e1k.png"
                    alt=""
                    className="w-30 h-full bg-cover"
                  />
                </div>
                <h1 className="text-[14px] md:text-[20px] font-semibold mb-1 md:mb-2">Battery Power</h1>
                <p className="text-[12px] leading-4 md:leading-5 md:text-[14px] font-sans">Power your drive with cutting-edge battery technology and take advantage of easy EMIs and low-interest rates on electric vehicles!</p>

              </div>

            </div>
          </div>
        </section>
        {/* End : why electric vehicle */}


        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
