// import Skill from '@/components/Skill'
import React from 'react'
import dynamic  from 'next/dynamic'
const Skill = dynamic(()=>import("@/components/Skill"))
function page() {
  return (
    <div>
      <Skill/>
    </div>
  )
}

export default page
