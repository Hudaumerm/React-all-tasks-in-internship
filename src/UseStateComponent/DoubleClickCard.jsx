import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

function DoubleClickCard() {
    const [first, setfirst] = useState(false);
    const single=()=>{
    
        setfirst(true)

    }
    const double=()=>{
        
        setfirst(false)

    }
  return (
    <div>
        
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={first?"https://www.shutterstock.com/image-photo/beautiful-calicut-light-house-kerala-260nw-1514443031.jpg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWIHpdGNTBCOj8SxjvZ5sLP11-2fL5seCcVuvUXH2o&s"} />
      <Card.Body>
        <Card.Title>{first?"Calicut":"Wayanad"}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onDoubleClick={double} onClick={single}>Explore</Button>
      </Card.Body>
    </Card>
        
    </div>
  )
}

export default DoubleClickCard