"use client"

import React, { useEffect } from "react";
import useRequestData from "../Hooks/useRequestData";

const About = () => {
  const { makeRequest, data } = useRequestData();

  useEffect(() => {
    const fetchData = async () => {
      await makeRequest("http://localhost:5039/about", "GET");
    };
    fetchData();
  }, []);

  return (
    <section id="about" className='flex flex-col justify-center items-center text-center bg-neutral-700 rounded-lg my-6'>
      {/* Title */}
      <h2 className="text-[3.5rem] font-bold uppercase">about</h2>
      <div className="flex justify-center items-center">
          <div className="w-30 h-[4px] bg-white rounded-full"></div>
          <span className="text-[2.5rem] mx-2">★</span>
          <div className="w-30 h-[4px] bg-white rounded-full"></div>
      </div>

      {/* Content */}
      <section>
        {data && (
          <div className="grid grid-cols-2 h-[500px] w-[1300px]">
            <p className="text-2xl p-5 text-left">{data.content1}</p>
            <p className="text-2xl p-5 text-left">{data.content2}</p>
          </div>
        )}
      </section>
    </section>
  )
}

export default About
