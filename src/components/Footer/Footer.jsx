import React, { useState } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [hasSubscribed, setHasSubscribed] = useState(false);

  const subscribe = async () => {
    if (!email) {
      return;
    }
    setHasSubscribed(true);
    const response = await axios.post(
      `https://realestatesubscribe.azurewebsites.net/api/subsribe?email=${email}`
    );

    console.log(response);
  };

  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="" />
          <p className="text-gray-400 mt-4">Lily Shang</p>
          <p className="text-gray-400">412-616-6276</p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Header" className="hover:text-white">
              Home
            </a>
            <a href="#About" className="hover:text-white">
              About Me
            </a>
            <a href="#Contact" className="hover:text-white">
              Contact Me
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            The latest news, articles and events
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="py-2 px-4 rounded bg-blue-500 text-white"
              onClick={subscribe}
            >
              {hasSubscribed ? "Subscribed Success" : "Subscribe"}
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright {new Date().getFullYear()} © Estate All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
