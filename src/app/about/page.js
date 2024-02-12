/* eslint-disable @next/next/no-img-element */
"use client";
import "@/app/about/about.scss";
import Button from "@/components/Button";
import { useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

function page() {
  useEffect(() => {
    let bck = document.querySelector(".section-2");
    let elm = document.querySelectorAll(".elm");

    // social-media effect
    elm.forEach(function (e) {
      e.addEventListener("mouseenter", function () {
        var bgimg = e.getAttribute("data-img");
        bck.style.backgroundImage = `url(${bgimg})`;
      });
      e.addEventListener("mouseleave", function () {
        bck.style.backgroundImage = `url(${""})`;
      });
    });
    // social-media effect end
  }, []);
  return (
    <>
      <div className="About-container">
        <div className="overaly"></div>
        <div className="containt">
          <h3>I&apos;m a Designer</h3>
          <h1>
            I Can Design Anything <br /> You Want
          </h1>
          <p>
            Hello there! I&apos;m a web designer, and I&apos;m very passionate
            and dedicated to my work. With 20 years experience as a professional
            web developer, I have acquired the skills and knowledge necessary to
            make your project a success. I enjoy every step of the design
            process, from discussion and collaboration.
          </p>
          <Button href="" name="Downlode Cv" />
        </div>
      </div>
      <div className="section-2">
        <img src="/dot.png" className="dotImag" alt="" />
        <h1>
          <span className="h1-span"> Get in touch </span> with me on social
          media. It&apos;s the best way to stay connected with me and get quick
          updates on what I&apos;m up to. Don&apos;t miss out on this
          opportunity to connect, so follow me on your preferred social media
          platform today!
        </h1>
        <div className="icons-div">
          <div className="elm" data-img="/insta.avif">
            <FaInstagram className="icon instagram" href="" />
          </div>
          <div className="elm" data-img="/yt.avif">
            <Link href="">
              {" "}
              <FaYoutube className="icon yt" />
            </Link>
          </div>
          <div className="elm" data-img="/wb.avif">
            <FaWhatsapp className="icon whatsup" />
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
