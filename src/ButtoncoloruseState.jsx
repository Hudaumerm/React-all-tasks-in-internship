import React, { useState } from 'react'

function ButtoncoloruseState() {
    const [initial,setnext]=useState("green");
    const buttoncolor=()=>{setnext("yellow")}
  return (
    <div>
        <h1>Hello! click me to change color</h1>
        <button style={{color:'violet',backgroundColor:initial}} onClick={buttoncolor}>Click me</button>

    </div>
  )
}

export default ButtoncoloruseState