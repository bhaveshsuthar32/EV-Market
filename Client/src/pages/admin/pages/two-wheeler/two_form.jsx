import React from 'react'
import { Link } from 'react-router-dom'

export default function TwoWheelerForm() {

  return (
    <div>
      <div className="">
        <div className="mx-auto my-4 max-w-7xl px-4 py-4 sm:px-6 lg:px-8 border-[1px] rounded-lg shadow-sm sticky top-20 bg-white z-10">
          <div className="border-b-[1px]">
            <h1 className='text-[20px] font-semibold mb-2'>Add Two Wheeler Details</h1>
          </div>
          <form >
            <div className="border-b border-gray-900/10 pb-12">
              <div>
                <h1 className='mt-4 font-semibold'>Vehicle Type/Brand -</h1>
                <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                  <div className="sm:col-span-2">
                    <select
                      id="type"
                      name="type"
                      className="block w-full rounded-md border-[1px] py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option disabled selected>Select Type</option>
                      <option value="E-Scooter" >E-Scooter</option>
                      <option value="Retro Scooter" >Retro Scooter</option>
                      <option value="E-Bike" >E-Bike</option>
                      <option value="Retro Bike" >Retro Bike</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">

                    <select
                      id="brand"
                      name="brand"
                      autoComplete=""
                      className="block w-full rounded-md border-[1px] py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option disabled selected>Select Brand</option>
                      <option value="Yamaha">Yamaha</option>
                      <option value="Hero">Hero</option>
                      <option value="Bajaj">Bajaj</option>
                      <option value="Honda">Honda</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <select
                      id="upcomming_and_used"
                      name="upcomming_and_used"
                      className="block w-full rounded-md border-[1px] py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option disabled selected>Select Vehicle</option>
                      <option value="Upcoming" >Upcoming</option>
                      <option value="Used" >Used</option>
                    </select>
                  </div>
                </div>
              </div>


              <div className='mt-2'>
                <h1 className='mt-4 font-semibold'>Vehicle Details -</h1>
                <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                  <div className="sm:col-span-2">
                    <input
                      id="vehicle_name"
                      name="vehicle_name"
                      type="text"
                      className="block w-full rounded-md border-[1px] px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder='Vehicle Name'
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      id="speed"
                      name="speed"
                      type="text"
                      className="block w-full rounded-md border-[1px] px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder='Speed'
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      id="range"
                      name="range"
                      type="text"
                      className="block w-full rounded-md border-[1px] px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder='Range'
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      id="motor_power"
                      name="motor_power"
                      type="text"
                      className="block w-full rounded-md border-[1px] px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder='Moter Power'
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      id="battery"
                      name="battery"
                      type="text"
                      className="block w-full rounded-md border-[1px] px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder='Battery'
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      id="charging_time"
                      name="charging_time"
                      type="text"
                      className="block w-full rounded-md border-[1px] px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder='Charging Time'
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <input
                      id="battery_charger"
                      name="battery_charger"
                      type="text"
                      className="block w-full rounded-md border-[1px] px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder='Battery Charger'
                    />
                  </div>


                  <div className="sm:col-span-2">
                    <input
                      id="showroom_price"
                      name="showroom_price"
                      type="text"
                      className="block w-full rounded-md border-[1px] px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder='Showroom Price'
                    />
                  </div>
                  <div className="sm:col-span-2">

                    <select
                      id="brand"
                      name="brand"
                      autoComplete=""
                      className="block w-full rounded-md border-[1px] py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option disabled selected>Select Color</option>
                      <option value="Black">Black</option>
                      <option value="White">White</option>
                    </select>
                  </div>
                  <div className="mt-6 sm:ml-28 lg-ml-0 flex items-center justify-end gap-x-6">
                    <Link
                      to="/admin/fsponser"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Cancel
                    </Link>
                    <button
                      type="submit"
                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
