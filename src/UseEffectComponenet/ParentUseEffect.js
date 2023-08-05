import React from 'react'
import UseEffectDemo from './UseEffectDemo'
import UseStateNumDemo from './UseStateNumDemo'
import UseEffCalc from './UseEffCalc'
import UseEffSetTimeoutdemo from './UseEffSetTimeoutdemo'
import UseEffSetIntervaldemo from './UseEffSetIntervaldemo'
import SetTimeoutOnly from './SetTimeoutOnly'
import SpreadTask1 from '../Spread/SpreadTask1'

function ParentUseEffect() {
  return (
    <div>
       {/* <UseEffectDemo/>
        <UseStateNumDemo/>
  <UseEffCalc/>*/}
        <UseEffSetTimeoutdemo/>
        <UseEffSetIntervaldemo/>
        <SetTimeoutOnly/>
        <SpreadTask1/>
    </div>
  )
}

export default ParentUseEffect