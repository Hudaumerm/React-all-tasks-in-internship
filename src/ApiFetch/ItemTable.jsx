import React, { useContext } from 'react'
import { NewContext } from '../App'
import { Container, Table } from 'react-bootstrap'

function ItemTable() {
    const [value]=useContext(NewContext)
  return (
    <div>
         <Container>
        
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
           
          </tr>
        </thead>
        {value.map((i)=>{
    return(
        <tbody>
          <tr>
            <td>{i.id}</td>
            <td>{i.title}</td>
            <td>{i.description}</td>
            
          </tr>
         
        </tbody>
         )
        }
        )}
       
      </Table>

   
      </Container>
    </div>
  )
}

export default ItemTable