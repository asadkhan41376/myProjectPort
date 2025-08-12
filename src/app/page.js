
import dynamic from "next/dynamic";
import LoaderWraper from "../layout/loader";

const HomeSection = dynamic(() => import("@/sections/home"), {
  ssr: true
}
)


export default function Home() {



  return (

      <HomeSection />
  
  );
}
