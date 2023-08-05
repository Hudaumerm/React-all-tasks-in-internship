import React from 'react'

function PropsDemo(props) {
    console.log(props)
  return (
    <div>
        <h1>{props.name}</h1>
        <h1>{props.lang}</h1>

    </div>
  )
}

export default PropsDemo