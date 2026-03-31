import React from "react";
import { FaPlay } from "react-icons/fa";

function Hero() {
  return (
    <section className="text-center py-20 px-6">
      <h1 className="text-5xl md:text-7xl font-bold font-sans mb-6">
        Captivate & Convert
      </h1>
      <p className="text-gray-400 max-w-1/2 mx-auto mb-5 text-[24px]">
        A webinar platform designed for marketers to host jaw-dropping
        experiences that drive revenue.
      </p>
      <div className="flex justify-center gap-4">
        <button className="bg-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-300 hover:text-black transition duration-300 demo-button">
          <span className="demo-button-text">Demo</span>
        </button>

        <button className="border border-gray-600 px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300 flex items-center gap-2 button-hover">
          <FaPlay className="text-white w-5 h-5" />
          <span className="button-text">How it works</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
