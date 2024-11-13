import React from 'react'
import Header from '@Admin/layout/Header'
import Sidebar from '@Admin/Layouts/Sidebar'

export default function brand_form() {
  return (
    <>
         <div className="">
      <Header />
      <Sidebar />
      <div className="px-4 mt-3 sm:ml-64">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 border-[1px] rounded-lg shadow-sm ">
          <div className="grid grid-cols-9">
            <div>Brand FORM</div>
          </div>  
        </div>
      </div>
    </div> 
    </>
  )
}
