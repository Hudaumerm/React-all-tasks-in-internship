import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'

function TableApi() {
    const [first, setfirst] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setfirst(res.data))
    },[first])
  return (
    <Container>
        
                <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Username</th>
                  </tr>
                </thead>
                {first.map((i)=>{
            return(
                <tbody>
                  <tr>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.email}</td>
                    <td>{i.username}</td>
                  </tr>
                 
                </tbody>
                 )
                }
                )}
               
              </Table>

           
              </Container>
  )
}

export default TableApi