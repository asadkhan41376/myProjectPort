"use client";
import React, { useState } from "react";
import "@/style/header.scss";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";

function Header() {
  const [menu, setMenu] = useState(false);
  function toggle() {
    setMenu(!menu);
  }
  return (
    <>
      <nav>
        <div className="logo">
          <h1>
            Port<span>folio</span>
          </h1>
        </div>
        <div className={menu ? " nav-mobile " : "nav-list"}>
          <ul>
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/about">about</Link>
            </li>
            <li>
              <Link href="">skill</Link>
            </li>
            <li>
              <Link href="">project</Link>
            </li>
            <li>
              <Link href="/contect">contect</Link>
            </li>
          </ul>
        </div>
        <div className="menu-i" onClick={toggle}>
          {menu ? <IoMdClose /> : <IoIosMenu />}
        </div>
      </nav>
    </>
  );
}

export default Header;
