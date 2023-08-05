import React from 'react'
import PropsDemo from './PropsDemo';
import ArrayProps from './ArrayProps'


function SampleProps() {
    const data1="Kerala";
  return (
    <div>
        <PropsDemo  name={data1} lang={"malayalam"}/>
    </div>
  )
}

export default SampleProps