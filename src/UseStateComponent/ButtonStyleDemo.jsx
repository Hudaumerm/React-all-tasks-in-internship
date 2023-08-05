import React,{useState} from 'react';
import './ButtonStyleDemo.css';
//import CardDemo from '../CardDemo';
import { Card } from 'react-bootstrap';
import CardDemo from '../CardDemo';
import Sample from '../Sample';

function ButtonStyleDemo() {
    const [first, setfirst] = useState(true);
    const [image,setimage] =useState(true);
    const change=()=>{
        setfirst(!first);
        setimage(!image);
    }
  return (
    <div>
        <h1>Button Style demo task</h1>
        <button onClick={change} className={first?'btn1':"btn2"}>{first?"Show":"Hide"}</button>
        {/*{first && <img src="https://images.unsplash.com/photo-1530092285049-1c42085fd395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwZmxvd2VyfGVufDB8fDB8fHww&w=1000&q=80"/>}*/}
        {image?<Sample/> : <CardDemo/>}

    </div>
  )
  }

export default ButtonStyleDemo