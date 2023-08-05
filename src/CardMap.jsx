import React from 'react'
import { Card } from 'react-bootstrap'

function CardMap() {
    const product=[{name:"BMW",price:1000000,color:"black",image:"https://m.media-amazon.com/images/I/71oGke7wycL._SX569_.jpg"},{name:"Maruthi",price:30000,color:"white",image:"https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/39013/alto-exterior-left-front-three-quarter.jpeg?isig=0&q=75"},
    {name:"Maruthi",price:30000,color:"white",image:"https://images10.gaadi.com/usedcar_image/original/usedcar_43_727151681281470_1681281483.jpg?imwidth=640"},{name:"Maruthi",price:30000,color:"white",image:"https://www.shutterstock.com/image-photo/karnataka-october-2021-maruti-800-260nw-2079249856.jpg"}]
  return (
    <div style={{display:'flex',justifyContent:'space-between'}}>
        {product.map((data)=>
        <div style={{ width: '18rem',height:'50px' }}>
        <Card >
            <Card.Img style={{width:'286px',height:'286px'}} variant="top" src={data.image}/>
            <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
             <p>{data.price}</p>
             <p>{data.color}</p>
          
          
            </Card.Text>
        
            </Card.Body>
        </Card>



        </div>
        
        
        )}


    </div>
  )
}

export default CardMap