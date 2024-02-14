"use client";
import React, {  useState } from "react";
import "@/style/hero.scss";
import gsap from "gsap/all";
import Button from "./Button";
import { FaBrush } from "react-icons/fa6";
import { GiArcheryTarget } from "react-icons/gi";
import { FaRegLightbulb } from "react-icons/fa";
import ImgFlip from "./ImgFlip";
import Typ from "./Typ";

function Hero() {
  const [isSlide, setIsSlide] = useState(false);

  function showelm() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setIsSlide(true);
      } else {
        setIsSlide(false);
      }
    });
  }
  showelm();


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

  return (
    <>
      <div className="container">
        <div className="content">
          <h5>Hello I am</h5>
          <h1>Mohammad Asad</h1>
          <Typ/>
          <p>
            I'm creative designer based in India, and I'm very passionate and
            dedicated to my work.
          </p>

          <Button name="About me" href="about" />
        </div>
        <ImgFlip/>
      </div>

      <section className="second-section">
        <div className={`scnd-contant ${isSlide ? "slide" : ""}`}>
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
              <img src="/scnd-img2.webp" alt=""   />
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
              <img src="/scnd-img3.webp" alt=""/>
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
