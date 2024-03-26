import React, { useState } from 'react'
import { IoSettingsOutline } from "react-icons/io5";



function Change() {
  const [green,setGreen]=useState("#3ff433")
  const [orenge,setOrenge]=useState("#FF652F")
  const [blue,setBlue]=useState("#3AAFA9")
  const [purpl,setPurpl]=useState("#8727BA")
  const [pink,setPink]=useState("#A5355A")
  const [btn,setBtn]=useState(true)


  const GreenColor=()=>{
    document.documentElement.style.setProperty('--color',green)
    document.documentElement.style.setProperty('--bgcolor',"#1b1b1b")
    setGreen(green)
    setBtn(!btn)
  }

  const RedColor=()=>{
    document.documentElement.style.setProperty('--color',orenge)
    document.documentElement.style.setProperty('--bgcolor',"#1b1b1b")
    setOrenge(orenge)
    setBtn(!btn)
  }

  const BlueColor=()=>{
    document.documentElement.style.setProperty('--color',blue)
    document.documentElement.style.setProperty('--bgcolor',"#1b1b1b")
    setBlue(blue)
    setBtn(!btn)
  }

  const purplColor=()=>{
    document.documentElement.style.setProperty('--color',purpl)
    document.documentElement.style.setProperty('--bgcolor',"#1b1b1b")
    setPurpl(purpl)
    setBtn(!btn)
  }

  const PinkColor=()=>{
    document.documentElement.style.setProperty('--color',pink)
    document.documentElement.style.setProperty('--bgcolor',"#1b1b1b")
    setPink(pink)
    setBtn(!btn)
  }

  const btnm =()=>{
    setBtn(!btn)
  }

  return (
    <>
<div className="perent">
<div className="color_box " style={btn ?{ transform:"scale(0)"}: {transform:"scale(1)"}}>
        <div className="greenBtn C_btn" onClick={GreenColor}></div>
        <div className="redBtn C_btn" onClick={RedColor}></div>
        <div className="blueBtn C_btn" onClick={BlueColor}></div>
        <div className="purplBtn C_btn" onClick={purplColor}></div>
        <div className="pinkBtn C_btn" onClick={PinkColor}></div>
      </div>
      <a className="Color_icon"onClick={btnm}><IoSettingsOutline/></a>

</div>
     
    </>
  )
}

export default Change;
