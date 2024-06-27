import React from "react";
import { Link } from "react-router-dom";

export function Bike() {
  return (
    <>
      <img src={""} alt="" />
      <section className="home-six-trending-search py-16">
        <div className="container mx-auto px-4">
          <div className="row">
            <div className="col-lg-12">
              <div className="home-six-heading-section" data-aos="fade-up">
                <div className="home-six-title flex justify-center items-center">
                  <h2 className="text-3xl font-bold">Trending Search</h2>
                </div>
                <p className="text-center mt-4 text-gray-600">
                  Rutrum ante tempus mauris facilisi, leo faucibus, egestas
                  diamlorem malesu, vitae mauris.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-8">
            <div className="col-lg-12">
              <div className="trending-carousel">
                <div className="trending-slider flex overflow-x-auto space-x-4">
                  {[
                    { text: "Used Cars price from $20,000" },
                    { text: "Low Mileage Pickup Trucks", delay: 200 },
                    { text: "Family Cars from $10,000", delay: 400 },
                    { text: "Cars price more than $5,000", delay: 600 },
                    { text: "Family Cars from $10,000", delay: 800 },
                    { text: "Low Mileage Pickup Trucks", delay: 1000 },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`trending-slider-item p-4 bg-white rounded-lg shadow-md`}
                      data-aos="fade-up"
                      data-aos-delay={item.delay || 0}
                    >
                      <Link to="categories.html" className="block text-center">
                        <img
                          src={""}
                          alt=""
                          className="w-full h-52 object-cover rounded-md"
                        />
                        <span className="block mt-4 text-lg text-gray-700">
                          {item.text}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
     