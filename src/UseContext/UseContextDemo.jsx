import React, { useContext } from 'react'
import { userContext } from './App1'

function UseContextDemo() {
    const {obj,first,setfirst}=useContext(userContext)
    const change=()=>{
      setfirst(!first)
    }
  return (
    <div >
       <h1 style={{display:'flex',justifyContent:'center',fontSize:"100px",fontFamily:"fantasy",color:'yellowgreen'}}>{first?"Hello welcome":"You are logged in"}</h1>
        <button style={{marginLeft:"700px"}} onClick={change}>Click Me</button>
        <h1>{obj.name} {obj.age}</h1>
    </div>
  )
}

export default UseContextDemo