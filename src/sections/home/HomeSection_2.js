
"use client"
import React, { useEffect, useState } from 'react'
import { FaBrush } from "react-icons/fa6";
import { GiArcheryTarget } from "react-icons/gi";
import { FaRegLightbulb } from "react-icons/fa";
import Image from 'next/image';


const HomeSection_2 = () => {
    const [isSlide, setIsSlide] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 300) {
            setIsSlide(true);
          } else {
            setIsSlide(false);
          }
          return () => {
            window.removeEventListener("scroll");
          };
        });
      }, [isSlide]);

  return (
    <section className="second-section">
        <div className={`scnd-contant ${isSlide ? "slide" : ""}`}>
          <div className="card-scnd">
            <div className="img" style={{position:"relative"}}>
              <Image fill src="/img/scnd-img1.webp" alt="" />
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
            <div className="img" style={{position:"relative"}}>
              <Image fill src="/img/scnd-img2.webp" alt="" />
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
            <div className="img" style={{position:"relative"}}>
              <Image fill src="/img/scnd-img3.webp" alt="" />
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
  )
}

export default HomeSection_2
