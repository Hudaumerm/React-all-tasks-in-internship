import React, { useState } from 'react'

function Colorchangeonbuttonclick() {
    const [color,setcolor]=useState("Green")
    const Colorchange=()=>{setcolor("Violet")}
    const Colorchange1=()=>{setcolor("Red")}

  return (
    <div>
        <h1 style={{color:color}}>Hello Welcome</h1>
        <button onClick={Colorchange}>Voilet</button>
        <button onClick={Colorchange1}>Red</button>



    </div>
  )
}

export default Colorchangeonbuttonclick;