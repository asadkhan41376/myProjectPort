import React from 'react'
import AnimatedCursor from "react-animated-cursor"

function CustomCurser() {
  return (
    <>
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        mixBlendMode: 'difference',
        backgroundColor: 'var(--color)',
      }}
      outerStyle={{
        border: '3px solid var(--color)',
        mixBlendMode: 'difference'
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    </>
  )
}

export default CustomCurser;
