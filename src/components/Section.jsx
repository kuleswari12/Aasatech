import { Frame } from "lucide-react";
import React from "react";
import frame1 from "../assets/Frame1.png";
import frame2 from "../assets/Frame2.png";
import frame3 from "../assets/Frame3.png";

const Section = () => {
  const sections = [

    {
      title: "Book online demo",
      button: "Get Demo",
      image: frame1,
    },
    {
      title: "Find the answers",
      button: "Knowledge Base",
      image: frame2,
    },
    {
      title: "Ask questions",
      button: "Support Chat",
      image: frame3,
    },
  ];


  return (
    <>
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold">Need Help?</h2>
        <p className="text-gray-600 mt-2">
          Explore our resources to quickly get started with DSolutions business management software
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sections.map((sec, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-lg shadow-md p-6 flex flex-col items-center"
            >
              <h3 className="text-xl font-medium">{sec.title}</h3>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                {sec.button}
              </button>
              <img
                src={sec.image}
                alt={sec.title}
                className="mt-4 w-full h-auto rounded"
              />
            </div>
          ))}
        </div>
      </section>

    </>
  );
};

export default Section;
