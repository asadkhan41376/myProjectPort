
// import Effect from '@/components/Effect'
import React from 'react'
import dynamic from 'next/dynamic'
const ProjectSection = dynamic(()=>import("@/sections/project"))

function page() {
  return (
    <>
     
     <ProjectSection/>
     </>
  )
}

export default page
