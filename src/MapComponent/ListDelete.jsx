import React, { useState } from 'react'

function ListDelete({lang,onDelete}) {
    const [checked,isChecked]=useState(false)
    const change=(e)=>{
        isChecked(e.target.checked)
    }
  return (
    <div>
       <input type="checkbox" onChange={change} checked={checked}/> <label >{lang}</label>
       {checked && <button onClick={onDelete}>Delete</button>}
    </div>
  )
}

export default ListDelete