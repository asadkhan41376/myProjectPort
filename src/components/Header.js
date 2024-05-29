"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

import Change from "./Change";

import { IoMenu } from "react-icons/io5";
import { usePathname } from "next/navigation";

export const TimeLine = () => {
  const tl = gsap.timeline();
  tl.from(".logo", {
    y: -100,
    opacity: 0,
    duration: 1,
  }).from(".staGar", {
    y: -100,
    stagger: 0.1,
    opacity: 0,
    duration: 1,
  });

  return tl;
};

function Header() {
  const [menu, setMenu] = useState(true);
  const pathName =usePathname()
  
  function toggle() {
    setMenu(!menu); // menu  is not ecual to  setMenu
  }
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 5) {
        setMenu(menu);
      }
    });
  }, [menu]);

const  sound3 =useRef()
const sound =()=>{
  sound3.current.play()
}
  return (
    <>
      <nav>
        <div className="logo">
          <h1>
            Port<span>folio</span>
          </h1>
        </div>

        <div className={menu ? " nav-list " : "nav-mobile"} >
          <ul>
            <li className="staGar" >
              <audio src="/sound/sound-1-167181.mp3" ref={sound3}></audio>
            
              <Link href="/" onClick={menu ? "" : toggle}  onMouseEnter={sound}
              className={`${pathName === '/' ? 'actv ': ''}`}
              >
                home
              </Link>
            </li>
            <li className="staGar">
              <Link href="/about" onClick={menu ? "" : toggle} 
                className={`${pathName === '/about' ? 'actv ': ''}`}
              >
                about
              </Link>
            </li>
            <li className="staGar">
              <Link href="/skill" onClick={menu ? "" : toggle}
               className={`${pathName === '/skill' ? 'actv ': ''}`}
              >
                skill
              </Link>
            </li>
            <li className="staGar">
              <Link href="/project" onClick={menu ? "" : toggle} 
                className={`${pathName === '/project' ? 'actv ': ''}`}
              >


                project
              </Link>
            </li>
            <li className="staGar">
              <Link href="/contact" onClick={menu ? "" : toggle}
                  className={`${pathName === '/contact' ? 'actv ': ''}`}
              >
                contect
              </Link>
            </li>
          </ul>
        </div>

        <div className="ThemChanger staGar">
          <Change className="changecompo" />
        </div>
        <div className="menu-i" onClick={toggle} >
          {menu ? (
            <IoMenu className="staGar menu" />
          ) : (
            <IoMdClose className="close" />
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
