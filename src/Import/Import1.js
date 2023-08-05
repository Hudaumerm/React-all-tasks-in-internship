import React, { createContext, useState } from 'react'
import Product from './ImportDemo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarRouterdemo from '../Router/NavbarRouterdemo';
import HideShowBtndemo from '../UseStateComponent/HideShowBtndemo';
import NavbarImport from './NavbarImport';
import CardImport from './CardImport';

const userContext=createContext();
function Import1() {
    const [data,setdata]=useState(Product)
    console.log(data)
  return (
    <div>
        <userContext.Provider value={[data,setdata]}>
           
            <BrowserRouter>
            <NavbarImport/>
            <Routes>
                <Route path="/" element={<HideShowBtndemo/>}></Route>
                <Route path="/home" element={<CardImport/>}></Route>
            </Routes>
            </BrowserRouter>
        </userContext.Provider>

    </div>
  )
}

export default Import1
export {userContext}