import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Slice'

function CounterRedux() {
    const count=useSelector((setValue)=>setValue.CounterRedux)
    console.log(count)
    const dispatch=useDispatch()
  return (
    <div>
        <h1>{count.value}</h1>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>

    </div>
  )
}

export default CounterRedux