

// import Hero from "@/components/Hero";
// import Sound from "@/components/Sound";
import dynamic from "next/dynamic";
const Hero = dynamic(()=>import("@/components/Hero"),{
  ssr:true
}
)


export default function Home() {



  return (
    <>

{/* <Sound/> */}
<Hero/>
    
    </>
  );
}
