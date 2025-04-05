import React from "react";
import { Mail, Rocket, Anchor, Puzzle } from "lucide-react";
import Noise from '../assets/Noise.png'

const EmailSubscription = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-5 bg-gray-100 relative">
     
      <div className="absolute inset-0">
        <img
          src={Noise} 
          alt="Background Pattern"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      
      <div className="relative z-10 text-center">
       
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
          Great relationships start here
        </h1>

        
        <div className="relative flex items-center bg-white border border-gray-300 shadow-lg rounded p-1 w-full max-w-xl mx-auto">
        
          <span className="pl-4 text-gray-500">
            <Mail size={22} />
          </span>

         
          <input
            type="email"
            placeholder="Your Working Email"
            className="flex-grow px-4 py-3 text-gray-900 focus:outline-none text-lg font-medium"
          />

         
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-all">
            Get started
          </button>
        </div>

        
        <div className="mt-10 flex justify-center space-x-10">
         
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
