import React from "react";

const Services = () => {
  return (
    <section
      className="relative text-white min-h-[550px] md:min-h-[700px] py-24 px-6 md:px-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('src/assets/section-bg.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative grid md:grid-cols-2 gap-12 items-start h-full">
        <div className="mt-20 md:mt-32">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
            “Makes other platforms look like the 1990’s”
          </h2>

          <p className="text-gray-300 mb-8 text-lg">
            -Nate Skinner, CMO at Onfido
          </p>

          <button className="bg-transparent border border-gray-600 text-white px-6 py-3 rounded-full hover:bg-indigo-600 hover:text-white transition duration-300">
            Read customer stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
