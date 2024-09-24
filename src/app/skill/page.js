// import Skill from '@/components/Skill'
import React from 'react'
import dynamic  from 'next/dynamic'
const SkillSection = dynamic(()=>import("@/sections/skill"))
function page() {
  return (
    <div>
      <SkillSection/>
    </div>
  )
}

export default page
