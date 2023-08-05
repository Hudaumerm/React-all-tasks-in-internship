import React from 'react'

function ListOnly({data,first,setfirst,onDel}) {
  return (
    <div>

    <div>{data.id}.{data.name}
    <button onClick={onDel}>Delete</button>
    </div>
    </div>
  )
}

export default ListOnly