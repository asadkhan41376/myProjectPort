"use client";
import React, { useEffect } from "react";
import "@/style/hero.scss";
import { FaReact } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import Typed from "typed.js";
import Button from "./Button";
import { FaBrush } from "react-icons/fa6";
import { GiArcheryTarget } from "react-icons/gi";
import { FaRegLightbulb } from "react-icons/fa";

function Hero() {
  // useGSAP(() => {

  //   let tl = gsap.timeline();
  //   tl.from(".content", {
  //     x: -100,
  //     opacity: 0,
  //     duration: 2,
  //   })
  //     .from(".hero-img img", {
  //       x: 100,
  //       opacity: 0,
  //       duration: 2,
  //     })
  //     .from(".icon-react,.icon-next,.icon-js,.icon-css", {
  //       stagger: 0.5,
  //       opacity: 0,
  //       scale: 0,
  //       duration: 1,
  //     });
  // });




  // ================================ flip image ======================================
  function imageFlip() {
    const flip = document.querySelector(".hero-img-flip-con");
    setInterval(function () {
      // Rotate to 180 degrees every 8 seconds
      flip.style.transform = "rotateY(180deg)";
      flip.addEventListener("mousemove", function () {
        flip.style.transform = "rotateY(180deg)";
      });
      flip.addEventListener("mouseleave", function () {
        flip.style.transform = "rotateY(0)";
      });

      // After 5 second, rotate back to 0 degrees
      setTimeout(function () {
        flip.style.transform = "rotateY(0)";
      }, 5000);
    }, 8000);
  }
  // ================================ flip image end ======================================





  // ================================ SHOW ELM  ======================================
  function showelm() {
    const sec2Contant = document.querySelector(".scnd-contant");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        sec2Contant.classList.add("headinga");
      } else {
        sec2Contant.classList.remove("headinga");
      }
    });
  }
  // ================================ SHOW ELM END ======================================


  function typingAnime() {
    const typed = new Typed(".element", {
      strings: ["Frontend Developer", "I Love Coding", "Creat Some New"],
      typeSpeed: 200,
      smartBackspace: true,
      loop: true,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }


  useEffect(() => {
    // showelm();
    // imageFlip();
    // typingAnime();
  },[]);
  return (
    <>
      <div className="container">
        <div className="content">
          <h5>Hello I am</h5>
          <h1>Mohammad Asad</h1>
          <h3>
            <span className="element"></span>
          </h3>
          <p>
            I'm creative designer based in India, and I'm very passionate and
            dedicated to my work.
          </p>

          <Button name="About me" href="about" />
        </div>

        <div className="imgcon">
          <div className="hero-img">
            <div className="hero-img-flip-con">
              <img src="/hero1.webp" className="frunt" alt="" />
              <img src="/hero2.webp" alt="sss" className="back" />
            </div>
            <div className="icons">
              <FaReact className="icon-react icon" />
              <TbBrandJavascript className="icon-js icon" />
              <SiNextdotjs className="icon-next icon" />
              <IoLogoCss3 className="icon-css icon" />
            </div>
          </div>
        </div>
      </div>

      <section className="second-section">
        <div className="scnd-contant">
          <div className="card-scnd">
            <div className="img">
              <img src="/scnd-img1.webp" alt="" />
              <GiArcheryTarget className="img-icon" />
            </div>
            <div className="card-contant">
              <h1>Pixel Perfect</h1>
              <p>
                Most common methods for designing websites that work well on
                desktop is responsive and adaptive design.
              </p>
            </div>
          </div>

          <div className="card-scnd">
            <div className="img">
              <img src="/scnd-img2.webp" alt="" />
              <FaBrush className="img-icon " />
            </div>
            <div className="card-contant">
              <h1>High Quality</h1>
              <p>
                Most common methods for designing websites that work well on
                desktop is responsive and adaptive design.
              </p>
            </div>
          </div>

          <div className="card-scnd">
            <div className="img">
              <img src="/scnd-img3.webp" alt="" />
              <FaRegLightbulb className="img-icon" />
            </div>
            <div className="card-contant">
              <h1>Awesome Idea</h1>
              <p>
                Most common methods for designing websites that work well on
                desktop is responsive and adaptive design.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
