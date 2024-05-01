"use client"
import { data } from "@/projectData/db";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

function Effect() {
  const [items ,setItems]=useState(data)
 const FillterItem =(catItem)=>{
const upda = data.filter((item)=>{
return item.category=== catItem;
})
// console.log("Filtered items:", upda);
setItems(upda)
 }
  return (
    <>
    <div className="elements">
      <h1>Explorer My Project </h1>

      <div className="fillter">
      <ul>
        <li onClick={()=>setItems(data)}><Button href="" name="All"/></li>
       <li onClick={()=>FillterItem("webProject")}><Button href="" name="Web Projects"/></li> 
        <li onClick={()=>FillterItem("Bootstrap")}><Button href="" name="Bootstrap"/></li>
      
       
      </ul>
      </div>
      {items.map((item, index) => {
        return (
          <>
            <div className="elm" key={index}>
              <div className="num">
                <span>{index+1}</span>
              </div>

              <div className="mobile_image">
              <video src={item.ImgSrc} muted loop autoPlay></video>

              </div>

              <div className="heading">
                <Link href={item.links} target="_blank" style={{textDecoration:"none",color:"white"}}><h2>{item.title}</h2></Link>
                <p>{item.Text}</p>
              </div>

              <div className="image">
                <video src={item.ImgSrc} muted loop autoPlay></video>
              </div>
              <div className="icon">
                <div className="overlay"></div>
               <Link href={item.links}  target="_blank"><FaArrowRightLong className="arrow_icon"/></Link>
              </div>
            </div>
          </>
        );
      })}
    </div>
  </>
  )
}

export default Effect;
