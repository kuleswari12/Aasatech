import React from "react";

const ExpertHelp = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">Get Started with Expert Help</h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet consectetur. Tellus sed dictumst tristique semper ultrices.
          <span> In metus nunc integer magna accumsan tempus sed quam.</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mt-10 px-4">
        <div className="bg-blue-100 p-6 rounded-lg shadow-md flex-1 max-w-md">
          <h3 className="font-semibold text-xl">Consultation & Training</h3>
          <p className="text-gray-600 text-base mt-2">
            Our experts are here to answer your questions and guide you through every step, helping you set up workflows that truly fit how your team operates.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 transition">
            Schedule a Consultation
          </button>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md flex-1 max-w-md">
          <h3 className="font-semibold text-xl">Full Implementation</h3>
          <p className="text-gray-600 text-base mt-2">
            Leave the setup to us—account configuration, data migration, workflow customization, and team onboarding are all part of the package.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Book a Call
            </button>
            <button className="bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>

  );
};

export default ExpertHelp;
