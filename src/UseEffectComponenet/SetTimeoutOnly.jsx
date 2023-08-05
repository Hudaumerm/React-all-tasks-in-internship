import React ,{useState,UseEffect}from 'react'

function SetTimeoutOnly() {
    const [count, setcount] = useState(0)
    const ti=setInterval(() => {
        setcount(count+1)
    }, 1000);
    clearInterval(ti)
    console.log("set time out is stopped")
    
  return (
    <div>
        <p>{count}</p>


    </div>
  )
}

export default SetTimeoutOnly