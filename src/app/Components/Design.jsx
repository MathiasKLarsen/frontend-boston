import React from 'react'

const Design = () => {
  return (
    <section id="design" className='flex flex-col justify-center items-center text-center'>
        <h1 className="text-[3.5rem] font-bold text-white uppercase">design your own rig!</h1>
        <div className="flex justify-center items-center">
            <div className="w-30 h-[4px] bg-white rounded-full"></div>
            <span className="text-[2.5rem] mx-2 text-white">★</span>
            <div className="w-30 h-[4px] bg-white rounded-full"></div>
        </div>
    </section>
  )
}

export default Design
