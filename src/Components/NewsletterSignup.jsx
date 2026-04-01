import React, { useState } from "react";

const NewsletterSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed:", { firstName, email });
    setFirstName("");
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <div
      className="w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{ backgroundImage: "url('../assets/News-.png')" }}
    >
      <div className="flex flex-col md:flex-row w-full max-w-6xl rounded-2xl shadow-lg overflow-hidden">
        <div className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-center text-white bg-cover bg-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Stay Connected!
          </h2>
          <p className="text-lg sm:text-xl">
            Subscribe to our newsletter and never miss updates, offers, and the
            latest news.
          </p>
        </div>
        <div className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Signup for the newsletter
          </h2>
          <p className="text-white mb-6">Join our mailing list</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white mb-1" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter your first name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-white mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
