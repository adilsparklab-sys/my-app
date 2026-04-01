import React from "react";

function Experience() {
  return (
    <section className="bg-white text-black px-6 md:px-20 py-24">
      <div className="text-black leading-none">
        <h4 className="text-[25px] md:text-[35px] leading-tight">
          An unmatched attendee
        </h4>
        <h1 className="text-[120px] sm:text-[100px] md:text-[220px]  font-semibold">
          Experience
        </h1>
      </div>
      <div
        className="rounded-2xl p-40 top-10 mb-20 grid md:grid-cols-2 gap-20 items-center mt-10 md:mt-20 w-full object-contain"
        style={{ backgroundImage: "url('../assets/experince-bg.png')" }}
      >
        <div className="text-left ml-0">
          <h3 className="text-2xl font-semibold mb-2">Interactive overlays</h3>
          <p className="text-gray-600 text-base leading-relaxed max-w-md">
            Add custom branded graphics that lay over your live video to intro
            speakers, emphasize key points, and display clickable CTAs.
          </p>
        </div>
      </div>

      <div className="flex flex-col max-h-\[420px\] md:flex-row gap-6 mb-6">
        <div
          className="flex-1 rounded-2xl p-6 text-left bg-cover bg-center"
          style={{ backgroundImage: "url('../assets/node.png')" }}
        >
          <h3 className="text-2xl font-semibold mb-2 text-black">
            Interactive Polls
          </h3>
          <p className="text-black text-base leading-relaxed max-w-md">
            Embed polls directly on stage and watch the results populate in
            real-time. Moderate audience questions, allow upvoting, and bring
            attendees on-stage.
          </p>
        </div>

        <div
          className="flex-1 rounded-2xl p-6 text-left bg-cover bg-center"
          style={{ backgroundImage: "url('../assets/node1.png')" }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-white">
            HD Video Quality
          </h3>
          <p className="text-gray-200 text-base leading-relaxed max-w-md mb-4">
            Provide a better experience for your viewers with crystal clear HD
            video streaming.
          </p>

          <div className="flex flex-col items-center gap-4">
            <img
              src="../assets/experience-video-text.png"
              alt="Experience Video Text"
              className="w-auto h-20"
            />
            <img
              src="../assets/video-image.png"
              alt="Video Image"
              className="w-auto h-40"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col max-h-\[300px\] md:flex-row gap-6">
        <div
          className="flex-1 rounded-2xl p-6 text-left bg-cover bg-center relative"
          style={{ backgroundImage: "url('../assets/node-bg.png')" }}
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-2 text-white">Q&A</h3>
            <p className="text-white text-base leading-relaxed max-w-md">
              Moderate audience questions, allow upvoting, and bring attendees
              on-stage.
            </p>
          </div>

          <div className="mt-4">
            <img
              src="../assets/experience-qa-card.png"
              alt="Q&A"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>

        <div
          className="flex-1 rounded-2xl p-6 bg-cover bg-center flex items-center gap-6"
          style={{ backgroundImage: "url('../assets/node1-bg.png')" }}
        >
          <div className="flex-1 text-left">
            <h3 className="text-2xl font-semibold mb-2 text-black">Chat</h3>
            <p className="text-black text-base leading-relaxed max-w-md">
              Chat is where engagement happens. With a slack-like experience,
              attendees can use emojis, reactions, and gifs to express
              themselves.
            </p>
          </div>
          <div className="flex-1 flex justify-end">
            <img
              src="../assets/chat.png"
              alt="Interactive Feature"
              className="w-full max-w-sm rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className="border border-gray-600 px-6 py-3 rounded-full hover:bg-blue-400 hover:text-white transition duration-300 flex items-center gap-2">
          <span className="button-text text-black">See All Featurs</span>
        </button>
      </div>
    </section>
  );
}

export default Experience;
