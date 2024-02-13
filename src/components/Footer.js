"use client";

import React, { useEffect, useState } from "react";
import "@/style/footer.scss";

function Footer() {
  const [isSlide, setIsSlide] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 750) {
        setIsSlide(true);
      } else {
        setIsSlide(false);
      }
    });
  }, []);

  return (
    <>
      <div className={`footer ${isSlide ? " slide" : ""} `}>
        <div className="left">
          <h3>
            Developed with love by Mohammad Asad © 2024 <br />
            asadkhan41376@gmail.com
          </h3>
        </div>
        <div className="right">
          <h3>Terms & ConditionPrivacy </h3>
          <h3>Policy</h3>
        </div>
      </div>
    </>
  );
}

export default Footer;
