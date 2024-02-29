import React from 'react'

import Link from 'next/link'



function Button({name,href}) {
  return (
    <>
  
<Link href={href} className='btn'>{name}</Link>

   
    </>
  )
}

export default Button
