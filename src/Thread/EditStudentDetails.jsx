import React, { useContext, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { newContext } from './Thread'
import { useNavigate, useParams } from 'react-router-dom'

function EditStudentDetails({handleForm}) {
    const {id}=useParams()
    const navigate=useNavigate()

    const [data,setData]=useContext(newContext)
    const editdata=data[id]
    
    const [input,setInput]=useState({
      id:editdata.id,
      name:editdata.name,
      age:editdata.age,
      course:editdata.course
    })
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInput({...input,[name]:value})
    }
    const submit=(sub)=>{
      sub.preventDefault();

      data[id]=input;
      navigate("/studentsdetails")
    }
    
  return (
   <Container>
    
            <Form className='form edit-form'>
           <Row>
           <Form.Group as={Col} md={4} controlId="formGridNumber"  className="input-group">
             <Form.Label>ID</Form.Label>
             <Form.Control type="number" placeholder="Enter your id" name='id' value={input.id} onChange={handleChange}/>
           </Form.Group>
          
          
   
           <Form.Group className="input-group" as={Col} controlId="formGridName">
             <Form.Label>FULL NAME</Form.Label>
             <Form.Control type="text" placeholder="Full Name" name='name' value={input.name} onChange={handleChange}/>
           </Form.Group>
           </Row>
           <Row>
   
           <Form.Group className="input-group" as={Col} md={4} controlId="formGridName">
             <Form.Label>AGE</Form.Label>
             <Form.Control type="number" placeholder="Age" name='age' value={input.age} onChange={handleChange}/>
           </Form.Group>
           
       
   
           <Form.Group className="input-group" as={Col} controlId="formGridState" >
             <Form.Label>COURSE</Form.Label>
             <Form.Select defaultValue="Choose..." name='course' value={input.course} onChange={handleChange}>
               <option>Choose...</option>
               <option>B.Tech</option>
               <option>M.Tech</option>
               <option>BCA</option>
               <option>MCA</option>
               <option>Other</option>
             </Form.Select>
           </Form.Group>
   
          
         </Row>
   
        
   
         <Button variant="primary" type="button" onClick={submit} >
          Save Changes
         </Button>
       </Form>
        
       </Container>
  )
}

export default EditStudentDetails