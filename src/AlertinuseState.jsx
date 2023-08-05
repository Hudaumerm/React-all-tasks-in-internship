import React, { useState } from 'react'

function AlertinuseState() {
    const [initial,setinitial]=useState(0);
    const incrementhere=()=>{
        setinitial(initial+1)
    }
    

    const decrementhere=()=>{
        if(initial>0){
        
            setinitial(initial-1)
        
    }
    else {
        alert("Zero is not allowed")
    }
    
}
    

  return (
    <div>
        <h2>{initial}</h2>
        <button onClick={incrementhere} style={{backgroundColor:'green',border:'2px'}}>Positive</button>
        <button onClick={decrementhere} style={{backgroundColor:'red',border:'2px'}}>Negative</button>


    </div>
  )
}

export default AlertinuseState