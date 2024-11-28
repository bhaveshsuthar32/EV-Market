import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { getBikeData } from "../../../../api";
import { Link } from "react-router-dom";

export function BikeData() {

  const [bike, setBike] = useState([]);

  const bikeData = async () => {
    const response = await getBikeData()
    setBike(response.data);
  }

  useEffect(() => {
    bikeData();
  }, [])

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
                    <h4 className="text-[20px] font-semibold">
                      E-Bike for Sale
                      <span className="text-[16px]"> (Showing {bike.length})</span>
                    </h4>
                  </div>
                  <div className="grid-view listgrid-sidebar row">
                    {bike.map((bikeInfo) => (
                      <div className="col-12 col-lg-3 col-md-4 col-sm-12 " key={bikeInfo._id}>
                        <div className="card">
                          <div className="blog-widget">
                            <div className=" text-center p-2">
                              <Link to={`/two-details/${bikeInfo._id}`}>
                                <img
                                  src={bikeInfo.img1}
                                  className="img-fluid h-[170px] object-cover transform-none hover:transform-none px-1"
                                  // style={{ height: "170px", width: "150px" }}
                                  alt={bikeInfo.vehicle_name}
                                />
                              </Link>
                            </div>
                            <div className="bloglist-content">
                              <div className="card-body p-3">
                                <div className="amount-details mb-2 ps-2 fw-bold text-dark">
                                  <span>{bikeInfo.vehicle_name}</span>
                                  <div className="ratings">
                                    <span>New</span>
                                  </div>
                                </div>
                                <div className="blogfeaturelink m-0">
                                  <div className="blog-features ps-2 fw-bold mb-2">
                                    <p>₹ {bikeInfo.showroom_price}</p>
                                  </div>
                                </div>
                                <div className="blog-location-details mt-1 grid grid-cols-3 text-center text-xs text-black ">
                                  <div>
                                    <img
                                      src="/assets_1/My_img/logo-1.png"
                                      alt=""
                                      className="w-8"
                                    />
                                    <p>Motor Power</p>
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
                                    <p>Battery</p>
                                  </div>
                                 
                                </div>
                                <div className="blog-location-details text-dark grid grid-cols-3 text-center text-xs mt-[-20px]">
                                  <div>{bikeInfo.motor_power}</div>
                                  <div>{bikeInfo.range}</div>
                                  <div>{bikeInfo.battery}</div>
                                  
                                </div>
                                <div className="blog-location-details mt-1 grid grid-cols-3 text-center text-xs text-black mt-[-20px]">
                                  <div>
                                    <img
                                      src="/assets_1/My_img/logo-1.png"
                                      alt=""
                                      className="w-8"
                                    />
                                    <p>Charging Time</p>
                                  </div>
                                  <div>
                                    <img
                                      src="/assets_1/My_img/logo-2.png"
                                      alt=""
                                      className="w-8"
                                    />
                                    <p>Color</p>
                                  </div>
                                  <div>
                                    <img
                                      src="/assets_1/My_img/logo-3.png"
                                      alt=""
                                      className="w-8"
                                    />
                                    <p>Speed</p>
                                  </div>
                                  <div>
                                    <img
                                      src="/assets_1/My_img/logo-4.png"
                                      alt=""
                                      className="w-8"
                                    />
                                  
                                  </div>
                                </div>
                                <div className="blog-location-details text-dark grid grid-cols-3 text-center text-xs mt-[-20px]">
                                  <div>{bikeInfo.charging_time}</div>
                                  <div>{bikeInfo.color}</div>
                                  <div>{bikeInfo.speed}</div>
                                </div>
                                <div className="amount-details">
                                  <div className="amount">
                                    <Link className="validrate" to={`/two-details/${bikeInfo._id}`}>
                                      <button className="bg-success text-white text-xs p-1 rounded">
                                        View data
                                      </button>
                                    </Link>
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
                    ))}


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


