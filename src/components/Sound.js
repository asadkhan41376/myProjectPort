"use client"
import { useEffect, useRef } from "react";

function Sound() {
  
 const bg = useRef()
 function playSound(){
  bg.current.play()
}

  useEffect(()=>{
  
    playSound()

    
   },[])
   
  return (
    <div onLoad={playSound}>
    
  
    <audio src="/sound/shinchan.mp3" ref={bg}></audio>
      
    </div>
  )
}

export default Sound
