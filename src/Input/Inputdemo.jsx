import React,{useState} from 'react'

function Inputdemo() {
    const [data, setdata] = useState({});

    const handlechange=(e)=>
    {
        
        const name=e.target.name;
        const value=e.target.value;
        setdata({...data,[name]:value})
        console.log(data)
    }
    
  return (
    <div>
        <label htmlFor="name">Name :</label>
        <input type="text" name='name' value={data.name} onChange={handlechange} />
        <h3>{data.name}</h3>
        <label htmlFor="name">address :</label>
        <input type="address" name='address' value={data.address} onChange={handlechange} />
        <h3>{data.address}</h3>
        <label htmlFor="age"> Age:</label>
        <input type="number" name='age' value={data.age} onChange={handlechange}/>
        <h3>{data.age}</h3>
    </div>
  )
}

export default Inputdemo