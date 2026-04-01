import React from "react";

export default function VideoCard() {
  return (
    <div className="flex justify-center px-6 pb-20">
      <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl">
        <img
          src="../assets/video.png"
          alt="webinar"
          className="w-full h-[600px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

        <img
          src="../assets/frame-bg.png"
          alt="webinar frame"
          className="w-full h-[600px] object-cover absolute top-0 left-0"
        />
      </div>
    </div>
  );
}
