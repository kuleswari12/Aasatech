import React from "react";
import leftImage from "../assets/Group 176.png";
import rightImage from "../assets/Group 177.png";

const GetInTouch = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center py-16 px-6 bg-gray-100 space-y-10 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={leftImage}
            alt="Left"
            className="w-64 h-auto rounded-lg  object-cover"
          />
        </div>
        <div className="w-full md:w-1/3 text-center px-4">
          <h2 className="text-3xl font-bold text-gray-800">Get in touch</h2>
          <p className="text-gray-600 mt-4">
            Want to get in touch? We’d love to hear from you. Here’s how you can reach us.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={rightImage}
            alt="Right"
            className="w-64 h-auto rounded-lg object-cover"
          />
        </div>
      </section>

    </>
  );
};

export default GetInTouch;
