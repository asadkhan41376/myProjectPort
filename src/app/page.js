
import dynamic from "next/dynamic";

const HomeSection = dynamic(()=>import("@/sections/home"),{
  ssr:true
}
)


export default function Home() {



  return (
    <>
<HomeSection/>
    
    </>
  );
}
