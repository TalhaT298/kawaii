/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from '../../../assets/logo.png';
import text from '../../../assets/text.png';
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import './Navbar.css';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="flex items-center justify-between bg-pink-100 px-4 py-2 text-white flex-wrap">
        <Link to="/">
        <div className="flex items-center scale-100 rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200">
          <img src={logo} className="h-10" alt="logo" />
          <img src={text} className="h-10" alt="logo" />
          {/* <p className="text-2xl text-pink-400 ml-2">kawaiVelvet</p> */}
        </div>
        </Link>
        <button className="md:hidden block text-pink-400 focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <ul className={`md:flex items-center justify-between gap-6 text-slate-900 w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li className="cursor-pointer rounded-full px-6 py-2 text-pink-400 font-semibold">
            Home
          </li>
          <Link to="/services">
            <li className="cursor-pointer rounded-full px-6 py-2 text-pink-400 font-semibold">
              Services
            </li>
          </Link>
          <li className="cursor-pointer rounded-full px-6 py-2 text-pink-400 font-semibold">
            About
          </li>
          <Link to="/login">
          <li className="cursor-pointer rounded-full px-6 py-2 text-pink-400 font-semibold">
            Login
          </li>
          </Link>
          <Link to="">
          <li className="cursor-pointer bg-pink-300 px-6 py-3 text-white font-semibold flex-grow hover:text-pink-400 hover:bg-pink-100">
          Collection
          </li>
          </Link>
        </ul>
        <div className="hidden md:flex items-center">
          <li className="cursor-pointer flex gap-1 list-none rounded-full px-6 py-2 text-white">
          <IoCall  className="w-8 h-6 ring icon text-pink-300"/>
           <span className="text-pink-400  font-semibold">Contact</span>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
