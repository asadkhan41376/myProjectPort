
"use client"
import Hero from "@/components/Hero";
import Sound from "@/components/Sound";
import { useEffect, useRef } from "react";


export default function Home() {

 const bg = useRef()
 function playSound(){
  bg.current.play()
}

useEffect(()=>{
   playSound();
  
 },[])
  return (
    <>

<audio src="/sound/shinchan.mp3" ref={bg}></audio>
<Hero/>
    
    </>
  );
}
