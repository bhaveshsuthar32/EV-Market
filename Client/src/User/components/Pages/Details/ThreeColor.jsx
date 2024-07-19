import React from 'react'

export default function ThreeColor() {
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
                          abc
                        </li>
                        <li className="border-b-[1px] pt-3 pb-1">
                          abc
                        </li>
                        <li className="border-b-[1px] pt-3 pb-1">
                          abc
                        </li>
                        <li className="border-b-[1px] pt-3 pb-1">
                          abc
                        </li>
                        <li className="border-b-[1px] pt-3 pb-1">
                          abc
                        </li>
                      </ul>
                    </div>
          </div>
        </div>
      </div>
    </>
  );
}
