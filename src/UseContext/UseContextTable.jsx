import React, { useContext } from 'react'
import { userContext } from './App1'
import { Table } from 'react-bootstrap'

function UseContextTable() {
    const {tableData}=useContext(userContext)
  return (
    <div style={{marginTop:"50px",display:"flex",justifyContent:'center'}}>
         <Table striped bordered hover style={{width:'1200px',border:"5px solid grey",boxShadow:"0px 10px 10px 0px",backgroundColor:"skyblue"}}>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>AGE</th>
          <th>EMAIL ID</th>
        </tr>
      </thead>
      {tableData.map((data)=>
      {
        return(

        
      <tbody >
        <tr>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.age}</td>
          <td>{data.email}</td>
        </tr>
       
      </tbody>
       )})}
    </Table>
    </div>
  )
}

export default UseContextTable