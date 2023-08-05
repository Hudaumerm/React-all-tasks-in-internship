import React, { useContext } from 'react'
import { newContext } from './Thread'
import { Container, Table } from 'react-bootstrap'
import AddDetails from './AddDetails'
import {MdDelete, MdEdit, MdPreview} from 'react-icons/md'
import { Link } from 'react-router-dom'

function StudentDetails() {
    const [data,setData]=useContext(newContext)
    const handledelete=(id)=>{
      setData(data.filter((data)=>data.id != id))
    }
  return (
    <div>
        <Container>
        
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>AGE</th>
            <th>COURSE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        {data.map((i,index)=>{
    return(
        <tbody>
          <tr>
            <td>{i.id}</td>
            <td>{i.name}</td>
            <td>{i.age}</td>
            <td>{i.course}</td>
            <td><Link to={`/viewtable/${index}`}><MdPreview/></Link>
            <Link to={`/edittable/${index}`}><MdEdit/></Link>
            <MdDelete onClick={()=>handledelete(i.id)}/></td>

          </tr>
         
        </tbody>
         )
        }
        )}
       
      </Table>
      <AddDetails/>

   
      </Container>
    </div>
  )
}

export default StudentDetails