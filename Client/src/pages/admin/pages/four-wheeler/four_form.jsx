import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { addFourData } from '../../../../api';


const defaultValue = {
  type: "",
  brand: "",
  upcomming_and_used: "",
  vehicle_name: "",
  speed: "",
  range: "",
  motor_power: "",
  battery: "",
  charging_time: "",
  battery_charger: "",
  showroom_price: "",
  color: "",
  img1: null,
  img2: null,
  img3: null,
}

export default function FourWheelerForm() {
  const [fourData, setFourData] = useState(defaultValue)
  const Navigate = useNavigate();

  const handleChange = async (e) => {
    setFourData({ ...fourData, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    setFourData((prev) => ({ ...prev, [field]: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      // Append all the fields to the FormData object
      Object.keys(fourData).forEach(key => {
        if (fourData[key] !== null) {
          formData.append(key, fourData[key]);
        }
      });

      await addFourData(formData);
      // Redirect after submission
      Navigate("/admin/fourWheeler");
    } catch (error) {
      console.log("Error : ", error);
    }
  }

  return (
    <div>
      <div className="">
        <div className="mx-auto my-4 max-w-7xl px-4 py-4 sm:px-6 lg:px-8 border-[1px] rounded-lg shadow-sm sticky top-20 bg-white z-10">
          <div className="border-b-[1px]">
            <h1 className='text-[20px] font-semibold mb-2'>Add Four Wheeler Details</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="border-b border-gray-900/10 pb-12">
              <div>
                <h1 className='mt-4 font-semibold'>Vehicle Type/Brand -</h1>
                <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                  <div className="sm:col-span-2">
                    <select
                      id="type"
                      name="type"
                      className="block w-full rounded-md border-[1px] py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      onChange={(e) => handleChange(e)}
                    >
                      <option disabled selected>Select Type</option>
                      <option value="Sedan">Sedan</option>
                      <option value="SUV">SUV</option>
                      <option value="Hatchback">Hatchback</option>
                      <option value="Coupe">Coupe</option>
                      <option value="Convertible">Convertible</option>
                      <option value="Minivan">Minivan</option>
                      <option value="Pickup">Pickup</option>
                      <option value="Crossover">Crossover</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <select
                      id="brand"
                      name="brand"
                      autoComplete=""
                      className="block w-full rounded-md border-[1px] py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      onChange={(e) => handleChange(e)}
                    >
                      <option disabled selected>Select Brand</option>
                      <option value="Toyota">Toyota</option>
                      <option value="Ford">Ford</option>
                      <option value="BMW">BMW</option>
                      <option value="Mercedes">Mercedes</option>
                      <option value="Honda">Honda</option>
                      <option value="Audi">Audi</option>
                      <option value="Chevrolet">Chevrolet</option>
                      <option value="Hyundai">Hyundai</option>
                      <option value="Volkswagen">Volkswagen</option>
                      <option value="Nissan">Nissan</option>
                    </select>
                  </div>


                  <div className="sm:col-span-2">
                    <select
                      id="upcomming_and_used"
                      name="upcomming_and_used"
                      className="block w-full rounded-md border-[1px] py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      onChange={(e) => handleChange(e)}
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
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      id="speed"
                      name="speed"
                      type="text"
                      className="block w-full rounded-md border-[1px] px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder='Speed'
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      id="range"
                      name="range"
                      type="text"
                      className="block w-full rounded-md border-[1px] px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder='Range'
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      id="motor_power"
                      name="motor_power"
                      type="text"
                      className="block w-full rounded-md border-[1px] px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder='Moter Power'
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      id="battery"
                      name="battery"
                      type="text"
                      className="block w-full rounded-md border-[1px] px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder='Battery'
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      id="charging_time"
                      name="charging_time"
                      type="text"
                      className="block w-full rounded-md border-[1px] px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder='Charging Time'
                      onChange={(e) => handleChange(e)}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <input
                      id="battery_charger"
                      name="battery_charger"
                      type="text"
                      className="block w-full rounded-md border-[1px] px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder='Battery Charger'
                      onChange={(e) => handleChange(e)}
                    />
                  </div>


                  <div className="sm:col-span-2">
                    <input
                      id="showroom_price"
                      name="showroom_price"
                      type="text"
                      className="block w-full rounded-md border-[1px] px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder='Showroom Price'
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="sm:col-span-2">

                    <select
                      id="color"
                      name="color"
                      autoComplete=""
                      className="block w-full rounded-md border-[1px] py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      onChange={(e) => handleChange(e)}
                    >
                      <option disabled selected>Select Color</option>
                      <option value="Black">Black</option>
                      <option value="White">White</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="img1"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Image 1
                    </label>
                    <div className="mt-2">
                      <input
                        id="img1"
                        name="img1"
                        type="file"
                        className="file-input file-input-bordered file-input-sm w-full max-w-xs"
                        onChange={(e) => handleFileChange(e, "img1")}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="img2"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      image 2
                    </label>
                    <div className="mt-2">
                      <input
                        id="img2"
                        name="img2"
                        type="file"
                        className="file-input file-input-bordered file-input-sm w-full max-w-xs"
                        onChange={(e) => handleFileChange(e, "img2")}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="img3"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      image 3
                    </label>
                    <div className="mt-2">
                      <input
                        id="img3"
                        name="img3"
                        type="file"
                        className="file-input file-input-bordered file-input-sm w-full max-w-xs"
                        onChange={(e) => handleFileChange(e, "img3")}
                      />
                    </div>
                  </div>
                  <div className="mt-6 sm:ml-28 lg-ml-0 flex items-center justify-end gap-x-6">
                    <Link
                      to="/admin/twoWheeler"
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
