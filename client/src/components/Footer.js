
import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";
import SubmitEmail from './SubmitEmail';
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 mb-md-0 mb-4">
              <div className="footer-top-data d-flex gap-2 align-items-center">
                <img src={newsletter} alt="newsletter" className="me-2" />
                <h2 className="mb-0 text-dark">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-md-7">
              <div className="input-group">
                <SubmitEmail />
                <span id="msg"></span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4 text-black">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-md-0 mb-4">
              <h4 className="mb-4">Contact Us</h4>
              <div className="social_icons d-flex align-items-center gap-4">
                <a className="text-white" href="#">
                  <BsLinkedin className="contact_links fs-4" />
                </a>
                <a className="text-white" href="#">
                  <BsInstagram className="contact_links fs-4" />
                </a>
                <a className="text-white" href="#">
                  <BsGithub className="contact_links fs-4" />
                </a>
                <a className="text-white" href="#">
                  <BsYoutube className="contact_links fs-4" />
                </a>
              </div>
            </div>
            <div className="col-md-3 mb-md-0 mb-4">
              <h4 className="mb-4">Information</h4>
              <div className="footer-link" style={{ color: 'black' }}>
                <Link to="/privacy-policy" className="contact_links d-block mb-4" style={{ color: 'black' }}>
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="contact_links d-block mb-4" style={{ color: 'black' }}>
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="contact_links  d-block mb-4" style={{color:'black'}}>
                  Shipping Policy
                </Link>
                <Link to="/term-conditions" className="contact_links  d-block mb-4" style={{color:'black'}}>
                  Terms & Conditions
                </Link>
                <Link className="contact_links d-block mb-1" style={{color:'black'}}>Blogs</Link>
              </div>
            </div>
            <div className="col-md-3 mb-md-0 mb-4">
              <h4 className="mb-4">Account</h4>
              <div className="footer-link">
                <Link to="/contact" className="contact_links d-block mb-4" style={{color:'black'}}>Contact</Link>
                <Link to="/about" className="contact_links d-block mb-4" style={{color:'black'}}>About Us</Link>
                <Link to="/faq" className="contact_links d-block mb-4" style={{color:'black'}}>Faq</Link>
              </div>
            </div>
            <div className="col-md-2">
              <h4 className="mb-4">Quick Links</h4>
              <div className="footer-link">
                <Link className="contact_links d-block mb-4" style={{color:'black'}}>Laptops</Link>
                <Link className="contact_links d-block mb-4" style={{color:'black'}}>Headphones</Link>
                <Link className="contact_links d-block mb-4" style={{color:'black'}}>Tablets</Link>
                <Link className="contact_links d-block mb-4" style={{color:'black'}}>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4 text-black">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p className="mb-0">
                &copy; {new Date().getFullYear()}; Powered by Developer's Corner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;