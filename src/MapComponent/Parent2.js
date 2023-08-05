import React,{useState} from 'react'
import TrafficLight from './TrafficLight'

function Parent2() {
    const color=["red","green","yellow"];
    const [first, setfirst] = useState(color)
  return (
    <div className='parent1'>
        {color.map((color)=>{

        return(
        <TrafficLight colors={color} first={first} setfirst={setfirst}/>
        )})}
        
    </div>
  )
}

export default Parent2