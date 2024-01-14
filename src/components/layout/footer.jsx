

/* eslint-disable no-unused-vars */
import React from "react";
import "./css/footer.css";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

import { FaAngleRight,FaFacebook,FaTwitter,FaInstagram,FaLinkedin,FaYoutube, } from "react-icons/fa";

import FootLogo from "../../assets/brands/NodeJS.svg";
export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div>
      <div className="footer_root">
        <div className="container">
          <div className="footer_container">
            <div className="footer_logo">
              <img src={FootLogo} alt="Logo" className="img-fluid" />
              <div className="outro_container">
                <p>
                  <span className="snap-outro">Innovating Africa |</span>
                  &#169; {currentYear} IntelGigs Technologies.
                </p>
              </div>
            </div>

            <div className="footer-column">
              <div className="footer_section">
                <h4>Company</h4>

                <ul className="footer_list">
                  <li>
                    <Link to="/About-Us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/Contact-Us">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/FAQs">FAQs</Link>
                  </li>

                  <li>
                    <Link to="Contact-Us">Become Investor</Link>
                  </li>
                  <li>
                    <Link to="/Career">Career</Link>
                  </li>
                  
                </ul>
              </div>
            </div>

            <div className="footer-column">
              <div className="footer_section">
                <h4>About</h4>
                <ul className="footer-list ">
                  <li>
                    <Link to="/Services">Services</Link>
                  </li>
                  <li>
                    <Link to="/How-it-works">How it Works</Link>
                  </li>
                  <li>
                    <Link to="/Who-we-server">Who We Serve</Link>
                  </li>
                  <li>
                    <Link to="/Products">Products</Link>
                  </li>
                  <li>
                    <Link to="/Mission">Mission</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-column">
              <div className="footer_section-social">
                <h4>Social</h4>
                <ul className="footer-list foot-social-icon-text">
                  <li>
                    <Link to="/">
                      < FaFacebook  />
                    </Link>
                    <Link to="/">
                      {" "}
                      <p>Facebook</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaTwitter/>
                    </Link>
                    <Link to="/">
                      {" "}
                      <p>Twitter</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaInstagram />
                    </Link>
                    <Link to="/">
                      {" "}
                      <p>Instagram</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaYoutube />
                    </Link>
                    <Link to="/">
                      {" "}
                      <p>Youtube</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaLinkedin />
                    </Link>

                    <Link>
                      {" "}
                      <p>LinkedIn</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-column">
              <div className="footer_section">
                <h4>Legal</h4>
                <ul className="footer-list">
                  <li>
                    <Link to="/Terms-of-services">Terms of Service</Link>
                  </li>
                  <li>
                    <Link to="/Privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Divider
            layout="horizontal"
            className="flex md:hidden footer_divider"
            align="center"
            sx={{
              "&::before, &::after": {
                borderColor: "white",
              },
            }}
          >
            <b>IntelGigs Technologies.</b>
          </Divider>
          <div className="lower_footer_text">
            <p>
            IntelGigs Technologies stands at the forefront of innovation, offering cutting-edge solutions in the tech landscape. As a trailblazer in Nigeria, we specialize in providing comprehensive digital services. From web development to AI integration, we empower businesses to thrive in the dynamic digital realm. Our commitment to excellence and seamless client experiences sets IntelGigs apart. Join us on the journey to redefine possibilities and achieve unparalleled success in the digital era.
            </p>
          </div>
          <div className="address_container">
            <p>
            34A Diya Street Ifako Ifako, Gbagada, Lagos 100234, Ifako-Ijaiye, Lagos 102273, Lagos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}