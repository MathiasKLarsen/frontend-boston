import React from 'react'

const About = () => {
  return (
    <section id="about" className='flex flex-col justify-center items-center text-center'>
        <h2 className="text-[3.5rem] font-bold uppercase">about</h2>
        <div className="flex justify-center items-center">
            <div className="w-30 h-[4px] bg-white rounded-full"></div>
            <span className="text-[2.5rem] mx-2">★</span>
            <div className="w-30 h-[4px] bg-white rounded-full"></div>
        </div>
    </section>
  )
}

export default About
