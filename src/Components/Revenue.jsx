import React from "react";

const Revenue = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-16 bg-white">
      <div className="flex flex-col items-start space-y-4">
        <h1 className="text-black text-5xl md:text-7xl font-semibold leading-tight">
          Drive
        </h1>

        <div className="relative w-32 h-20">
          <img
            src="src/assets/span.png"
            alt="Revenue"
            className="w-full h-full object-contain rounded-lg"
          />
          <span className="absolute left-70 inset-0 flex items-center justify-center text-black font-semibold text-5xl md:text-7xl">
            Revenue
          </span>
        </div>
      </div>
      <div className="flex flex-col space-y-10 justify-end font-semibold">
        <div>
          <h2 className="text-2xl md:text-3xl text-black font-semibold">
            +87%
          </h2>
          <p className="text-gray-500 text-sm md:text-base border-b-1 border-gray-500 pb-1 inline-block">
            increased attendee engagement <br /> at Bitwise
          </p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl text-black font-semibold">
            $1.7M
          </h2>
          <p className="text-gray-500 text-sm md:text-base  border-b-1 border-gray-500 pb-1 inline-block">
            pipeline generated <br /> at Everbridge
          </p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl text-black font-semibold">58%</h2>
          <p className="text-gray-500 text-sm md:text-base border-b-1 border-gray-500 pb-1 inline-block">
            attendee conversion rate <br /> at Interfolio
          </p>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
