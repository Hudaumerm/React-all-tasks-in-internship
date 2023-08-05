import React, { useState } from 'react'
import './TrafficLight.css'

function TrafficLight({colors,first,setfirst}) {
   // const [show,setshow]=useState(false)

    const change=()=>
    {
        setfirst(colors)
 }
  return (
    <div  className='container'>
        <div className="light" onClick={change}  style={{backgroundColor:colors===first?colors :"grey"}}/>
       


    </div>
  )
}

export default TrafficLight