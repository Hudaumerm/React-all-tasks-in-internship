import React from 'react'

function SpreadTask1() {
    const arr1=[1,2,3,4];
    const arr2=[10,11,12];
    const no=17;
    console.log(arr1);
    console.log(arr2);
    const combinedarray=[ ...arr1,...arr2,no,20,30,10000];
    console.log("combined array=",combinedarray);
    // console.log(Math.max(...combinedarray));
    // const arr3=[...arr1];
    // arr3.push(50);
    // console.log(arr3)
  return (
    <div>
        <h1>Spread Operator</h1>

    </div>
  )
}

export default SpreadTask1