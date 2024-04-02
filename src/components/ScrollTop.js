"use client";

import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

function ScrollTop() {
  const [isActiv, setIsActiv] = useState(false);

  useEffect(()=>{
    if (typeof window !== 'undefined'){
      window.addEventListener("scroll", function () {
        if (this.window.scrollY > 450) {
          setIsActiv(true);
        } else {
          setIsActiv(false);
        }
      });
    }


    window.addEventListener("scroll", function () {
    if (this.window.scrollY > 450) {
      setIsActiv(true);
    } else {
      setIsActiv(false);
    }
  });
  },[isActiv])

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    
  };

  

  return (
    <div>
      <div className={`to-top-btn ${isActiv ? "active" : ""}`} onClick={toTop}>
        <IoIosArrowUp />
        <h1>Back To Top</h1>
      </div>
    </div>
  );
}

export default ScrollTop;
