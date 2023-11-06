"use client"
import React, { useState } from 'react';
import Image from "next/image";
import logo from "../assets/logo-white.png";
import Web5 from "../../../public/images/portfolio-logo.png";
// import burgerMenu from "../assets/burger-menu.png";
const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

  return (
    <div className="flex justify-center items-center p-4" style={{background: `linear-gradient(to bottom, #4FC3F7, #1565C0)`}}>
      <Image src={Web5} className="w-52"/>
    </div>
//     <header className="bg-white p-4">
//     <div className="container mx-auto">
//         <div className="flex justify-center md:justify-between items-center">
//             <div className="flex items-center">
//                 <img src="path_to_logo_image" alt="TappWallet Logo" className="w-8 h-8 md:w-12 md:h-12" />
//                 <span className="ml-2 text-xl md:text-2xl font-bold">TappWallet</span>
//             </div>
//             <div className="md:hidden">
//                 <button onClick={toggleMenu}>
//                     <img src="path_to_hamburger_icon" alt="Menu Icon" className="w-6 h-6" />
//                 </button>
//                 {isMenuOpen && (
//                     <div className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
//                         <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Home</a>
//                         <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About</a>
//                         <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Services</a>
//                         <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact</a>
//                     </div>
//                 )}
//             </div>
//         </div>
//     </div>
// </header>
  );
};

export default Header;
