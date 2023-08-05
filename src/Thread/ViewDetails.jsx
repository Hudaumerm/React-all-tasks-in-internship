import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { newContext } from './Thread'
import { Card, Container } from 'react-bootstrap'

function ViewDetails() {
    const {id}=useParams()
    const [data]=useContext(newContext)
    const singleData=data.filter((data)=>data.id == id)

  return (
    <Container className='view-container'>
        {singleData.map((i)=>{
            return(
        <Card key={i.id} >
      <Card.Img variant="top" src="" className='img'/>
      <Card.Body>
        <Card.Title>Full Name: {i.name}</Card.Title>
        <Card.Text>
            Age: {i.age}<br/>
            Course: {i.course}
        </Card.Text>
      </Card.Body>
    </Card>)})}
    </Container>
  )
}

export default ViewDetails