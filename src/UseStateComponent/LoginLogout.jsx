import React, { useState } from 'react'
import './ButtonStyleDemo.css'

function LoginLogout() {
    const [login,setlogin] = useState(true);
    const [data, setdata] = useState(true);
    const change=()=>{
        setdata(!data)
        setlogin(!login)
    }
  return (
    <div style={{display:'flex',justifyContent:'center',alignContent:"center",marginTop:'5rem'}}>
         <div style={{border:"2px solid black",minWidth:"500px",minHeight:'200px'}}>
        <h1 style={{alignItems:'center',padding:'50px'}}>{data?("You are logged in"):(alert("You have been logged out successfully"))}</h1>
        <button className={login?"btn2":"btn1" } onClick={change}>{login? "Logout":"Login"}</button>

    </div>
    </div>
  )
}

export default LoginLogout