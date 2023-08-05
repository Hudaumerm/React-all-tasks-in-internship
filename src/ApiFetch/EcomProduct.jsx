import axios from 'axios'
import './EcomApp.css'
import React, { useContext } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { newContext } from './EcomApp'
import { Link } from 'react-router-dom'

function EcomProduct() {
    const [value]=useContext(newContext)
    console.log("n:"+value)
  return (
    <section className="product-section">
        <Container className='product-container' >
            <Row>
                <Col md={12}>
                {value.map((i)=>{
            return(
                   <Col md={4}>
                 
                <Card key={i.id} ><Link to={'/detailpage/'+i.id}>
      <Card.Img variant="top" src={i.thumbnail} className='img'/>
      <Card.Body>
        <Card.Title>{i.title}</Card.Title>
        <Card.Text>
        ₹{i.price}  <span className='offer'>{i.discountPercentage}% off</span> <br/>
        Rating: <span className='rating-span'>{i.rating}</span>
        </Card.Text>
      </Card.Body>
    </Link></Card>
    
    </Col>

                   

)
})}
                </Col>
            </Row>
        
         </Container>
    </section>
  )
}

export default EcomProduct