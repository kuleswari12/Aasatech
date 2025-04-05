import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { FaPinterest } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white py-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  ml-5 mr-5 gap-6">
          <div>
            <h3 className="text-xl font-semibold">Features</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Online CRM</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Project Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Task Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Financial Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Online Invoicing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Knowledge Base</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Mind Maps</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Industry Solutions</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Marketing Agencies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Building & Construction</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">IT Departments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Business Consultants</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Legal Professionals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Educational Institutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Manufacturing Sector</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Resources</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Use Cases</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Project Templates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Free Invoice Generator</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Sitemap</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Pricing</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Become a Partner</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Find a Partner</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Implementation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Term of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Stay up to date with platform news and event announcements</h3>
            <div className="flex mt-3">
              <button className="bg-blue-600 px-4 py-2 text-white text-center rounded  w-full">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Youtube className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaPinterest className="w-6 h-6" />
              </a>
            </div>
            <div>
              <div className="mt-4 flex items-center text-gray-400">

                <a href="mailto:support@dsolutions.com" className="hover:text-white">support@dsolutions.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
          Copyright &copy; 2025-2025All rights reserved.
        </div>
      </footer>
    </>

  );
};

export default Footer;
