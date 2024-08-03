// import About from '@/components/about'
import React from 'react'
import dynamic from 'next/dynamic'

const About = dynamic(()=>import("@/components/about"))

function page() {
  
  return (
    <div>
      <About/>
    </div>
  )
  
}


export default page
export const metadata = {
  title: 'About Me',
  openGraph: {
    title: 'about',
    description: 'This is all about me.',
  },
}