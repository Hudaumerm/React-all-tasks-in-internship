import React,{useState} from 'react'

function OddEven() {
    const [count, setcount] = useState(0);
    const [data, setdata] = useState("Even");
    const change=()=>{
      setcount(count+1)
      if(count%2!==0){
        setdata("Even")
      }
      else{
        setdata("Odd")
      }
      
    }

   
  return (
    <div>
      {/* <h2>{count}</h2> */}
      <h2 style={{color:'blue',marginTop:'2rem'}}>{count} is an {data} number</h2>

      <button type='button' onClick={change}>Click</button>
      

    </div>
  )
}


export default OddEven