import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { getScooterUsed } from '../../../../../api';

export function ScooterUsed() {

  const [scooter, setScooter] = useState();

  const getScooterUd = async()=>{
    try {
      const response = await getScooterUsed();
      setScooter(response.data);
    } catch (error) {
      console.log("Error : ", error);
    }
  }

  useEffect(()=>{
    getScooterUd()
  },[])

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
              slidesPerGroup: 3, // Show 3 slides per group
              spaceBetween: 20, // Add space between slides
            },
            1200: {
              slidesPerView: 3.25, // Show 3 full slides and 4th slide at 25%
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
          }}
        >
        

  {/* Conditional rendering: Show loading if no data */}
  {scooter && scooter.length > 0 ? (
    scooter.map((scooterInfo) => (
      <SwiperSlide className="" key={scooterInfo._id}>
        <div className="card card-compact bg-base-100 lg:w-[290px] md:w-[260px] w-[230px] p-0 shadow-md rounded-lg">
          <figure>
            <img
              src={scooterInfo.img1}
              alt={scooterInfo.vehicle_name}
               className='lg:h-[180px] h-[130px] lg:w-full w-full border-b-[1px]'
            />
          </figure>
          <div className="p-2 md:p-6 leading-4 h-[70px] lg:h-[80px] my-0">
            <h2 className="lg:card-title font-semibold text-[14px] lg:text-[18px] mt-0">
              {scooterInfo.vehicle_name}
            </h2>
            <p className="text-[14px] lg:text-[17px]">
              {scooterInfo.showroom_price}
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





          {/* <SwiperSlide>
              <div className='bg-green-200 p-8 rounded-lg'>
                <h2 className='text-2xl font-bold mb-4'>Slide-7</h2>
                <p>Slide seven content</p>
              </div>
            </SwiperSlide> */}
        </Swiper>
      </div>
    </section>
      </>
  );
}
