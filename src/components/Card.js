import React from 'react'
import "@/style/card.scss"
import Image from 'next/image'
import Link from 'next/link'


function Card({para,h1,imgsrc,vsit_link}) {
     
  return (
    <>
     <div className="cards">
        <div className="card">
            <Image src={imgsrc} alt=""  width={800} height={800}/>
            <div className="card-info">
                <h2>{h1}</h2>
                <p>{para}</p>
              <Link href={vsit_link} target='blank'> Tap to view</Link>
            </div>
        </div>
        
        </div> 
    </>
  )
}

export default Card
