import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { odd } from './Slice'

function OddRedux() {
    const oddnum=useSelector((setValue)=>setValue.OddRedux)
    console.log(oddnum)
    const dispatch=useDispatch()
  return (
    <div>
        
        <button onClick={()=>dispatch(odd())}>Click</button>

    </div>
  )
}

export default OddRedux