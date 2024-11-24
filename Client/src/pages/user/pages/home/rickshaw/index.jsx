import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { getRickshawData } from '../../../../../api';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Rickshaw() {

  const [rickshaw, setRickshaw] = useState([]);

  const rickshawData = async () => {
    try {
      const response = await getRickshawData();
      setRickshaw(response.data);
    } catch (error) {
      console.log('Error : ', error)
    }
  }

  useEffect(() => {
    rickshawData();
  }, [])

  return (
    <>
      <section className='lg:h-[300px] h-[250px] z-0'>
        <div className='sm:mx-16 mx-8'>

          <Swiper

            modules={[Navigation, Pagination]}
            spaceBetween={40}
            // navigation
            speed={1500}
            // pagination={{ clickable: true }}
            className="mySwiper py-2"
            breakpoints={{
              240: {
                slidesPerView: 1.25,
                slidesPerGroup: 3,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1.25,
                slidesPerGroup: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.25,
                slidesPerGroup: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 3.25,
                slidesPerGroup: 3,
                spaceBetween: 20,
              },
            }}
          >


            {rickshaw && rickshaw.length > 0 ? (
              rickshaw.map((rickshawInfo) => (
                <SwiperSlide className="" key={rickshawInfo._id}>
                  <div className="card card-compact bg-base-100 lg:w-[300px] w-60 p-0 shadow-md rounded-lg">
                    <figure>
                      <img
                        src={rickshawInfo.img1}
                        alt={rickshawInfo.vehicle_name}
                      />
                    </figure>
                    <div className="p-2 md:p-6 leading-4 h-[70px] lg:h-[90px] my-0">
                      <h2 className="lg:card-title font-semibold text-[14px] lg:text-[18px] mt-0">
                        {rickshawInfo.vehicle_name}
                      </h2>
                      <p className="text-[14px] lg:text-[17px]">
                        {rickshawInfo.showroom_price}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              // Loading State
              <div className="flex items-center justify-center h-64">
                <p className="text-lg font-semibold">Loading...</p>
              </div>
            )}

          </Swiper>
        </div>
      </section>
    </>
  );
}