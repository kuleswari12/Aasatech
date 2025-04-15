import React from "react";
import { Mail, Rocket, Anchor, Puzzle } from "lucide-react";
import Noise from '../assets/Noise.png'

const EmailSubscription = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-10 px-4 py-16 bg-gray-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={Noise}
          alt="Background Pattern"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative z-10 w-full max-w-3xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-8">
          Great relationships start here
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-3 bg-white border border-gray-300 shadow-md rounded-full px-4 py-2 w-full">
          <div className="flex items-center text-gray-500">
            <Mail size={22} />
          </div>
          <input
            type="email"
            placeholder="Your Working Email"
            className="flex-grow px-3 py-2 text-gray-900 focus:outline-none text-lg font-medium rounded-full"
          />
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-all w-full sm:w-auto">
            Get started
          </button>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-10">
          <div className="flex flex-col items-center">
            <Rocket size={26} className="text-black mb-2" />
            <p className="text-sm font-semibold">Blazing fast UI</p>
          </div>
          <div className="flex flex-col items-center">
            <Anchor size={26} className="text-black mb-2" />
            <p className="text-sm font-semibold">One View</p>
          </div>
          <div className="flex flex-col items-center">
            <Puzzle size={26} className="text-black mb-2" />
            <p className="text-sm font-semibold">Integrations</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default EmailSubscription;
