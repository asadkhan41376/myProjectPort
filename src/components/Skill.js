"use client"
import React, { useRef } from 'react'
import { motion } from "framer-motion"
import { Scale } from '@mui/icons-material'
import Image from 'next/image'


const ImgData =[
    {
        title:"HTML",
        IMg:"/img/icons8-html.webp"
    },
    {
        title:" CSS",
        IMg:"/img/css.webp"
    },
    {
        title:"JAVA SCRIPT",
        IMg:"/img/icons8-js-300.webp"
    },
    {
        title:"BOOTSTRAP",
        IMg:"/img/bootstrap.webp"
    },
    {
        title:"NEXT JS",
        IMg:"/img/icons8-nextjs-300.webp"
    },
]


function Skill() {
    const ref = useRef(null)
  return (
    <>
<div className="Skill"  ref={ref}>
    <h1 className='Skill_title'>skills</h1> 

    <div className="perent ">

{
    ImgData.map((e,key)=>{
        return(
            <>
            <motion.div drag  dragConstraints={ref} 
            whileDrag={{scale:1.1}}
            
            className="Skill_Card" >
          
            <Image  fill={true} quality={100}  src={e.IMg} alt="skill img" />
             <div className='overLay'><h1>{e.title}</h1></div>   
        
           </motion.div>
           </>
        )
    })
}
    </div>
   

 
</div>
    </>
  )
}

export default Skill
