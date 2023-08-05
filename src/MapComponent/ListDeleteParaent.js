import React,{useState} from 'react'
import ListDelete from './ListDelete'
import ListOnly from './ListOnly';

function ListDeleteParaent() {
    const items=["Python","Java","HTML","SQL"];
    const [items1,setitems1] = useState(items)
    const handledelete=(itm)=>{
        setitems1(items1.filter((lang)=> lang!==itm))
    }
  {/*--------------------------------------- object----------------------------------------------------------*/}

    const listitems=[{id:1,name:"anu"},{id:2,name:"joy"},{id:3,name:"binu govi"}];
    const [first, setfirst] = useState(listitems)
    const deleteclick=(id)=>{
      setfirst(first.filter((data)=>data.id!==id))
    }
  {/*--------------------------------------- -------------------------------------------------------------*/}

  return (
    <div>
        {items1.map((lang)=>{
        return(

        <ListDelete lang={lang}  onDelete={()=>handledelete(lang)} />
        )})};
  {/*--------------------------------------- object----------------------------------------------------------*/}
  {listitems.map((data)=>{
    return(
  
  <ListOnly data={data}  first={first} setfirst={setfirst} onDel={()=>deleteclick(data.id)}/>
  
  )})};

  {/*--------------------------------------- object----------------------------------------------------------*/}

    </div>
  )
}

export default ListDeleteParaent