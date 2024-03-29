"use client";
import React, { useState,useLocation, useEffect } from "react";
import gsap from "gsap/all";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import Change from "./Change";








//  export const TimeLine= ()=>{
//   const tl = gsap.timeline()
//   tl.from(".logo", {
//     y: -100,
//     opacity: 0,
//     duration: 1,
//   }).from(".staGar", {
//     y: -100,
//     stagger: .1,
//     opacity: 0,
//     duration: 1,
//   })

//   return tl 
//  }

function Header() {

  const [menu, setMenu] = useState(true);
  function toggle() {
    setMenu(!menu);  // menu  is not ecual to  setMenu 
  }
useEffect(()=>{
  window.addEventListener("scroll",function(){
    if(window.scrollY > 5){
      setMenu(menu); 
    }
   
  })
},)


  return (
    <>
      <nav>
        <div className="logo">
          <h1>
            Port<span>folio</span>
         
          </h1>
        </div>
        
        <div className={menu ? " nav-list " : "nav-mobile"}>
          <ul>
            <li className="staGar">
              <Link href="/" onClick={menu ? "" : toggle }>home</Link>
            </li>
            <li  className="staGar" >
              <Link href="/about"onClick={menu ? "" : toggle}>about</Link>
            </li>
            <li className="staGar">
              <Link href="/skill" onClick={menu ? "" : toggle}>skill</Link>
            </li>
            <li className="staGar">
              <Link href="/project"onClick={menu ? "" : toggle}>project</Link>
            </li>
            <li className="staGar">
              <Link href="/contact" onClick={menu ? "" : toggle}>contect</Link>
            </li>
          </ul>
          
        </div>

        <div className="ThemChanger staGar">
        <Change className="changecompo"/>

        </div>
        <div className="menu-i" onClick={toggle}>
          {menu ?  <IoIosMenu   className="staGar menu" />: <IoMdClose className="close" />}
        </div>
      </nav>
    </>
  );
}

export default Header;
