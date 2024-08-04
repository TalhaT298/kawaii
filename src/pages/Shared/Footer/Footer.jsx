/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";
import logo from "../../../assets/logo3.png";
// const Footer = () => {
//   return (
//     <div>
//       <footer className="footer p-10 bg-pink-300 text-base-content">
//         <aside>
//           <div>
//             <img src={logo} className="h-10" alt="" />
//             <p className="text-white pt-3 font-bold">Your one stop shop for your shop needs!</p>
<div className="flex gap-2 py-4">
  <Link>
    <a
      target="_blank"
      rel="noreferrer"
      href="https://www.facebook.com/talha.tarique.5"
      className=" "
    >
      <GrFacebookOption size="1.7rem" color="white" />
    </a>
  </Link>
  <Link>
    <a
      target="_blank"
      rel="noreferrer"
      href="https://www.instagram.com/talha_tarique77/"
      className=" "
    >
      <IoLogoInstagram size="1.7rem" color="white" />
    </a>
  </Link>
  <Link>
    <a
      target="_blank"
      rel="noreferrer"
      href="https://www.instagram.com/talha_tarique77/"
      className=" "
    >
      <FaPinterest size="1.7rem" color="white" />
    </a>
  </Link>
</div>;
//           </div>
//         </aside>
//         <nav className="text-white font-bold">
//           <h6 className="footer-title">Services</h6>
//           <a className="link link-hover">Branding</a>
//           <a className="link link-hover">Design</a>
//           <a className="link link-hover">Marketing</a>
//           <a className="link link-hover">Advertisement</a>
//         </nav>
//         <nav className="text-white font-bold">
//           <h6 className="footer-title">Company</h6>
//           <a className="link link-hover">About us</a>
//           <a className="link link-hover">Contact</a>
//           <a className="link link-hover">Job</a>
//           <a className="link link-hover">Press kit</a>
//         </nav>
//         <nav className="text-white font-bold">
//           <h6 className="footer-title">Legal</h6>
//           <a className="link link-hover">Terms of use</a>
//           <a className="link link-hover">Privacy policy</a>
//           <a className="link link-hover">Cokie policy</a>
//         </nav>

//       </footer>
//       <p className="bg-pink-300 text-center font-sans pb-2 text-white">Copyright ©2022 All right reserved by Kawai Velvet</p>
//     </div>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-pink-300 text-base-content rounded p-10">
        <img src={logo} className="h-16" alt="" />
         
          <nav className="grid grid-flow-col gap-4 text-white text-xl font-semibold">
            <a className="link link-hover">About</a>
            <a className="link link-hover">News</a>
            <a className="link link-hover">Cosmetics</a>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Gallery</a>
            <a className="link link-hover">Contacts</a>
          </nav>
         
        <nav>
          <div className="grid grid-flow-col gap-4">
            <div className="flex gap-4 py-">
              <Link>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/talha.tarique.5"
                  className=" "
                >
                  <GrFacebookOption size="2.3rem" color="white" />
                </a>
              </Link>
              <Link>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/talha_tarique77/"
                  className=" "
                >
                  <IoLogoInstagram size="2.3rem" color="white" />
                </a>
              </Link>
              <Link>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/talha_tarique77/"
                  className=" "
                >
                  <FaPinterest size="2.3rem" color="white" />
                </a>
              </Link>
            </div>
          </div>
        </nav>
        
      </footer>
    </div>
  );
};

export default Footer;
