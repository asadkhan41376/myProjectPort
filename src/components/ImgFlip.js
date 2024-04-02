"use client";
import React, { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb"; 
import { SiNextdotjs } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import Image from "next/image";
function ImgFlip() {


    useEffect(()=>{
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
    }, 6000);
  }
  imageFlip();
    // ================================ flip image end ======================================
        
    },[])
  return (
    <>
      <div className="imgcon">
          <div className="hero-img">
            <div className="hero-img-flip-con">
              <img src="/img/hero1.webp" className="frunt" alt="" priority="high"/>
              <img src="/img/CapHero.jpg" alt="sss" className="back" priority="high"  />
            </div>
            <div className="icons">
              <FaReact className="icon-react icon" />
              <TbBrandJavascript className="icon-js icon" />
              <SiNextdotjs className="icon-next icon" />
              <IoLogoCss3 className="icon-css icon" />
            </div>
          </div>
        </div>
    </>
  )
}

export default ImgFlip
