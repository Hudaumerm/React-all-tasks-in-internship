import React,{useState,useEffect} from 'react'

function UseStateNumDemo() {
    const [num1,setnum1] = useState(0);
    const [num2,setnum2] = useState(0);
    const [num3,setnum3] = useState(0);
    useEffect(()=>{
        console.log("Your are welcome");
    },[num2])



  return (
    <div>
        <button onClick={()=>{setnum1(num1+1)}}>Click {num1}</button>
        <button onClick={()=>{setnum2(num2-1)}}>Click {num2}</button>
        <button onClick={()=>{setnum3(num3+1)}}>Click {num3}</button>
    </div>
  )
}

export default UseStateNumDemo