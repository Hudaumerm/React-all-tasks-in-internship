import React from 'react'
import CounterRedux from './CounterRedux'
import MessageRedux from './MessageRedux'
import OddRedux from './OddRedux'

function Redux() {
  return (
    <div>
        <CounterRedux/>
        <MessageRedux/>
        <OddRedux/>
    </div>
  )
}

export default Redux