"use client";
import "@/style/about.scss"
import Button from "@/components/Button";
import { useEffect } from "react";




function AboutSection_1() {
  useEffect(() => {
    let bck = document.querySelector(".section-2");
    let elm = document.querySelectorAll(".AboutElm");

    // social-media effect
    // elm.forEach(function (e) {
    //   e.addEventListener("mouseenter", function () {
    //     var bgimg = e.getAttribute("data-img");
    //     bck.style.backgroundImage = `url(${bgimg})`;
    //   });
    //   e.addEventListener("mouseleave", function () {
    //     bck.style.backgroundImage = `url(${""})`;
    //   });
    // });

   
  },[]);
  return (
    <>
      <div className="About-container">
        <div className="overaly"></div>
        <div className="containt">
          <h3>I am a Designer</h3>
          <h1>
            I Can Design Anything <br /> You Want
          </h1>
          <p>
            Hello I am a web designer, and I am very passionate and
            dedicated to my work. With 01 years experience as a professional web
            developer, I have acquired the skills and knowledge necessary to
            make your project a success. I enjoy every step of the design
            process, from discussion and collaboration.
          </p>
          <Button href="" name="Downlode Cv" />
        </div>
      </div>
     
    </>
  );
}

export default AboutSection_1;
