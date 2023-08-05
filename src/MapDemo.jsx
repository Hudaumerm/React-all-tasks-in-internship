import React from 'react'

function MapDemo() {
    const students=[{name:"ash",grade:"A+",mark:99},{name:"huda",grade:"B+",mark:67}]
    console.log(students)
  return (
    <div>
        {students.map((data)=>
        <div>
            <h1>{data.name}</h1>
            <h1>{data.grade}</h1>
            <h1>{data.mark}</h1>
            </div>
        
        )}
    </div>
  )
}

export default MapDemo