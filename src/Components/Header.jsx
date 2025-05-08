"use client";

import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Error from "./Error";

import useRequestData from "../Hooks/useRequestData";

const Header = () => {
    const { makeRequest, isLoading, data, error } = useRequestData();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            await makeRequest("http://localhost:5039/slider", "GET");
        };
        fetchData();
    }, []); 

    useEffect(() => {
        if (data && data.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [data]);

    if (isLoading) return <Loader />;
    if (error) return <Error />;

    return (
        <section className="relative w-full overflow-hidden">

            {/* Slider */} 
            <div className="flex transition-transform duration-1500 ease-in-out" 
                style={{ 
                    // transform: `translateX(-${currentIndex * 100}vw)` 
                }}>

                {data?.map(({sliderimage, alttext}, index) => (
                    <div key={index} className="w-screen h-[850px] relative flex-shrink-0">
                        <img
                            src={`http://localhost:5039/images/slider/${sliderimage}`}
                            alt={alttext}
                            className="w-full h-full object-cover object-top"
                        />

                        {/* Overlay Text */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center bg-black/80 p-14">
                            <h1 className="text-[5.5rem] font-bold text-white uppercase">boston gaming</h1>
                            <div className="flex justify-center items-center">
                                <div className="w-30 h-[4px] bg-white rounded-full"></div>
                                <span className="text-[2.5rem] mx-2 text-white">★</span>
                                <div className="w-30 h-[4px] bg-white rounded-full"></div>
                            </div>
                            <p className="text-xl text-gray-300">Affordable - Professional - Aesthetic</p>
                            <p className="text-xl mt-2 text-gray-300">Let us build your next rig!</p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default Header;
