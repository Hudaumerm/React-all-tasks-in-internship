import React from 'react'
import { Card } from 'react-bootstrap'
import './CardDemo.css'

function CardDemo() {
    var idcard={id:1000,name:"Hudha.m",dob:"02/03/2000",address:"Maruthiyat(h),Naduvannur(p.o),Calicut",photo:"https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg"}
  return (
    <div className="card-section" style={{marginLeft:'600px',marginTop:'10rem'}} > 
        <Card className="card-item" style={{ width: '18rem',textAlign:'center',border:'5px solid'}}>
      <Card.Img variant="top" src={idcard.photo} />
      <Card.Body style={{backgroundColor:'lightgrey'}}>
        <Card.Title style={{color:'blue',fontWeight:'100%',fontFamily:'fantasy',fontSize:'30px'}} >Student ID Card</Card.Title>
        <Card.Text style={{color:'green',fontSize:'20px'}}>
           <p>ID: {idcard.id}</p>
           <p>Name: {idcard.name}</p>
           <p>DOB: {idcard.dob}</p>
           <p> Address:<span >{idcard.address}</span></p>

        </Card.Text>
        
      </Card.Body>
    </Card>


    </div>
  )
}

export default CardDemo