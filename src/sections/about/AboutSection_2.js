import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

const AboutSection_2 = () => {
  return (
    <div className="section-2">
    <h1>
     <span className="h1-span"> Get in touch </span>  with me on social media. It is the best way to stay
      connected with me and get quick updates on what I am up to. Dont miss
      out on this opportunity to connect, so follow me on your preferred
      social media platform today!
    </h1>
    <div className="icons-div">
     
      <div className="AboutElm">
      <Link href="https://www.instagram.com/mohd____asad_" target="blank"><FaInstagram className="about_icon instagram" /></Link> 
      </div>
      <div className="AboutElm">
      <Link href="https://youtube.com/channel/UC8HPJmfryPXaXq01IR-ZuBg" target="blank">  <FaYoutube className="about_icon yt" /></Link>
      </div>
      <div className="AboutElm" >
      <Link href="https://wa.me/7976891704" target="blank"><FaWhatsapp  className="about_icon whatsup"/></Link>

      </div>
      <div className="AboutElm" data-img="/img/linkdin.webp">
      <Link href="https://www.linkedin.com/in/mohammad-asad-591981258/" target="blank"><FaLinkedinIn  className="about_icon linkdin"/></Link>

      </div>
    </div>
  </div>
  )
}

export default AboutSection_2
