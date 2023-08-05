import React, { useContext, useState } from 'react'
import './Thread.css'
import { newContext } from './Thread'
import { Button, Col, Container, Form, FormLabel, Row } from 'react-bootstrap'

function AddDetails() {
    const [data,setData]=useContext(newContext)
    // const [values,setValues] = useState(data)
    const [form, setform] = useState(false)
    const buttonClick=()=>{
        setform(!form)
    }

    const [addFormData,setAddFormData] = useState({
        // id:'' ,
        // name:"",
        // age:'',
        // course:''
    })

    const handleForm=(e)=>{

       const name=e.target.name;
        const value=e.target.value;
         setAddFormData({...addFormData,[name]:value})
         console.log(addFormData)
    }

    const handlesubmit=(e)=>{

        // const newData={
        //     id:addFormData.id,
        //     name:addFormData.name,
        //     age:addFormData.age,
        //     course:addFormData.course
        // }
        setData([...data,addFormData])
        
    }
    console.log("v:"+data)

    
  return (
    <section className="add-details">
    <Container className='add-details text-align-center'>
        {form?(
            <Form className='form' onSubmit={handlesubmit}>
           <Row>
              <Form.Group as={Col} md={4} controlId="formGridNumber"  className="input-group">
                <Form.Label>ID :</Form.Label>
                <Form.Control type="number" placeholder="Enter id" name='id' value={addFormData.id} onChange={handleForm}/>
              </Form.Group>
             
             
      
              <Form.Group as={Col} className="input-group"  controlId="formGridName">
                <Form.Label>FULL NAME :</Form.Label>
                <Form.Control type="text" placeholder="Full Name" name='name' value={addFormData.name} onChange={handleForm}/>
              </Form.Group>
              
             </Row>
              <Row>
              <Form.Group as={Col} md={4} className="input-group"  controlId="formGridName">
                <Form.Label>AGE :</Form.Label>
                <Form.Control type="number" placeholder="Age" name='age' value={addFormData.age} onChange={handleForm}/>
              </Form.Group>
              
          
      
              <Form.Group as={Col} className="input-group"  controlId="formGridState" >
                <Form.Label>COURSE :</Form.Label>
                <Form.Select defaultValue="Choose..." name='course' value={addFormData.course} onChange={handleForm}>
                  <option>Choose...</option>
                  <option>B.Tech</option>
                  <option>M.Tech</option>
                  <option>BCA</option>
                  <option>MCA</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>
              </Row>
            <Button variant="primary" type="button" onClick={handlesubmit} >
             Add
            </Button>
            {form&& <div>
            <button onClick={buttonClick}
              type="button"
              className="btn-close btn-cl"
              aria-label="Close"
            />
          </div>}
          </Form>

        ):(<Button onClick={buttonClick}>Add Details</Button>)}

    </Container>
    </section>
  )
}

export default AddDetails