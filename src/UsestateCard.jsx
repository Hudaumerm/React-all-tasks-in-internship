import React, { useState } from 'react'
import {Card,Button} from 'react-bootstrap'
function UsestateCard() {
    const [next,setnext]=useState("Block Your Slot")
    const [initial,setinitial]=useState("red")

    const changetext=()=>{
        if(next=="Block Your Slot")
        {
            setnext("Blocked!!!");
            setinitial("green");
        }
        else{
            setnext("Block Your Slot");
            setinitial("red");
        }
        
    }

  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71oGke7wycL._SX569_.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" style={{backgroundColor:initial}} onClick={changetext} >{next}</Button>
      </Card.Body>
    </Card>


    </div>
  )
}

export default UsestateCard