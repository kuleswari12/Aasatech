import React from "react";
import { MapPinIcon, AtSymbolIcon } from "@heroicons/react/24/solid";

const ContactUs = () => {
  return (
    <section className="py-16 px-6 bg-white grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="max-w-6xl mx-auto md:col-span-1">
        <h2 className="text-3xl font-bold mb-4">
          <span className="border-l-4 border-blue-500 pl-2">Contact Us</span>
        </h2>
        <p className="text-gray-600 mb-6">
          Contact us today to learn how DSolutions can make your team or agency
          more efficient and productive. Our experts will advise you on the best
          plan to manage your projects, workflows, and processes.
        </p>
        <div>
          <h3 className="text-xl font-semibold mb-4">We are glad to see you</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-2">
                <MapPinIcon className="h-5 w-5 text-blue-500 mr-2" />
                <h4 className="font-semibold text-blue-600">Our mailing address is</h4>
              </div>
              <p className="text-gray-600">
                240, C1 Building, One Central, WTC, Dubai PO 114142
              </p>
            </div>
            <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-2">
                <AtSymbolIcon className="h-5 w-5 text-blue-500 mr-2" />
                <h4 className="font-semibold text-blue-600">Email</h4>
              </div>
              <p className="text-gray-600">support@dsolutions.com</p>
            </div>
          </div>
        </div>
        <div className="w-full mt-4 md:mt-0 bg-white p-8 rounded-lg shadow-md md:col-span-1">
          <p className="text-blue-500">Our insta id:?</p>
        </div>
      </div>
      <div className="bg-blue-100 p-6 rounded-lg shadow-xl md:col-span-1">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 border rounded-lg shadow-sm"
        />
        <input
          type="email"
          placeholder="Email ID"
          className="w-full p-3 mb-4 border rounded-lg shadow-sm"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 mb-4 border rounded-lg h-24 shadow-sm"
        ></textarea>
        <button className="w-full bg-blue-300 text-white py-3 rounded-lg shadow-md hover:shadow-lg">
          Submit
        </button>
        <p className="text-xs text-gray-500 mt-2">
          By submitting, you confirm that you agree to the storing and processing of your personal data by DSolutions as described in our{" "}
          <span className="text-blue-500">Privacy Statement</span>.
        </p>
      </div>
    </section>
  );
};

export default ContactUs;
