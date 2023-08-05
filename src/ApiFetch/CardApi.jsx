import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Card, Col, Container, Row} from 'react-bootstrap'

function CardApi() {
    const [value,setvalue]=useState([])
   useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{setvalue(res.data)})
    console.log(value)
   },[value])
  return (
    <Container style={{backgroundColor:"lightblue"}}>
        <Row>
           
        {value.map((i)=>{
            return(
                <Col md={3}>
                <Card style={{ width: '15rem',textAlign:"justify",fontSize:'10px',display:'flex',height:'20rem',padding:'10px',marginTop:'20px',border:'0',overflow:'auto'}} keys={i.id}>
      <Card.Img variant="top" src={i.image} style={{width:"10rem",height:"10rem",padding:'10px',marginLeft:'30px'}} />
      <Card.Body>
        <Card.Title style={{fontSize:'15px',textAlign:'center'}}>{i.title}</Card.Title>
        <Card.Text>
           
        <span style={{color:'red',fontWeight:'600'}}>Rs:  ₹{i.price}<br/></span> 

            {i.description}<br/>
           <span style={{color:'orange'}}> Rating:{i.rating.rate}</span><br/>
           <span style={{color:"green"}}>Count:{i.rating.count}</span>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
</Col>

            )
        })}
       
        </Row>
        </Container>
  )
}

export default CardApi