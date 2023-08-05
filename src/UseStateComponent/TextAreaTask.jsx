import React, { useState } from 'react'
import {Form} from 'react-bootstrap'

function TextAreaTask() {

    const [data, setdata] = useState("")
    const [first, setfirst] = useState()
        const changeHandle=(e)=>{
            // const name=e.target.name;
            // const value=e.target.value;
            setdata(e.target.value)
        }
        const showText=()=>{
            setfirst(data)
        }
        const clearText=()=>{
            setdata("")
        }
        
        const char=data.length;

        const wordcount=(str)=> {
            return str.split(' ').filter((num)=> {
             return num != ''
            }).length;
           }
        

        

       
    

  return (
    <div style={{border:" 5px solid #3a5311",width:"350px",height:"400px",transform:"translate(500px,50px)",backgroundColor:"#c2dab8"}}>
       
        Address:<textarea name="adress" value={data} onChange={changeHandle} style={{transform:"translateY(50%)",border:"0"}} />
        <button type="button" class="btn btn-dark" onClick={clearText}>Clear</button><br/><br/>
        <button type="button" class="btn " style={{backgroundColor:"#3a5311",color:"white"}} onClick={showText}>Show</button>
        <div style={{marginTop:'100px'}}>
        <h6 style={{color:"red"}}>{first}</h6>
        <h6>Characters count:{char}</h6>
        <h6>Words:{wordcount(data)}</h6></div>
        
       
    </div>
  )
}

export default TextAreaTask