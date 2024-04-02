"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


function Footer() {
  const [isSlide, setIsSlide] = useState(false);
  const [isYear, setIsYear] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 750) {
        setIsSlide(true);
      } else {
        setIsSlide(false);
      }
    });
    
  
    const d = new Date();
    let year = d.getFullYear();
    setIsYear(year)
  },[isSlide]);

  return (
    <>
      <div className={`footer ${isSlide ? " slide" : ""} `}>
        <div className="footer_first">
          <div className="coll">
            <h1>Follow me</h1>
            <ul className="ftr_list">
              <li>
                <Link href="">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link href="">
                  <FaYoutube />
                </Link>
              </li>
              <li>
                <Link href="">
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link href="">
                  <FaWhatsapp />
                </Link>
              </li>
            </ul>
          </div>
          <div className="coll">
            <h1>Links</h1>
            <ul className="ftr_list ">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contect">Contect</Link>
              </li>
            </ul>
          </div>

          <div className="coll">
            <h1>Contact Me</h1>
           <Link href="tel:7976891704"> 7976891704</Link>
          </div>

          <div className="coll">
            <h1>Address</h1>

           <p><Link href="/contact">Sajjan Nagar A Block Udaipur Raj.</Link></p>
          </div>

        
        </div>

     
        <div className="footer_secound">
          
          <div className="img_box">
            <img src="/img/my.jpg" alt="" />
          </div>
          <h4>
            Developed with love by Mohammad Asad © {isYear}<br />
            <Link
              href="mailto:asadkhan41376@gmail.com"
              style={{ textDecoration: "none" }}
            >
              <span style={{ textTransform: "lowercase", color: "white" }}>
                asadkhan41376@gmail.com
              </span>
            </Link>
          </h4>
        </div>
      </div>
    </>
  );
}

export default Footer;
