import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getTwoDataById } from '../../../../api';

export const Two_view = () => {
  const [user, setUser] = useState([]);

  const { id } = useParams();

  const getTwoData = async (id) => {
    try {
      const response = await getTwoDataById(id);
      setUser(response.data);
    } catch (error) {
      console.error('Error:', error);

    }
  };

  useEffect(() => {
    getTwoData(id);
  }, [id]);

  return (
    <div>
      <div className="mt-3">
        <div className="mx-auto my-4 max-w-7xl px-2 py-4 sm:px-6 lg:px-8 border-[1px] rounded-lg shadow-sm bg-white ">
          <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6 border-b-2 py-2">
            <div className="sm:col-span-5 ">
              <h1 className="font-bold text-lg text-gray-600">Two Wheeler Details</h1>
            </div>
            <div className="flex items-center justify-end gap-x-6  py-0">
              <Link
                to={"/admin/twoWheeler-form"}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                ADD
              </Link>
            </div>
          </div>
          <div className=' grid grid-cols-2 px-6 mt-6'>
            {/* Vehicle Type/Brand -
          Vehicle Details - */}
            <div className='col-span-1 '>
              <h3 className='mb-3 inline-block border-b-[2px] pb-1 text-[20px] font-semibold'>Vehicle Type/Brand -</h3>
              <div className='grid grid-cols-3'>
                <div className="col-span-1">
                  <p className='col-span-1 text-[15px] font-semibold py-1'>Vehicle Type</p>
                  <p className='col-span-1 text-[15px] font-semibold py-1'>Brand</p>
                  <p className='col-span-1 text-[15px] font-semibold py-1'>Upcoming & Used</p>
                </div>
                <div className="col-span-2">
                  <p className='col-span-1 text-[15px] py-1'>: {user.type}</p>
                  <p className='col-span-1 text-[15px] py-1'>: {user.brand}</p>
                  <p className='col-span-1 text-[15px] py-1'>: {user.upcomming_and_used}</p>
                </div>
              </div>
              <h3 className='mb-3 inline-block border-b-[2px] pb-1 text-[20px] font-semibold mt-4'>Vehicle Type/Brand -</h3>
              <div className='grid grid-cols-3'>
                <div className="col-span-1">
                  <p className='col-span-1 text-[15px] font-semibold py-1'>Vehicle Name</p>
                  <p className='col-span-1 text-[15px] font-semibold py-1'>Speed</p>
                  <p className='col-span-1 text-[15px] font-semibold py-1'>Range</p>
                  <p className='col-span-1 text-[15px] font-semibold py-1'>Motor Power</p>
                  <p className='col-span-1 text-[15px] font-semibold py-1'>Battery</p>
                  <p className='col-span-1 text-[15px] font-semibold py-1'>Battery Charger</p>
                  <p className='col-span-1 text-[15px] font-semibold py-1'>Charging Time</p>
                  <p className='col-span-1 text-[15px] font-semibold py-1'>Showroom Price</p>
                  <p className='col-span-1 text-[15px] font-semibold py-1'>Color</p>
                </div>
                <div className="col-span-2">
                  <p className='col-span-1 text-[15px] py-1'>: {user.vehicle_name}</p>
                  <p className='col-span-1 text-[15px] py-1'>: {user.speed}</p>
                  <p className='col-span-1 text-[15px] py-1'>: {user.range}</p>
                  <p className='col-span-1 text-[15px] py-1'>: {user.motor_power}</p>
                  <p className='col-span-1 text-[15px] py-1'>: {user.battery}</p>
                  <p className='col-span-1 text-[15px] py-1'>: {user.battery_charger}</p>
                  <p className='col-span-1 text-[15px] py-1'>: {user.charging_time}</p>
                  <p className='col-span-1 text-[15px] py-1'>: {user.showroom_price}</p>
                  <p className='col-span-1 text-[15px] py-1'>: {user.color}</p>
                </div>
              </div>

            </div>
            <div className='col-span-1 '>
              <h3 className='mb-3 inline-block border-b-[2px] pb-1 text-[20px] font-semibold'>Vehicle Image -</h3>
              <div className='grid grid-cols-4'>
                <p className='col-span-1 text-[15px] font-semibold'>Image 1 :-</p>
                <img src={user.img1} className='col-span-3 h-[90px] w-[150px] border-[1px] mb-1' alt="" />
              </div>
              <div className='grid grid-cols-4'>
                <p className='col-span-1 text-[15px] font-semibold'>Image 2 :-</p>
                <img src={user.img2} className='col-span-3 h-[90px] w-[150px] border-[1px] mb-1' alt="" />
              </div>
              <div className='grid grid-cols-4'>
                <p className='col-span-1 text-[15px] font-semibold'>Image 3 :-</p>
                <img src={user.img3} className='col-span-3 h-[90px] w-[150px] border-[1px] mb-1' alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
