import React from 'react'
import { useState ,useEffect} from 'react'

function UseEffSetTimeoutdemo() {
    const [message, setmessage] = useState("Hello! How are you :(");
    const [count, setcount] = useState(0)
    useEffect(()=>{
        console.log("useeffect hook");
        const ti= setTimeout(()=>{
            setcount(count+1);
            setmessage("Iam Fine,Thanks for asking :)");
    },5000)
    return(
    clearTimeout(ti)
    )
  
  },[])
  return (
    <div>
        <h1>{count}</h1>
        <h1>{message}</h1>
    </div>
  )
}

export default UseEffSetTimeoutdemo