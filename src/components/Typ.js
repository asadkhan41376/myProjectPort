"use client"
import React from 'react'
import { useEffect } from 'react';
import Typed from "typed.js";

function Typ() {

    useEffect(()=>{
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
    })

    
  return (
    <div>
      <h3>
            <span className="element"></span>
          </h3>
    </div>
  )
}

export default Typ
