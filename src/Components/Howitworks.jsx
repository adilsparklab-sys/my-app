import React from "react";
import { MdArrowOutward } from "react-icons/md";

export default function HowItWorks() {
  return (
    <section className="bg-[#f7f7f7] py-20 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-start mb-16">
        <h1 className="text-black text-[64px] md:text-[88px] font-semibold leading-none">
          How it
          <br />
          works
        </h1>

        <div className="max-w-md mt-6 md:mt-0">
          <p className="text-gray-600 text-[15px] leading-relaxed">
            Manage your experience from start to finish, from integrations to
            registration and from interactive stage elements to post-event data,
            it's all here.
          </p>

          <button className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white text-sm px-5 py-2 rounded-full">
            Learn more
          </button>
        </div>
      </div>

      <div className="border-t border-gray-200 mb-12" />

      <Step
        step="Step 1"
        title="Create"
        description="Welcome Studio gives you all the tools you need to create and host virtual experiences that look awesome and put your brand centerstage."
        gradient="from-purple-400 to-pink-400"
        image="src/assets/work1.png"
      />

      <Divider />

      <Step
        step="Step 2"
        title="Engage"
        description="Cut through the yawns, grab your audiences attention, and turn passive attendees into active participants."
        gradient="from-orange-400 to-purple-400"
        image="src/assets/work2.png"
      />

      <Divider />

      <Step
        step="Step 3"
        title="Analyze"
        description="Track the success of your events with deep insights and analytics measured across the entire attendee experience."
        gradient="from-pink-400 to-red-400"
        image="src/assets/work3.png"
      />
    </section>
  );
}

function Step({ step, title, description, gradient, image }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 py-10">
      <div className="w-full md:w-[28%]">
        <p className="text-sm text-[18px] text-black mb-2">{step}</p>

        <h2 className="text-black text-[36px] font-semibold flex items-center gap-2">
          {title}
          <span className="text-lg">
            <MdArrowOutward className="w-15 h-15 text-black" />
          </span>
        </h2>

        <p className="text-gray-600 text-[18px] mt-4 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="w-full md:w-[72%] relative">
        <div
          className={`absolute inset-0 rounded-full blur-3xl opacity-50 .bg-gradient-to-r ${gradient}`}
        />

        <div className="relative h-\[230px/] md:h-\[260px\] rounded-[140px] overflow-hidden shadow-md">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="border-t border-gray-200" />;
}
