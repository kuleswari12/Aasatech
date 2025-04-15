import React from "react";
import { MapPinIcon, AtSymbolIcon } from "@heroicons/react/24/solid";

const ContactUs = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
  
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            <span className="border-l-4 border-blue-500 pl-3">Contact Us</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us today to learn how DSolutions can make your team or agency
            more efficient and productive. Our experts will advise you on the best
            plan to manage your projects, workflows, and processes.
          </p>
          <h3 className="text-xl font-semibold mb-4">We are glad to see you</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-gray-300 p-6  px-2 py-30 rounded-lg shadow-md">
            <MapPinIcon className="h-5 w-5 text-blue-500 mr-2" />
              <div className="flex items-center mb-2">
                <h4 className="font-semibold text-blue-600">Our mailing address is</h4>
              </div>
              <p className="text-gray-600">
                240, C1 Building, One Central, WTC, Dubai PO 114142
              </p>
            </div>
            <div className="border border-gray-300 p-6 rounded-lg  py-30 shadow-md">
            <AtSymbolIcon className="h-5 w-5 text-blue-500 mr-2" />
              <div className="flex items-center mb-2">
                <h4 className="font-semibold text-blue-600">Email</h4>
              </div>
              <p className="text-gray-600">support@dsolutions.com</p>
            </div>
          </div>
          
        </div>

        <div className="bg-blue-100 p-6 rounded-lg shadow-xl space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 border border-gray-300 rounded-lg h-32 shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition">
            Submit
          </button>
          <p className="text-xs text-gray-600">
            By submitting, you agree to the storing and processing of your personal data by DSolutions as described in our{" "}
            <span className="text-blue-500 underline cursor-pointer">Privacy Statement</span>.
          </p>
        </div>
      </div>
      <hr className="mt-12 border-t-2 border-gray-300 w-full" />
    </section>

  );
};

export default ContactUs;
