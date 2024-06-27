import React from "react";
import { Navbar } from "@components/Navbar";
import { Bike } from "@Home/Bike";
import { cowork01, cowork02, cowork03 } from "@image";

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
            <div className="row">
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
            <div className="row">
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
                    {/* <div className="owl-carousel featured-slider grid-view row"> */}
                    {/* {mainTw.map((bike, index) => (
                        <BikeCard key={index} bike={bike} />
                      ))} */}
                    {/* <h6>bike123</h6> */}

                    {/* ----------- */}
<Bike />
                    <div className="owl-carousel partnerslist_eight d-flex">
                      <div className="p-[100px] border-2">
                        <h2>hello woldl</h2>
                      </div>
                      <div className="p-[100px] border-2">
                        <h2>hello woldl</h2>
                      </div>
                      <div className="p-[100px] border-2">
                        <h2>hello woldl</h2>
                      </div>
                      <div className="p-[100px] border-2">
                        <h2>hello woldl</h2>
                      </div>
                      <div className="p-[100px] border-2">
                        <h2>hello woldl</h2>
                      </div>
                      <div className="p-[100px] border-2">
                        <h2>hello woldl</h2>
                      </div>
                    </div>

                    {/* ------------ */}
                    {/* </div> */}
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

        <h1 className="text-[100px]">hello world</h1>
      </div>
    </>
  );
}
