import React, { useContext } from 'react'
import { userContext } from './App1'
import { Card } from 'react-bootstrap'

function UseContextCard() {
    const {cardData}=useContext(userContext);
  return (
    <div style={{display:'flex',textAlign:'center',marginTop:"50px",justifyContent:'center'}}>
        {cardData.map((data)=>{
            return(

            
<Card style={{ width: '18rem',boxShadow:"0px 10px 10px 0px",marginRight:'20px'}}>
      <Card.Img style={{width:'286px',height:'229px'}} variant="top" src={data.img} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.desc}
        </Card.Text>
      </Card.Body>
    </Card>
        )})}
        
    </div>
  )
}

export default UseContextCard