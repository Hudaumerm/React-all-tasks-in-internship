import React, { useContext, useState } from 'react'
import { Card, Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { NewContext } from '../App';
import PriceSort from './PriceSort';

function RatingCard({ratingData}) {
    const [value]=useContext(NewContext)
   
 
  return (
    <div>
        <Container style={{backgroundColor:"lightblue"}}>
        <div style={{display:'flex',justifyContent:'right'}}>
         
        {[DropdownButton].map((DropdownType, idx) => (
          <DropdownType
           
            key={idx}
            id={`dropdown-button-drop-${idx}`}
            size="sm"
            variant="secondary"
            title="Filter"
          >
            <Dropdown.Item eventKey="1"><Link to="/fivestar"><BsStarFill /><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></Link></Dropdown.Item>
            <Dropdown.Item eventKey="2"><Link to="/fourstar"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></Link></Dropdown.Item>
            <Dropdown.Item eventKey="3"><Link to="/threestar"><BsStarFill/><BsStarFill/><BsStarFill/></Link></Dropdown.Item>
            <Dropdown.Item eventKey="3"><Link to="/twostar"><BsStarFill/><BsStarFill/></Link></Dropdown.Item>
            <Dropdown.Item eventKey="3"><Link to="/onestar"><BsStarFill/></Link></Dropdown.Item>

          </DropdownType>
        ))}
        
      </div>
        <Row>
        
           
        {ratingData&&ratingData.map((i)=>{
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
    
    </div>
  )
}

export default RatingCard