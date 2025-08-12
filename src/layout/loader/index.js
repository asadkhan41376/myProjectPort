"use client"
import React, { useEffect, useState } from 'react'
import PreLoader from './preLoader'

const LoaderWraper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  


  return (
    <div>
      {isLoading ? <PreLoader setIsLoading={setIsLoading} />

        : children
      }

    </div>
  )
}

export default LoaderWraper
