import React, { useState } from "react";
import { Globe, ChevronDown, Search } from "lucide-react";
import logo from "../assets/DSolutions.png";

const Dropdown = ({ title, items, openDropdown, setOpenDropdown }) => {
  const isOpen = openDropdown === title;

  return (
    <div className="relative">
      <button
        onClick={() => setOpenDropdown(isOpen ? null : title)}
        className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{title}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md border rounded-md z-50">
          {items.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => setOpenDropdown(null)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md relative">
      <img src={logo} alt="Logo" className="w-36" />
      <ul className="hidden md:flex space-x-6">
        <Dropdown title="Features" items={["Feature 1", "Feature 2", "Feature 3"]} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
        <Dropdown title="Solutions" items={["Solution 1", "Solution 2", "Solution 3"]} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
        <Dropdown title="Resources" items={["Resource 1", "Resource 2", "Resource 3"]} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
        <li className="cursor-pointer hover:text-blue-600" onClick={() => setOpenDropdown(null)}>Pricing</li>
      </ul>
      <div className="flex items-center space-x-2">
        <Search className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600" onClick={() => setOpenDropdown(null)} />
        <Globe className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600" onClick={() => setOpenDropdown(null)} />En
        <button className="border mr-4 ml-2 px-4 py-2 rounded hover:bg-gray-100" onClick={() => setOpenDropdown(null)}>Get Started</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => setOpenDropdown(null)}>
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
