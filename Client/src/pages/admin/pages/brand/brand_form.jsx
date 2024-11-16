import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addBrand } from '../../../../api';


const defaultValue = {
  brand_name : "",
  brand_logo : null,
}


export default function Brand_form() {

  const [brand, setBrand] = useState(defaultValue);

  const Navigate = useNavigate();

  const handleChange = async (e) =>{
    setBrand({ ...brand, [e.target.name]: e.target.value});
  }

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    setBrand((prev) => ({ ...prev, [field]: file }));
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
try {
  

    const formData = new FormData();
    Object.keys(brand).forEach(key =>{
      if(brand[key] !== null){
        formData.append(key, brand[key])
      }
    })

    await addBrand(formData);
    Navigate("/admin/brand")
  } catch (error) {
    console.log("Error : ", error);
  }
  }

  return (
    <>

      <div className="">

        <div className="mx-auto my-4 max-w-7xl px-4 py-4 sm:px-6 lg:px-8 border-[1px] rounded-lg shadow-sm sticky top-20 bg-white z-10">
          <div className="grid grid-cols-9 border-b-[1px]">
            <h1 className="text-gray-600 font-bold text-lg mb-3 col-span-7 md:col-span-8">
              {/* {id ? "Edit" : "Add"}  */}
              Brand Form
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label
                  htmlFor="brand_name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Brand Name
                </label>
                <div className="mt-2">
                  <input
                    id="brand_name"
                    name="brand_name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-[1px] py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder='Brand Name'
                    onChange={(e) =>handleChange(e)}
                   
                  />
                </div>
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="brand_logo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Brand Logo
                </label>
                <div className="mt-2">
                  <input
                    id="brand_logo"
                    name="brand_logo"
                    type="file"
                    autoComplete="given-name"
                    className="file-input file-input-bordered border-[1px] file-input-sm w-full max-w-xs"
                    onChange={(e) => handleFileChange(e, "brand_logo")}
                  />
                </div>
              </div>
              <div className="mt-6 col-span-1 flex items-center gap-x-6">
                <Link
                  to="/admin/brand"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                  {/* {id ? "Update" : "Save"} */}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>


    </>
  )
}
