import React from "react";
import {
  FaChalkboardTeacher,
  FaUsers,
  FaLaptopCode,
  FaVideo,
  FaHandshake,
} from "react-icons/fa";

const icons = [
  <FaVideo />,
  <FaUsers />,
  <FaLaptopCode />,
  <FaChalkboardTeacher />,
  <FaHandshake />,
  <FaUsers />,
  <FaChalkboardTeacher />,
  <FaVideo />,
  <FaLaptopCode />,
  <FaHandshake />,
];

const PlatformShowcase = () => {
  const items = [
    "Webinars",
    "Company Meetings",
    "Product Demos",
    "Customer Training",
    "Community Events",
    "Fireside Chat",
    "AMAs",
    "Kick-offs",
    "Multi-track",
    "Workshops",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-16 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-wider text-white bg-gray-800 hover:bg-indigo-500 px-4 py-1 rounded-full shadow-sm">
          Platform
        </span>
        <div className="flex flex-col">
          <h1 className="text-6xl md:text-7xl font-semibold text-white tracking-tight">
            One Platform Endless
          </h1>
          <h3 className="text-5xl md:text-9xl font-semibold bg-clip-text text-white mt-2 ml-30 md:ml-65">
            Opportunities
          </h3>
        </div>

        {/* grid of items */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-gray-700 hover:scale-105 flex flex-col items-center justify-center cursor-pointer group"
            >
              <div className="text-indigo-400 text-3xl mb-3 group-hover:animate-bounce">
                {icons[index % icons.length]}
              </div>
              <p className="font-semibold text-gray-200 text-base md:text-lg group-hover:text-indigo-400 transition-colors duration-300">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformShowcase;
