// import About from '@/components/about'
import React from 'react'
import dynamic from 'next/dynamic'

const AboutSection = dynamic(() => import("@/sections/about"))

function page() {

  return (
    <div>
      <AboutSection />
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