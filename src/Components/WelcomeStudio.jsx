import React from "react";

const WelcomeStudio = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-20">
      <div className="mb-16 flex flex-col items-start">
        <p className="text-sm mb-2 text-gray-400">Powered by</p>

        <div className="text-left">
          <h1 className="font-medium leading-none text-[6rem] md:text-[9rem]">
            Welcome
          </h1>
          <h1 className="font-normal leading-none text-[6rem] md:text-[12rem] -mt-6 ml-120">
            Studio
          </h1>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#d59591] to-[#96b7cd] rounded-2xl p-10 mb-16 relative min-h-[400px]">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="text-white md:col-span-3">
            <h3 className="text-2xl font-semibold mb-3">
              Drag-n-drop Agenda Builder
            </h3>
            <p className="leading-relaxed max-w-md">
              Quickly rearrange your webinar’s sequence of actions and instantly
              generate an agenda that auto-updates as you move actions around.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 right-0">
          <img
            src="../assets/powered-agenda.png"
            alt="agenda"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 p-6">
        <div className="relative rounded-2xl p-8 bg-[#141414] text-white overflow-hidden min-h-[150px] transform transition duration-300 hover:-translate-y-3 hover:shadow-[0_10px_20px_rgba(59,130,246,0.5)]">
          <h3 className="text-2xl font-semibold mb-4 z-10 relative">
            Brand customization
          </h3>
          <p className="text-gray-400 text-sm mb-6 z-10 relative">
            Brand the entire experience including registration pages, emails,
            backdrops, logo placements, fonts, overlays, and photo booth
            templates.
          </p>
          <img
            src="../assets/brand.png"
            alt="Card 1"
            className="absolute -bottom-4 -right-4 w-70 h-70 object-contain z-0"
          />
        </div>

        <div className="relative rounded-2xl p-8 bg-[#141414] text-white overflow-hidden min-h-[450px] transform transition duration-300 hover:-translate-y-3 hover:shadow-[0_10px_20px_rgba(59,130,246,0.5)]">
          <h3 className="text-2xl font-semibold mb-4 z-10 relative">
            Stage Kit
          </h3>
          <p className="text-gray-400 text-sm mb-6 z-10 relative">
            Design branded overlays, lower thirds, and right-side gradients
            directly in the Welcome platform.
          </p>
          <img
            src="../assets/stage-kit.png"
            alt="Card 2"
            className="absolute -bottom-4 -right-4 w-70 h-70 object-contain z-0"
          />
        </div>

        <div className="relative rounded-2xl p-8 bg-[#141414] text-white overflow-hidden min-h-[450px] transform transition duration-300 hover:-translate-y-3 hover:shadow-[0_10px_20px_rgba(59,130,246,0.5)]">
          <h3 className="text-2xl font-semibold mb-4 z-10 relative">
            Green Room
          </h3>
          <p className="text-gray-400 text-sm mb-6 z-10 relative">
            Invite speakers to a private waiting room to meet and prep to go on
            stage.
          </p>
          <img
            src="../assets/green-room.png"
            alt="Card 3"
            className="absolute -bottom-4 -right-4 w-70 h-70 object-contain z-0"
          />
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <button className="border border-white px-6 py-3 rounded-full hover:bg-indigo-600 hover:text-white hover:text-black transition duration-300">
          See all features
        </button>
      </div>
    </section>
  );
};

export default WelcomeStudio;
