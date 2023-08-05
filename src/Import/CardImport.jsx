import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { userContext } from './Import1'

function CardImport() {
    const [data]=useContext(userContext)
  return (
    <div>

{data.map((data)=>{
    return(
        <Card style={{ width: '18rem',boxShadow:"0px 10px 10px 0px",marginRight:'20px'}}>
        <Card.Img style={{width:'286px',height:'229px'}} variant="top" src={data.img} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>
            {data.price}
            {data.color}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}
)}
       
    </div>
  )
}

export default CardImport