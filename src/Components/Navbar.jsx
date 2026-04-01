import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 border-b border-gray-800">
      <div className="text-xl font-semibold flex items-center gap-2">
        <img src="../assets/logowelcome.svg.png" alt="" />
      </div>

      <ul className="hidden md:flex gap-8 text-gray-300">
        <li className="hover:text-[#87E64B] cursor-pointer">Features</li>
        <li className="hover:text-[#87E64B] cursor-pointer">Pricing</li>
        <li className="hover:text-[#87E64B] cursor-pointer">Events</li>
        <li className="hover:text-[#87E64B] cursor-pointer">About</li>
        <li className="hover:text-[#87E64B] cursor-pointer">Blog</li>
      </ul>

      <div className="flex gap-4 items-center">
        <span className="text-gray-300 cursor-pointer">Support</span>
        <span className="text-gray-300 cursor-pointer">Login</span>
        <button className="bg-indigo-600 px-5 py-2 rounded-full hover:bg-indigo-500 transition">
          Demo
        </button>
      </div>
    </nav>
  );
}
