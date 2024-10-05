import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full p-6 z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <a href="#">MNTN</a>
        </div>

        <ul className="flex space-x-8">
          <li>
            <a href="#section1" className="hover:text-gray-300">
              Equipment
            </a>
          </li>
          <li>
            <a href="#section2" className="hover:text-gray-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#section3" className="hover:text-gray-300">
              Blog
            </a>
          </li>
        </ul>

        <div className="text-white flex items-center space-x-2">
          <FaUserCircle size={24} />
          <a href="#">Account</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
