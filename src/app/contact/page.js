


import dynamic from 'next/dynamic'

// import Contect from '@/components/contect'
import React from 'react'

const Contect = dynamic(()=>import("@/components/contect"))

function page() {
  return (
    <div>
    <Contect/>

    </div>
  )
}

export default page

export const metadata = {
  title: 'contact Me',
  openGraph: {
    title: 'contact',
    description: 'This is all about mel.',
  },
}
