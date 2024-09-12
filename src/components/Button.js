import React from 'react'

import Link from 'next/link'
import { useMediaQuery } from '@mui/material'



function Button({ name, href }) {
  const matches = useMediaQuery('(max-width: 768px)')
  return (
    <>

      <Link href={href} className={matches? "btnSmoll":'btn'}>{name}</Link>


    </>
  )
}

export default Button
