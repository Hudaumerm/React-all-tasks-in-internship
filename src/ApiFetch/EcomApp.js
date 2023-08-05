import React, { createContext, useContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EcomNavbar from './EcomNavbar'
import EcomProduct from './EcomProduct'
import axios from 'axios'
import EcomDetailPage from './EcomDetailPage'

const newContext=createContext()
function EcomApp() {
    const [value, setvalue] = useState([])
    async function fetchApi(){
        const response=await axios.get("https://dummyjson.com/products");
        const res=await response.data.products;
        setvalue(res)


    }
    useEffect(()=>{
        fetchApi()
    },[])
    
    
  return (
    <div>
        <BrowserRouter>
        <newContext.Provider value={[value,setvalue]}>
        <EcomNavbar/>
        <Routes>
            <Route path="/"/>
            <Route path="/product" element={<EcomProduct />}/>
        <Route path={'/detailpage/:id'} element={<EcomDetailPage/>}/>

        </Routes>
        </newContext.Provider>
        </BrowserRouter>
    </div>
  )
}

export default EcomApp
export{newContext}