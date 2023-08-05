import React, { useEffect ,useState} from 'react';

function UseEffectDemo() {
    const [first, setfirst] = useState(0);
    useEffect(()=>{
        console.log("Hello World");
    })
  return (
    <div>
        <h1>{first}</h1>
        <button onClick={()=>{setfirst(first+1)}}>+</button>
        <button onClick={()=>{setfirst(first-1)}}>-</button>


    </div>
  )
}

export default UseEffectDemo