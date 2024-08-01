import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cowork01, cowork02, cowork03 } from "@image";

export function Bike() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className="featured-slider grid-view">
      {[cowork01, cowork02, cowork03].map((image, index) => (
        <div
          key={index}
          className="card aos w-[200px] m-auto"
          data-aos="fade-up"
        >
          <div className="blog-widget">
            <div className="blog-img w-full h-[200px] mx-auto flex justify-center items-center">
              <a href="#">
                <img
                  src={image}
                  className="img-fluid object-cover w-full h-full"
                  alt={`blog-img-${index}`}
                />
              </a>
            </div>
            <div className="bloglist-content">
              <div className="card-body">
                <h6>
                  <a href="#">abc{index + 1}</a>
                </h6>
                <div className="amount-details">
                  <div className="amount">
                    <span className="validrate">20fsdf00</span>
                  </div>
                  <div className="ratings">
                    <span>4.7</span> (50)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
