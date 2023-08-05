import React,{useState,useEffect} from 'react'

function UseEffCalc() {
    const [num, setnum] = useState(3);
    const [calc, setcalc] = useState(0);
    useEffect(() => {
      setcalc(num*2)
      console.log(calc);
    }, [num])
    
  return (
    <div>
        <h3>Count :{num}</h3>
        <button onClick={()=>{setnum(num+1)}}>Click </button>
        <h4>Calculation is {calc}</h4>

    </div>
  )
}

export default UseEffCalc