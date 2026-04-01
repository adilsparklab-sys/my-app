import React from "react";

const ExperienceSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-black text-4xl md:text-6xl font-semibold mb-4">
          Experience Welcome
        </h1>

        <p className="text-[20px] md:text-[24px] text-gray-700 mb-6">
          A webinar platform designed for marketers to host jaw-dropping
          experiences that drive revenue.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition">
          Request a demo
        </button>
      </div>

      <div className="mt-12 w-full">
        <img
          src="../assets/Ex-imges.png"
          alt="Experience"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default ExperienceSection;
