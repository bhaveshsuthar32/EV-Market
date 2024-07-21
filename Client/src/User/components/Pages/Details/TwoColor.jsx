import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cowork01, cowork02, cowork03 } from "@image";


export default function TwoColor() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [cowork01, cowork02, cowork03];

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <>
      <div className="">
        <div className="container md:px-[120px]">
          <div className="container ">
            <h1 className="text-[30px] mb-2">OLA S1 Pro Colours</h1>
            <p className=" py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              veritatis consectetur voluptates in quae eum? Accusantium dolor
              aliquam placeat eum laboriosam magnam provident natus eligendi
              facere? Quo velit sint exercitationem.
            </p>
          </div>
          <div className="container mt-2 flex ">
            <div className="border-b-[1px] w-full">
              <Link className="font-semibold" to={"#"}>
                Color
              </Link>
              <Link className="px-6 font-semibold" to={"#"}>
                Image
              </Link>
            </div>
          </div>

          <div className="">
            <div
              id="default-carousel"
              className="relative w-full"
              data-carousel="slide"
            >
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute w-full h-full duration-700 ease-in-out ${currentSlide === index ? "block" : "hidden"}`}
                    data-carousel-item
                  >
                    <img
                      src={slide}
                      className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                      alt={`Slide ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
              <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-white" : "bg-gray-300"}`}
                    aria-current={currentSlide === index}
                    aria-label={`Slide ${index + 1}`}
                    data-carousel-slide-to={index}
                    onClick={() => handleSlideChange(index)}
                  ></button>
                ))}
              </div>
              <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
                onClick={handlePrev}
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
                onClick={handleNext}
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="container md:px-[120px] my-[100px]">
          <div className="grid grid-cols-6 border-[1px] p-4">
            <h1 className="col-span-6">Details</h1>
            <div className="col-span-2 border-t-[1px]">
                      <ul className="">
                        <li className="border-b-[1px] pt-3 pb-1">
                          Riding Range
                        </li>
                        <li className="border-b-[1px] pt-3 pb-1">
                          Speed                        </li>
                        <li className="border-b-[1px] pt-3 pb-1">
                          Battery
                        </li>
                        <li className="border-b-[1px] pt-3 pb-1">
                          Motor Power
                        </li>
                        <li className="border-b-[1px] pt-3 pb-1">
                          Tyer
                        </li>
                      </ul>
                    </div>
                    <div className=" col-span-4 border-t-[1px] ">
                      <ul>
                        <li className="border-b-[1px] pt-3 pb-1">
                          abc1
                        </li>
                        <li className="border-b-[1px] pt-3 pb-1">
                          abc2
                        </li>
                        <li className="border-b-[1px] pt-3 pb-1">
                          abc3
                        </li>
                        <li className="border-b-[1px] pt-3 pb-1">
                          abc4
                        </li>
                        <li className="border-b-[1px] pt-3 pb-1">
                          abc5
                        </li>
                      </ul>
                    </div>
          </div>
        </div>
      </div>
    </>
  );
}
