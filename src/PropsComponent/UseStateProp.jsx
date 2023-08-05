import React from 'react'

function UseStateProp({first,setfirst}) {
    const change=()=>{
        setfirst("You Are logged in");
    }
  return (
    <div>
        <h2>{first}</h2>
        <button onClick={change}>Click</button>
    </div>
  )
}

export default UseStateProp