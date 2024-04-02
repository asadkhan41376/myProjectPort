"use client"
import React, { useRef } from 'react'
import { motion } from "framer-motion"
import { Scale } from '@mui/icons-material'


const ImgData =[
    {
        title:"HTML",
        IMg:"/img/icons8-html.png"
    },
    {
        title:" CSS",
        IMg:"/img/css.png"
    },
    {
        title:"JAVA SCRIPT",
        IMg:"/img/icons8-js-300.png"
    },
    {
        title:"BOOTSTRAP",
        IMg:"/img/bootstrap.png"
    },
    {
        title:"NEXT JS",
        IMg:"/img/icons8-nextjs-300.png"
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
            className="Skill_Card">
          
            <img src={e.IMg} alt="" />
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
