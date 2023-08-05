//import logo from './logo.svg';
import './App.css';
import LoginLogout from './UseStateComponent/LoginLogout';
import Vote from './UseStateComponent/Vote';
import OddEvenMain from './UseStateComponent/OddEvenMain';
import DoubleClickCard from './UseStateComponent/DoubleClickCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarRouterdemo from './Router/NavbarRouterdemo';
import  FourCardTask from './FourCardTask';
import CarosalCardTask1 from './CarousalCardTask1'
import CardDemo from './CardDemo'
import Colorchangeonbuttonclick from './Colorchangeonbuttonclick';
import Inputdemo from './Input/Inputdemo';
import ApiDemo from './ApiFetch/ApiDemo';
import CardApi from './ApiFetch/CardApi';
import TableApi from './ApiFetch/TableApi';
import NavApi from './ApiFetch/NavApi';
import TextAreaTask from './UseStateComponent/TextAreaTask';
import NvaBarTask1 from './ApiFetch/NvaBarTask1';
import { createContext, useEffect, useState } from 'react';
import { setvalue } from './ApiFetch/ApiS';
import DressCard from './ApiFetch/DressCard';
import axios from 'axios';
import ItemTable from './ApiFetch/ItemTable';
import CategoryCard from './ApiFetch/CategoryCard';
import RatingCard from './ApiFetch/RatingCard';
import PriceSort from './ApiFetch/PriceSort';
//import Sample from './Sample';
const NewContext=createContext()

function App() {
  const [value,setvalue]=useState([])
  

useEffect(() => {
  axios.get("https://fakestoreapi.com/products").then((res)=>setvalue(res.data))
  console.log(value)
}, [value])
const mens=value.filter((data)=>data.category=="men's clothing")
const jwells=value.filter((data)=>data.category=="jewelery")
const electro=value.filter((data)=>data.category=="electronics")
const women=value.filter((data)=>data.category=="women's clothing")

const fivestar=value.filter((data)=>data.rating.rate>=5)
const fourstar=value.filter((data)=>data.rating.rate>=4)
const threestar=value.filter((data)=>data.rating.rate>=3)
const twostar=value.filter((data)=>data.rating.rate>=2)
const onestar=value.filter((data)=>data.rating.rate>=1)

const below100=value.filter((data)=>data.price<=100)
const below500=value.filter((data)=>data.price<=500)
const below1000=value.filter((data)=>data.price<=1000)
const above1000=value.filter((data)=>data.price>=1000)



  return (
    <div className="App">
      {/* <OddEvenMain/>
      <LoginLogout/>
      <Vote/>
   
   <DoubleClickCard/> */}
   {/* <BrowserRouter>
   <NavbarRouterdemo/>
   <Routes>
    <Route path="/" element={<CardDemo/>}/>
    <Route path="/home" element={<FourCardTask/>}/>
    <Route path="/link" element={<Colorchangeonbuttonclick/>}/>

   </Routes>
   </BrowserRouter> */}
   {/* <Inputdemo/> */}
   {/* <ApiDemo/> */}
   {/* <BrowserRouter>
   <NavApi/>
   <Routes>
    <Route path="/card" element={<CardApi/>}/>
    <Route path="/table" element={ <TableApi/>}/>
    <Route path="/textarea" element={ <TextAreaTask/>}/>

  

   </Routes>
   
</BrowserRouter> */}
{/* <TextAreaTask/> */}
<BrowserRouter>
<NewContext.Provider value={[value,setvalue]}>

<NvaBarTask1/>
<Routes>
 <Route path="/Dresses" element={<DressCard/>}/>
 <Route path="/items" element={<ItemTable/>}/>
<Route path="/men" element={<CategoryCard  categoryData={mens}/>}/>
<Route path="/jwelery" element={<CategoryCard categoryData={jwells}/>}/>
<Route path="/electro" element={<CategoryCard categoryData={electro} />}/>
<Route path="/womens" element={<CategoryCard categoryData={women}/>}/>
 </Routes>
 <Routes>
  <Route path="/fivestar" element={<RatingCard ratingData={fivestar}/>}/>
  <Route path="/fourstar" element={<RatingCard ratingData={fourstar}/>}/>
  <Route path="/threestar" element={<RatingCard ratingData={threestar}/>}/>
  <Route path="/twostar" element={<RatingCard ratingData={twostar}/>}/>
  <Route path="/onestar" element={<RatingCard ratingData={onestar}/>}/>

 </Routes>
 <Routes>
  <Route path="/below100" element={<PriceSort priceData={below100}/>}/>
  <Route path="/below500" element={<PriceSort priceData={below500}/>}/>
  <Route path="/below1000" element={<PriceSort priceData={below1000}/>}/>
  <Route path="/above1000" element={<PriceSort priceData={above1000}/>}/>

 </Routes>
</NewContext.Provider>

</BrowserRouter>
    </div>
  );
}

export default App;
export {NewContext}
