import React, { createContext, useState } from 'react'
import UseContextDemo from './UseContextDemo'
import UseContextCard from './UseContextCard'
import UseContextCarousel from './UseContextCarousel'
import UseContextTable from './UseContextTable'

const userContext=createContext()
function App1() {
    const obj={name:'joy',age:20}
    const cardData=[{img:'https://images.pexels.com/photos/992734/pexels-photo-992734.jpeg?auto=compress&cs=tinysrgb&w=600',title:"Pink",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {img:'https://images.pexels.com/photos/1233414/pexels-photo-1233414.jpeg?auto=compress&cs=tinysrgb&w=600',title:"Rose",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {img:'https://images.pexels.com/photos/3686216/pexels-photo-3686216.jpeg?auto=compress&cs=tinysrgb&w=600',title:"Blue",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {img:'https://images.pexels.com/photos/4659703/pexels-photo-4659703.jpeg?auto=compress&cs=tinysrgb&w=600',title:"White",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}]
    const carouselData=[{img:'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {img:'https://images.pexels.com/photos/10528234/pexels-photo-10528234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {img:'https://images.pexels.com/photos/1073078/pexels-photo-1073078.jpeg?auto=compress&cs=tinysrgb&w=600'}]
    const tableData=[{id:1,name:"Meera",age:"21",email:"meera@yahoo.in"},
    {id:2,name:"joy",age:"23",email:"joy@gmail.com"},
    {id:3,name:"Loranse",age:"54",email:"lor@gmail.com"},
    {id:4,name:"Carl jhon",age:"23",email:"Carl@yahoo.in"},
    {id:5,name:"Benny",age:"49",email:"Ben@gmail.com"}]
    const [first, setfirst] = useState()
    return (
    <div>
        <userContext.Provider value={{obj,cardData,carouselData,tableData,first,setfirst}}>
        <UseContextCarousel/>
        <UseContextCard/>
        <UseContextTable/>

          <UseContextDemo/>
        </userContext.Provider>
    </div>
  )
}

export default App1
export {userContext}