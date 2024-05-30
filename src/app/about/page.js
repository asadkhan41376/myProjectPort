import About from '@/components/about'
import React from 'react'

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