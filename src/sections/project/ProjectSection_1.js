"use client"
import { data } from "@/projectData/db";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";
import { Grid } from "@mui/material";
import Button from "@/components/Button";

function ProjectSection_1() {
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
      <Grid container justifyContent="center" spacing={5}>
        <Grid item lg={2} md={2} sm={6} xs={6} onClick={()=>setItems(data)}><Button href="" name="All"/></Grid>
       <Grid item  lg={2} md={2} sm={6} xs={6} onClick={()=>FillterItem("webProject")}><Button href="" name="Html/css"/></Grid> 
        <Grid item  lg={2} md={2} sm={6} xs={6} onClick={()=>FillterItem("Bootstrap")}><Button href="" name="Bootstrap"/></Grid>
        <Grid  item lg={2} md={2} sm={6} xs={6} onClick={()=>FillterItem("Next_React")}><Button href="" name="React js"/></Grid>
      
       
      </Grid>
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

export default ProjectSection_1;
