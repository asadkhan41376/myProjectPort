"use client"

import React from 'react'
import { IoIosArrowUp } from "react-icons/io";

import { useEffect } from 'react';

function ScrollTop() {
    useEffect(()=>{
        let topBtn =document.querySelector(".to-top-btn");
        topBtn.addEventListener("click",function(){
          window.scrollTo(0,0);
        })

        window.addEventListener("scroll",function(){
          if(window.scrollY > 450){
            topBtn.classList.add("active");
          }
          else{
            topBtn.classList.remove('active');
    
        }
        })
      
      })
  return (
    <div>
       <div className="to-top-btn">
       <IoIosArrowUp /><h1>Back To Top</h1>

   </div>
    </div>
  )
}

export default ScrollTop
