import React, { useState } from 'react'
import './CalculatorApp.css'
import { Button, Col, Container, Row } from 'react-bootstrap'

function CalculatorApp() {
    const [display, setdisplay] = useState("")
   //function for display and add,sub,mul,div
   const handleClick=(value)=>{
   
    setdisplay(display+value);

   }
   //function for equal to 
   const handleResult=()=>{
    try{
            setdisplay(eval(display))
    }catch(error){
        setdisplay('ERROR,Invalid entry')
    }
}  
//clear function
    const handleClear=()=>{
        setdisplay("")
    }
  return (
    <Container className='calcu'>
       <div className='section'>
        <div  className='display'>
        <Row className='display-row'>
            <Col>{display}</Col>
            </Row>
            </div>
        <div className='buttons'>
           <Row>
            <Button className='col' onClick={()=>handleClick("1")}>1</Button>
            <Button className='col' onClick={()=>handleClick("2")}>2</Button>
            <Button className='col' onClick={()=>handleClick("3")}>3</Button>
            <Button className='col sign-btn' onClick={()=>handleClick("+")}>+</Button>
           </Row>
        </div>
        <div className='buttons'>
           <Row>
            <Button className='col' onClick={()=>handleClick("4")}>4</Button>
            <Button className='col' onClick={()=>handleClick("5")}>5</Button>
            <Button className='col' onClick={()=>handleClick("6")}>6</Button>
            <Button className='col sign-btn' onClick={()=>handleClick("-")}>-</Button>
           </Row>
        </div>
        <div className='buttons'>
           <Row>
            <Button className='col' onClick={()=>handleClick("7")}>7</Button>
            <Button className='col' onClick={()=>handleClick("8")}>8</Button>
            <Button className='col' onClick={()=>handleClick("9")}>9</Button>
            <Button className='col sign-btn' onClick={()=>handleClick("*")}>*</Button>
           </Row>
        </div>
        <div className='buttons'>
           <Row>
            <Button className='col' onClick={()=>handleClick(".")}>.</Button>
            <Button className='col' onClick={()=>handleClick("0")}>0</Button>
            <Button className='col equal-btn' onClick={handleResult}>=</Button>
            <Button className='col sign-btn' onClick={()=>handleClick("/")}>/</Button>
           </Row>
        </div>
        <div className='buttons'>
           <Row>
            <Button className='col c-btn' onClick={handleClear}>C</Button>
           </Row>
        </div>

       </div>

    </Container>
  )
}

export default CalculatorApp