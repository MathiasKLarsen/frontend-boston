import React from "react";
import { getGearCategory, getGear } from "../data/getGear"

const Design = async () => {
  const gearCategory = await getGearCategory();
  const gear = await getGear();

  return (
    <section id="design" className='flex flex-col justify-center items-center text-center'>
      {/* Title */}
      <h2 className="text-[3.5rem] font-bold uppercase">design your own rig!</h2>
      <div className="flex justify-center items-center">
          <div className="w-30 h-[4px] bg-white rounded-full"></div>
          <span className="text-[2.5rem] mx-2">★</span>
          <div className="w-30 h-[4px] bg-white rounded-full"></div>
      </div>

      {/* Content */}
      <section className="mt-6 w-[1350px] grid grid-cols-2 gap-10 text-white">

        {/* Gear + GearCategory */}
        <section>
          <h3 className="text-4xl font-bold mb-6">Pick your gear</h3>
          <ul className="space-y-6">
            {gearCategory?.map(({ gearcategorytitle, _id }) => (
              <li
                key={_id}
                className="bg-neutral-800 p-6 rounded-xl shadow-md"
              >
                <div className="grid grid-cols-3">
                  <h4 className="text-xl font-semibold text-left">{gearcategorytitle}</h4>
                  <ul className="space-y-3 col-span-2 text-left">
                    {gear
                      .filter((g) => g.gearcategory?._id === _id)
                      .map(({ geartitle, _id: gearId }) => (
                        <li key={gearId}>
                          <label className="cursor-pointer flex space-x-2">
                            <input
                              type="radio"
                              name={gearcategorytitle}
                              value={gearId}
                              className="form-radio h-5 w-5 text-blue-500 bg-gray-700 border-gray-500 focus:ring-0 flex-shrink-0"
                            />
                            <span className="text-[1.1rem]">{geartitle}</span>
                          </label>
                        </li>
                      ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Summary + Contact */}
        <section className="flex flex-col gap-10">
          {/* Summary */}
          <div>
            <h3 className="text-3xl font-bold mb-4">Summary</h3>
            <div className="bg-white rounded-lg flex justify-between p-2">
              <p className="text-black font-bold">Total</p>
              <p className="bg-black rounded-full px-2">$0</p>
            </div>
          </div>

          {/* Contact */}
          <div className="grid grid-cols-2 items-center gap-2">
            <h3 className="text-3xl font-bold col-span-2 text-left">Contact us!</h3>
            <input type="name" placeholder="First Name" className="text-white placeholder:text-white bg-neutral-600 hover:bg-neutral-500 border-2 border-white rounded-lg py-1 px-3"/>
            <input type="name" placeholder="Last Name" className="text-white placeholder:text-white bg-neutral-600 hover:bg-neutral-500 border-2 border-white rounded-lg py-1 px-3"/>
            <input type="email" placeholder="Email" className="col-span-2 text-white placeholder:text-white bg-neutral-600 hover:bg-neutral-500 border-2 border-white rounded-lg py-1 px-3"/>
            <button type="submit"
              className="text-left bg-neutral-600 hover:bg-neutral-500 border-2 border-white rounded-lg w-fit py-1 px-3"
            >
              Send
            </button>
          </div>
        </section>

      </section>
    </section>
  )
}

export default Design
