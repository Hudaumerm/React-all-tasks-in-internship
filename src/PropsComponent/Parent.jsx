import React ,{useState}from 'react'
import ArrayProps from './ArrayProps';
import ObjectProps from './ObjectProps';
import UseStateProp from './UseStateProp';
import UseStatePropsArray from './UseStatePropsArray';
import CardProps from './CardProps';

function Parent() {
    const myArr=[{name:"Joy",age:20,place:"Calicut"},{name:"moli",age:20,place:"Kochi"},{name:"lijo",age:20,place:"Kasarkode"}];
    const items={place:"kerala",language:"malayalam",name:"joy"};
    const [first, setfirst] = useState("Hello World")
    const [fruit, setfruit] = useState([{image:"https://img.freepik.com/free-vector/vector-ripe-yellow-banana-bunch-isolated-white-background_1284-45456.jpg?w=2000",name:"Banana",color:"yellow",price:"100"},{image:"https://media.istockphoto.com/id/185262648/photo/red-apple-with-leaf-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=gUTvQuVPUxUYX1CEj-N3lW5eRFLlkGrU_cwwwOWxOh8=",name:"apple",color:"red",price:"200"},{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxIINytGrcj0jMnvslh9STcP3fAuPTsh2oWg&usqp=CAU",name:"Grapes",color:"green",price:"200"}]);
    const veggies=[{image:"",name:"Tomato",color:"Red",price:"10/kg"},{image:"",name:"Onion",color:"Purple",price:"20/kg"},{image:"",name:"Potato",color:"Brown",price:"30/kg"}];



  return (
    <div>
        <ArrayProps data={myArr}/>
        <ObjectProps items={items}/>
        <UseStateProp first={first} setfirst={setfirst}/>
        <UseStatePropsArray fruit={fruit} setfruit={setfruit}/>
        <CardProps fruit={fruit} setfruit={setfruit} veggies={veggies}/>

    </div>
  )
}

export default Parent