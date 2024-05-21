const { createContext, useState } = require("react");


const myContext= createContext()
const myProvider = ({children})=>{
    const [vl ,setVl]=useState()

const sherdFun=()=>{
 setVl(vl+1)
}

return(

    <myContext.Provider value={{vl,sherdFun}} >
    {children}
    </myContext.Provider>
)
}



export {myContext ,myProvider}