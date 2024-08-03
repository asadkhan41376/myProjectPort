
// import Effect from '@/components/Effect'
import React from 'react'
import dynamic from 'next/dynamic'
const Project = dynamic(()=>import("@/components/Effect"))

function page() {
  return (
    <>
     {/* <h1>project</h1> */}
     
     <Project/>
     </>
  )
}

export default page
