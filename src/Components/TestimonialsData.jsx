import React, { useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ally Masi",
      role: "Director of Industries Events Marketing",
      photo: "src/assets/alli..png",
      quote:
        "We chose Welcome because it’s intuitive, beautifully designed, and made for attendee interaction, making it the perfect way to uplevel our experiences. The Slack-like chat, on-stage Q&A, and polling has increased audience engagement.",
    },
    {
      name: "Talisha Brantley",
      role: "VP of Events",
      photo: "src/assets/TalishaBrantley.png",
      quote:
        "“Before Welcome, I had to get a switcher, use Ecamm, OBS and always needed this or that to make it all work. Now, one or two people can run our virtual events easily without any special equipment. With just one platform, we can do everything we want.”",
    },
    {
      name: "Sare",
      role: "Event Coordinator",
      photo: "src/assets/sare.png",
      quote: "The Welcome experience has been 10 out of 10. When our sponsors like Facebook are considering sponsoring our events, Welcome is our secret weapon",
    },
    {
      name: "Alex John",
      role: "Product Manager",
      photo: "src/assets/Alex.jpg",
      quote: "Working with this platform has transformed the way we engage with our audience. The interface is intuitive, and the support team is always there when we need them. Highly recommend!",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextSlide = () => setCurrent(current + 2 >= length ? 0 : current + 2);
  const prevSlide = () =>
    setCurrent(current - 2 < 0 ? length - 2 : current - 2);

  return (
    <section
      className="py-20 px-6 md:px-16 text-white"
      style={{
        background:
          "linear-gradient(to bottom, #db5995, #e99e87, #a5c5ca, #141414)",
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between mb-12">
        <div>
          <h2 className="text-4xl md:text-8xl font-bold text-black">
            Loved & Trusted
          </h2>
        </div>
        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
          >
            &#8594;
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.slice(current, current + 2).map((item, index) => (
          <div
            key={index}
            className="bg-black bg-opacity-50 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center"
          >
            <img
              src={item.photo}
              alt={item.name}
              className="w-24 h-24 rounded-full object-cover mb-4 shadow-md mx-auto"
            />
            <p className="text-white text-base md:text-lg mb-4">
              &ldquo;{item.quote}&rdquo;
            </p>
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-gray-300 text-sm">{item.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
