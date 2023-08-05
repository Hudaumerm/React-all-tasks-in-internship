import React, { useState } from "react";
 function OddEvenMain(){
   const [num,setnum]=useState(0)
//    const changeOdd=()=>{
//      if(num%2!==0){
//         setnum(num+2)
//     }
//     else{
//         setnum(num+1)
//     }

// }
//    const changeEven=()=>{
//      if(num%2==0){
//         setnum(num+2)
//     }
//     else{
//         setnum(num+1)
//     } 
//    }keralatourism.org \\ keralatourismgetyourguide
return(<div> 
    <h1>{num}</h1>
    <button onClick={()=>{num%2 === 0?  (setnum(num+2)) :  (setnum(num+1)) }}>Even</button>
    <button onClick={()=>{num%2 !== 0? (setnum(num+2)) :  (setnum(num+1)) }}>Odd</button>
</div>
)
}
export default OddEvenMain;


