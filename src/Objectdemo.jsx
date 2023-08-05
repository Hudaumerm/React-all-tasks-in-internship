import React from 'react'

function Objectdemo() {
    const car={name:"maruthi",brand:"boleno",price:90000}
    console.log(car)
  return (
    <div>
        <h1>{car.name}</h1>
        <p>{car.brand}</p>
        <p>{car.price}</p>
    </div>
  )
}

export default Objectdemo