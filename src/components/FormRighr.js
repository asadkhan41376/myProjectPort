import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import Link from 'next/link';


function FormRighr() {
  return (
    <>
      <div className='From_right'>

        <ul>
            <li><Link href="#contect-secound-section"><FaLocationDot/></Link></li>
            <Link href="#contect-secound-section"> <li>Sajjan Nagar A block, Udaipur raj.</li></Link>
        </ul>
        <ul>
            <li><Link href="mailto:asadkhan41376@gmail.com"><IoMdMail/></Link></li>
            <Link href="mailto:asadkhan41376@gmail.com">  <li>asadkhan41376@gmail.com </li></Link>
        </ul>
        <ul>
            <li><Link href="tel:7976891704"><FaPhone/></Link></li>
            <Link href="tel:7976891704"> <li>7976891704</li></Link>
        </ul>
      </div>
    </>
  )
}

export default FormRighr
