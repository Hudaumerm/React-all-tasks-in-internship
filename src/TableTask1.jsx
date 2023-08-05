import React from 'react'
import { Table } from 'react-bootstrap'

function TableTask1() {

    const tabledata=[{no:1,name:"joy",age:"20",gender:"male",salary:2000,city:"calicut"},
    {no:1,name:"joy",age:"20",gender:"male",salary:2000,city:"calicut"},
    {no:2,name:"joy",age:"20",gender:"male",salary:2000,city:"calicut"},
    {no:3,name:"joy",age:"20",gender:"male",salary:2000,city:"calicut"},
    {no:4,name:"joy",age:"20",gender:"male",salary:2000,city:"calicut"},
    {no:5,name:"joy",age:"20",gender:"male",salary:2000,city:"calicut"},
    {no:6,name:"joy",age:"20",gender:"male",salary:2000,city:"calicut"},
    {no:7,name:"joy",age:"20",gender:"male",salary:2000,city:"calicut"}]

  return (
    <div>
        
        <Table striped bordered hover  >
        <thead style={{color:'green'}}>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Salary</th>
            <th>City</th>
            
          </tr>
        </thead>
        {tabledata.map((i)=>
        <tbody>
          <tr>
            <td>{i.no}</td>
            <td>{i.name}</td>
            <td>{i.age}</td>
            <td>{i.gender}</td>
            <td>{i.salary}</td>
            <td>{i.city}</td>
           

          </tr>
          
        </tbody>
        )}
      </Table>
            
            
        
        
        


    </div>
  )
}


export default TableTask1