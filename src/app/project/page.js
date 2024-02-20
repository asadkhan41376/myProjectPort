
"use client"
import Card from '@/components/Card'
import React, { useState } from 'react'
import "@/app/project/project.scss"


function page() {

 
  return (
    <>
    <div className="project">
      <h1 className='project_heading'> My Projects </h1>
      <Card  imgsrc="/img/quiz.mp4" h1=" Simple Quiz" para="Simple Quiz app using html and css and js " vsit_link="https://webfunquiz.netlify.app/"/>
      <Card  imgsrc="/img/card.mp4" h1="Profile Card" para="Profile Card using html and css and js" vsit_link="https://asadkhan41376.github.io/my-first-website" />

      <Card  imgsrc="/img/tour.mp4" h1="Simple Tour website" para=" Tour website using html and css and bootstrap" vsit_link="https://vocal-stroopwafel-fda415.netlify.app/" />
      <Card  
      imgsrc="/img/buzy.mp4"
       h1="Profile Card" 
       para="Profile Card using html and css bootstrap" 
       vsit_link="https://deft-bunny-468651.netlify.app/" 
 />


    </div>
    </>
  )
}

export default page
