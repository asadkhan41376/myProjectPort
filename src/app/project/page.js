import Card from '@/components/Card'
import React from 'react'
import "@/app/project/project.scss"


function page() {
 
  return (
    <>
    <div className="project">
      <h1 className='project_heading'> My Projects </h1>
      <Card  imgsrc="/img/project1.png" h1=" Simple Quiz" para="Simple Quiz app using html and css " vsit_link="https://webfunquiz.netlify.app/"/>
      <Card  imgsrc="/img/project2.png" h1="Profile Card" para="Profile Card using html and css" vsit_link="https://asadkhan41376.github.io/my-first-website" />


    </div>
    </>
  )
}

export default page
