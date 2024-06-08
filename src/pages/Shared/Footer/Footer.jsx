/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io";
import logo from "../../../assets/logo.png"
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-pink-300 text-base-content">
        <aside>
          <div>
            <img src={logo} className="h-10" alt="" />
            <p>Your one stop shop for your shop needs!</p>
            <div className="flex">
              <Link>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/talha.tarique.5"
                  className=" "
                >
                  <GrFacebookOption size="1.7rem" color="black" />
                </a>
              </Link>
              <Link>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/talha_tarique77/"
                  className=" "
                >
                  <IoLogoInstagram size="1.7rem" color="black" />
                </a>
              </Link>
            </div>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jo</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cokie policy</a>
        </nav>
        
      </footer>
      <p className="bg-pink-300 text-center font-sans">Copyright ©2022 All right reserved by Kawai Velvet</p>
    </div>
  );
};

export default Footer;
