import React,{useState} from 'react'

function Vote() {
    const [vote, setvote] = useState(false)
    const onVote=()=>{
        setvote(!vote)
    }
  return (
    <div style={{marginTop:'5rem',color:"green"}}>
        {vote?(<div><h3>Your vote is recorded</h3>
        {vote &&<div><button style={{backgroundColor:'red'}} type="submit" onClick={onVote}>Cancel vote❌</button></div>}</div>):(
        <button style={{backgroundColor:"green"}} onClick={onVote}>Vote</button>)}
    </div>
  )
}

export default Vote