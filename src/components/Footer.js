"use client"

import React, { useEffect } from 'react'
import "@/style/footer.scss"


function Footer() {
useEffect(()=>{
   let footer = document.querySelector(".footer");

   window.addEventListener("scroll",function(){
    if(window.scrollY > 750){
        footer.classList.add("slide");
    }else{
        footer.classList.remove("slide");
    }
   })
})

  return (
    <>
      <div className="footer ">
       
        <div className="left">
            <h3>Developed with love by Mohammad Asad © 2024 <br />
            asadkhan41376@gmail.com
            </h3>
        </div>
        <div className="right">
            <h3>Terms & ConditionPrivacy </h3>
            <h3>Policy</h3>
        </div>
      </div>
    </>
  )
}

export default Footer
