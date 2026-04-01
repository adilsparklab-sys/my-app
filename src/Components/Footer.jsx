import React from "react";


const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-start gap-40">
          <div className=".flex-shrink-0">
            <img
              src="../assets/logo-footer.png"
              alt="Logo"
              className="w-36"
            />
          </div>

          <div className="flex flex-1 flex-wrap gap-12 lg:gap-50">
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold mb-2">Product</h4>
              <a href="#" className="hover:text-blue-500 transition">
                Explore
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                Features
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                Pricing
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-semibold mb-2">Explore</h4>
              <a href="#" className="hover:text-blue-500 transition">
                Event
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                Blog
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-semibold mb-2">Company</h4>
              <a href="#" className="hover:text-blue-500 transition">
                About us
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                Events
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                Blog
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                Contact us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm flex flex-col md:flex-row md:justify-between gap-2">
          <span>© 2022 Welcome. All rights reserved.</span>
          <div className="flex gap-4 justify-center md:justify-end">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
