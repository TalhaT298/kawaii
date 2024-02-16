import React from 'react';
import { Link } from 'react-router-dom';
import { GrFacebookOption } from 'react-icons/gr';
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-pink-200 text-base-content">
  <aside>
    <div>
    <p>Kawaii Valvet</p>
    <p>Your one stop shop for your shop needs!</p>
    <Link><a target='_blank' rel="noreferrer" href='https://www.facebook.com/talha.tarique.5' className='border-[1px] p-[5px] rounded-full hover:bg-[#444] transition duration-300'><GrFacebookOption /></a></Link>
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
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;