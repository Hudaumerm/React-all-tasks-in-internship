import React, { createContext, useState } from 'react'
import './Thread.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudentDetails from './StudentDetails'
import NavThread from './NavThread'
import Students from './Details'
import AddDetails from './AddDetails'
import EditStudentDetails from './EditStudentDetails'
import ViewDetails from './ViewDetails'
import HomePage from './HomePage'

 const newContext=createContext()
function Thread() {
    const [data,setData]=useState(Students)
    
  return (
    <div>
        <newContext.Provider value={[data,setData]}>
        <BrowserRouter>
        <NavThread/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/studentsdetails" element={<StudentDetails/>}/>
            <Route path="/edittable/:id" element={<EditStudentDetails/>}/>
            <Route path="/viewtable/:id" element={<ViewDetails/>}/>

        </Routes>
        </BrowserRouter>
       
        </newContext.Provider>
    </div>
  )
}

export default Thread
export {newContext}