import React,{useEffect,useState} from 'react'

function UseEffSetIntervaldemo() {
    const [message, setmessage] = useState("Welcome to kerala :)");
    const [count, setcount] = useState(0)
    useEffect(() => {
     const time1= setInterval(()=>{
        setcount(count+1);
        setmessage("Thank You!!");
        console.log("yes");

      },3000)
    
      clearInterval(time1,5000)

    },[count])
    
    
    
  return (
    <div>
        <h1>no of time is:{count}</h1>
        <h1>{message}</h1>

    </div>
  )
}

export default UseEffSetIntervaldemo