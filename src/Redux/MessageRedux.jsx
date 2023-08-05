import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { display } from './Slice'

function MessageRedux() {
    const msg=useSelector((setData)=>setData.MessageRedux)
    const dispatch=useDispatch()
  return (
    <div>
        <h1>{msg.data}</h1>
        <button onClick={()=>{dispatch(display())}}>Click</button>
    </div>
  )
}

export default MessageRedux