import React from 'react'
import { Button, Card } from 'react-bootstrap'

function CardProps({fruit,setfruit,veggies}) {
    const change=()=>{
        setfruit(veggies)
    }
  return (
    

    <div style={{margin:"auto",width:"25%",display:'flex',justifyContent:'space-between'}}>
        {fruit.map((data)=>{
        return(
        <Card style={{ width: '18rem'}}>
      <Card.Img style={{width:"286px",height:"161px"}} variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.desc}</Card.Text>
        <Button style={{marginLeft:"25%"}} onClick={change}variant="primary">EXPLORE</Button>
      </Card.Body>
    </Card>
    )})};


    </div>
  
  )
}

export default CardProps