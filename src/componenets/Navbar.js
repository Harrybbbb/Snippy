import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav flex flex-row sm:flex-row h-auto sm:h-12 justify-between items-center px-4 sm:px-8 md:px-10 py-4 sm:py-6 md:py-10 backdrop-blur-sm sticky top-0 left-0 w-full z-50">
      <div className="logo mb-2 sm:mb-0">
        <Link to = "/"><p className="text-xl sm:text-2xl text-white font-display">&lt;/&gt;</p></Link>
      </div>
      <ul className="flex flex-row sm:flex-row gap-4 sm:gap-6 md:gap-8">
        <Link to="/">
          <li className="text-base sm:text-lg md:text-xl hover:text-white text-grey font-basic font-normal cursor-pointer">
            Home
          </li>
        </Link>
        <Link to="/Dsa_nerds">
          <li className="text-base sm:text-lg md:text-xl hover:text-white text-grey font-basic font-normal cursor-pointer">
            Dsa_nerds
          </li>
        </Link>
        <Link to="/About">
          <li className="text-base sm:text-lg md:text-xl hover:text-white text-grey font-basic font-normal cursor-pointer">
            About
          </li>
        </Link>
      </ul>
    </nav>
  );
}
