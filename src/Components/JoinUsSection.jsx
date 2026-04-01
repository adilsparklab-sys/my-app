import React from "react";

const JoinUsSection = () => {
  return (
    <div className="bg-indigo-50 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-indigo-600 font-semibold text-[65px] uppercase tracking-wider">
            Join Us
          </h2>
          <a
            href="#"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            All Event
          </a>
        </div>

        <div className="rounded-3xl border-t-2 border-r-2 border-black shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 flex flex-col justify-between">
            <span className="text-gray-500 font-medium text-sm mb-2">
              December 21, 2022
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Attention-Grabbing Marketing in a Noisy Market
            </h2>
            <a
              href="#"
              className=" text-black font-semibold text-sm px-6 py-3 rounded-full"
            >
              Register
            </a>
          </div>

          <div className="flex-shrink-0 w-full md:w-1/3">
            <img
              src="../assets/joinUs.png"
              alt="Event"
              className="rounded-2xl w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUsSection;
