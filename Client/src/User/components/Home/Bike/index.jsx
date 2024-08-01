import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cowork01, cowork02, cowork03 } from "@image";

export function Bike  ()  {
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
    
          <div className="card aos w-[200px]" data-aos="fade-up">
            <div className="blog-widget ">
              <div className="blog-img w-[200px]">
                <a href="#">
                  <img
                    src={cowork01}
                    className="img-fluid"
                    alt="blog-img"
                    style={{ height: "200px" , width:"100px"}}
                  />
                </a>
              </div>
              <div className="bloglist-content">
                <div className="card-body">
                  <h6>
                    <a href="#">abc1</a>
                  </h6>
                  <div className="amount-details">
                    <div className="amount">
                      <span className="validrate">
                        {/* <i className="fa fa-inr" aria-hidden="true"></i> */}
                        20fsdf00
                      </span>
                    </div>
                    <div className="ratings">
                      <span>4.7</span> (50)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card aos w-[200px]" data-aos="fade-up">
            <div className="blog-widget ">
              <div className="blog-img w-[200px]">
                <a href="#">
                  <img
                    src={cowork02}
                    className="img-fluid"
                    alt="blog-img"
                    style={{ height: "200px" , width:"100px"}}
                  />
                </a>
              </div>
              <div className="bloglist-content">
                <div className="card-body">
                  <h6>
                    <a href="#">abc2</a>
                  </h6>
                  <div className="amount-details">
                    <div className="amount">
                      <span className="validrate">
                        {/* <i className="fa fa-inr" aria-hidden="true"></i> */}
                        20fsdf00
                      </span>
                    </div>
                    <div className="ratings">
                      <span>4.7</span> (50)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card aos w-[200px]" data-aos="fade-up">
            <div className="blog-widget ">
              <div className="blog-img w-[200px]">
                <a href="#">
                  <img
                    src={cowork03}
                    className="img-fluid"
                    alt="blog-img"
                    style={{ height: "200px" , width:"100px"}}
                  />
                </a>
              </div>
              <div className="bloglist-content">
                <div className="card-body">
                  <h6>
                    <a href="#">abc3</a>
                  </h6>
                  <div className="amount-details">
                    <div className="amount">
                      <span className="validrate">
                        {/* <i className="fa fa-inr" aria-hidden="true"></i> */}
                        20fsdf00
                      </span>
                    </div>
                    <div className="ratings">
                      <span>4.7</span> (50)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          

    </Slider>
  );
};

