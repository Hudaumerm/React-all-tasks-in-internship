import React, { useState } from 'react'

function UseStateParaChange() {
    const [next,setnext]=useState("green");
    const [initial,setinitial]=useState("Hello welcome");
    const buttoncolor=()=>{
        if(next == "green")
        {
            setnext("red")
            setinitial("You are logged in")
        }
        else{
            setnext("green")
            setinitial("Hello welcome")
        }
    }
    // const paratext=()=>{(setinitial("You are logged in"))}


    // const [initial,setinitial]=useState("red");
    // const [first,setfirst]=useState("orange");

    // const buttoncolor=()=>{(setnext("red"))}
    // const paratext=()=>{(setinitial("Welcome"))}
    // const paracolor=()=>{setfirst("violet")}



  return (
    <div>
        <h1 style={{color:next}} > {initial}</h1>
        <button onClick={buttoncolor}>Click Me</button>


    </div>
  )
}

export default UseStateParaChange