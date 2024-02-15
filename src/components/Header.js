"use client";
import React, { useState } from "react";
import "@/style/header.scss";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";


function Header() {
  const [menu, setMenu] = useState(true);
  function toggle() {
    setMenu(!menu);  // menu  is not ecual to  setMenu 
  }
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
            <li>
              <Link href="/" onClick={menu ? "" : toggle}>home</Link>
            </li>
            <li>
              <Link href="/about"onClick={menu ? "" : toggle}>about</Link>
            </li>
            <li>
              <Link href="/skill" onClick={menu ? "" : toggle}>skill</Link>
            </li>
            <li>
              <Link href="/project"onClick={menu ? "" : toggle}>project</Link>
            </li>
            <li>
              <Link href="/contect" onClick={menu ? "" : toggle}>contect</Link>
            </li>
          </ul>
        </div>
        <div className="menu-i" onClick={toggle}>
          {menu ?  <IoIosMenu />: <IoMdClose />}
        </div>
      </nav>
    </>
  );
}

export default Header;
