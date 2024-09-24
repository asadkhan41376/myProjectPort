"use client";
import React, {  useRef } from "react";
import "@/style/hero.scss";
import ImgFlip from "../../components/ImgFlip";
import Typ from "../../components/Typ";
import { useGSAP } from "@gsap/react";
import { TimeLine } from "../../layout/header/Header";
import Sound from "../../components/Sound";
import Button from "@/components/Button";

function Hero() {

 
  
const content =useRef()
  useGSAP(() => {
    const tl = TimeLine();
    tl.from(content.current, {
      x: -100,
      opacity: 0,
      duration: 1.5,
    })
      .from(".hero-img img", {
        x: 100,
        opacity: 0,
        duration: 1.5,
      })
      .from(".icon-react,.icon-next,.icon-js,.icon-css", {
        stagger: 0.2,
        opacity: 0,
        scale: 0,
        duration: 1.2,
      });
  }, []);
  return (
    <>
    <Sound/>
      <div className="container">
        <div className="content" ref={content}>
          <h5>Hello I am</h5>
          <h1>Mohammad Asad</h1>
          <Typ />
          <p>
            I am creative designer based in India, and I am very passionate and
            dedicated to my work.
          </p>

          <Button name="About me" href="about" />
        </div>
        <ImgFlip />
      </div>

     
    </>
  );
}



export default Hero;
