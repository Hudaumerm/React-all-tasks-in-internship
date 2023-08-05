import React, { useState } from 'react'

function UsestateDemo() {
    const [first,setfirst]=useState(0)
    console.log(first)
    const handleclick=()=>{setfirst(first+1)}
    const handle=()=>{setfirst(first-1)}

    
  return (
    <div style={{marginLeft:'50rem',marginTop:'10rem'}}>
        <h1 style={{color:'red'}}>{first}</h1>
        <button style={{backgroundColor:'lightblue'}} onClick={handleclick}>Positive</button>
        <button style={{backgroundColor:'lightblue'}} onClick={handle}>Negative</button>


    </div>
  )
}

export default UsestateDemo