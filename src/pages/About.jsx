import React from "react";
import { getAbout } from "../data/getAbout"

const About = async () => {
  const about = await getAbout();

  return (
    <section id="about" className='flex flex-col justify-center items-center text-center bg-neutral-700 my-6'>
      {/* Title */}
      <h2 className="text-[3.5rem] font-bold uppercase">about</h2>
      <div className="flex justify-center items-center">
          <div className="w-30 h-[4px] bg-white rounded-full"></div>
          <span className="text-[2.5rem] mx-2">★</span>
          <div className="w-30 h-[4px] bg-white rounded-full"></div>
      </div>

      {/* Content */}
      <article>
        {about && (
          <div className="grid grid-cols-2 h-[500px] w-[800px]">
            <p className="text-2xl p-5 text-left">{about.content1}</p>
            <p className="text-2xl p-5 text-left">{about.content2}</p>
          </div>
        )}
      </article>
    </section>
  )
}

export default About
