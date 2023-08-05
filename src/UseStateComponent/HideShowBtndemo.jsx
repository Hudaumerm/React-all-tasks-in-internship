import React,{useState} from 'react'

function HideShowBtndemo() {
    const [first, setfirst] = useState(false)
    const clickbtn=()=>{
        setfirst(!first)
    }
  return (
    <div>
    {first?(<button onClick={clickbtn}>Hide</button>

    ):(
        <button onClick={clickbtn}>Show</button>

    )}

    </div>
  )
}

export default HideShowBtndemo