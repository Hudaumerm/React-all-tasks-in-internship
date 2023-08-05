import React from 'react'
import { Button } from 'react-bootstrap'

function Card() {
    var idcard={photo:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fflowers%2F&psig=AOvVaw0dOvuMQpbBLFBgEqHkZqTV&ust=1684662864559000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNDG3rHQg_8CFQAAAAAdAAAAABAE",id:1000,name:"Hudham.m",dob:"02/03/2000",address:"Maruthiyat(h),Naduvannur(p.o),Calicut"}
  return (
    <div className='card-item'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={idcard.photo} />
      <Card.Body>
        <Card.Title>Student ID Card</Card.Title>
        <Card.Text>
          <h4>{idcard.id}</h4>
          <h4>{idcard.name}</h4>
          <h4>{idcard.dob}</h4>
          <h4>{idcard.address}</h4>



        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


    </div>
  )
}

export default Card