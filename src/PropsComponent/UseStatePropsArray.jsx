import React from 'react'
import { Table } from 'react-bootstrap'

function UseStatePropsArray({fruit,setfruit}) {
    const change=()=>{
        setfruit([{name:"Tomato",color:"Red",price:"10/kg"},{name:"Onion",color:"Purple",price:"20/kg"},{name:"Potato",color:"Brown",price:"30/kg"}])
    }
    
  return (
    
    <div>
      <Table striped bordered hover>
        <thead style={{backgroundColor:"yellow",borderColor:"black"}}>
          <tr>
            <th>Name</th>
            <th>Color</th>
            <th>Price</th>
          </tr>
        </thead>
        {fruit.map((i) => 
        {
          return (
            
              <tbody>
                <tr>
                  <td>{i.name}</td>
                  <td>{i.color}</td>
                  <td>{i.price}</td>
                </tr>
              </tbody>
            
          
        )})};
        <button onClick={change}>Veggies</button>
      </Table>

    </div>
  )
}

export default UseStatePropsArray