import React from "react";

export default function IntegrateData() {
  return (
    <section className="bg-[#dadada] py-20 px-6 md:px-16 overflow-hidden">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-16">
        <div className="flex flex-col gap-6 md:gap-8">
          <h1 className="text-black text-5xl md:text-9xl font-semibold">
            Integrate
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="w-40 h-40 md:w-64 md:h-64 flex-shrink-0">
              <img
                src="../assets/data.png"
                alt="Your Data"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <span className="text-black font-semibold text-2xl md:text-8xl">
                your data
              </span>
            </div>
          </div>
          <p className="text-gray-600 text-[20px] max-w-xs md:max-w-md">
            Leverage your existing marketing platforms and sync the data
            seamlessly.
          </p>
        </div>

        <div className="flex gap-6">
          <div className="flex flex-col gap-6">
            <div className="w-[120px] h-[120px] bg-white rounded-full shadow-sm flex items-center justify-center text-center text-sm text-gray-500 px-3">
              Custom Integration
            </div>
            <div className="w-[120px] h-[120px] bg-white rounded-full shadow-sm flex items-center justify-center">
              <img
                src="../assets/office-logo.png"
                alt="icon"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="w-[120px] h-[120px] bg-white rounded-full shadow-sm flex items-center justify-center">
              <img
                src="../assets/hubspot.png"
                alt="icon"
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-12">
            <div className="w-[120px] h-[120px] bg-white rounded-full shadow-sm flex items-center justify-center text-center text-sm text-gray-500 px-3">
              Pardot
            </div>
            <div className="w-[120px] h-[120px] bg-white rounded-full shadow-sm flex items-center justify-center">
              <img
                src="../assets/saleforce.png"
                alt="icon"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="w-[120px] h-[120px] bg-white rounded-full shadow-sm flex items-center justify-center text-center text-sm text-gray-500 px-3">
              Custom Integration
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
