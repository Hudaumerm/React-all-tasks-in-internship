import React from 'react'

function ObjectProps({items}) {
  return (
    <div>
        
                <h1>{items.name}</h1>
                <h1>{items.place}</h1>
                <h1>{items.language}</h1>


    </div>
  )
}

export default ObjectProps