
import { data } from "@/projectData/db";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

function Effect() {
  return (
    <>
    <div className="elements">
      <h1>Explorer My Project </h1>
      {data.map((item, index) => {
        return (
          <>
            <div className="elm" key={index}>
              <div className="num">
                <span>{index+1}</span>
              </div>

              <div className="mobile_image">
              <video src={item.ImgSrc} muted loop autoPlay></video>

              </div>

              <div className="heading">
                <Link href={item.links} target="_blank" style={{textDecoration:"none",color:"white"}}><h2>{item.title}</h2></Link>
                <p>{item.Text}</p>
              </div>

              <div className="image">
                <video src={item.ImgSrc} muted loop autoPlay></video>
              </div>
              <div className="icon">
                <div className="overlay"></div>
               <Link href={item.links}  target="_blank"><FaArrowRightLong className="arrow_icon"/></Link>
              </div>
            </div>
          </>
        );
      })}
    </div>
  </>
  )
}

export default Effect
