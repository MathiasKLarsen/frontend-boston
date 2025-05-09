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
      <section className="mt-6 grid grid-cols-2 w-[1350px] gap-10">
        {/* Gear Categories */}
        <section>
          <h3 className="text-3xl font-bold mb-4">Pick your gear</h3> {/* Aligns h3 to the left */}
          <ul className="space-y-4">
            {/* Loop through each unique category */}
            {gearCategory?.map(({ gearcategorytitle, _id }) => (
              <li key={_id} className="bg-neutral-700 flex items-center rounded-lg">
                <h4 className="text-xl pr-[3.5rem] text-left">{gearcategorytitle}</h4> {/* Aligns category title to the left */}
                {/* List the gears belonging to this category */}
                <ul className="mt-2">
                  {/* Filter gears that belong to this specific category */}
                  {gear
                    .filter((gear) => gear.gearcategory?._id === _id) // Match gear category _id with the current category
                    .map(({ geartitle, _id }) => (
                      <li key={_id} className="text-lg pl-4 relative">
                        <span className="absolute left-0">•</span> {/* Adds dots in front */}
                        {geartitle}
                      </li>
                    ))}
                </ul>
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
          <div className="grid grid-cols-2 items-center">
            <h3 className="text-3xl font-bold mb-4 col-span-2 text-left">Contact us!</h3>
            <input type="name" placeholder="First Name" className=""/>
            <input type="name" placeholder="Last Name" className=""/>
            <input type="email" placeholder="Email" className="col-span-2"/>
            <button type="submit"
              className="text-left"
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
