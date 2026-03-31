import React from "react";

export default function Companies() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-24 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-96 h-96 bg-purple-600 opacity-10 blur-3xl"></div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            World-class teams <br />
            are upgrading to <br />
            Welcome
          </h2>

          <p className="text-gray-400 text-lg mb-12 max-w-lg">
            Companies are ditching legacy platforms for the ability to deliver
            an engaging experience at every level.
          </p>

          <div className="flex items-start gap-4">
            <span className="text-green-400 text-3xl">↗</span>

            <div>
              <h3 className="text-3xl font-semibold">
                66%{" "}
                <span className="text-gray-400 text-xl font-normal">
                  attendance rate
                </span>
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                avg attendance for Welcome customers
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-y-8 gap-x-12 opacity-60 text-gray-400">
          <img src="src/assets/adobe.png" alt="" />
          <img src="src/assets/square.png" alt="" />
          <img src="src/assets/brex.png" alt="" />
          <img src="src/assets/broadcom.png" alt="" />
          <img src="src/assets/checkr.png" alt="" />
          <img src="src/assets/motive.png" alt="" />
          <img src="src/assets/nba.png" alt="" />
          <img src="src/assets/sendoso.png" alt="" />
          <img src="src/assets/twilio.png" alt="" />
          <img src="src/assets/univision.png" alt="" />
          <img src="src/assets/wordmark.png" alt="" />
          <img src="src/assets/zendesk.png" alt="" />
        </div>
      </div>
    </section>
  );
}
