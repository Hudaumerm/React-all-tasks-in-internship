import React, { useState } from 'react'

function UseStateimage2() {
    //const [next,setnext]=useState("Show image");
    const [initial,setinitial]=useState("null")
    const [image,setimage]=useState("none");
    const [closeicone,setcloseicone]=useState("none");

    const buttonhandle=()=>{
        if(initial==="null")
        {
            setimage("");
            setcloseicone("");
           setinitial("none")
        }
        else{
            setimage("none");
            setcloseicone("none");
            setinitial("null")
        }
       
    }
    const closeiconehandle=()=>{
        if(closeicone==="null")
        {
            setimage("none");
            setcloseicone("none")
        }
        else
        {
            setimage("");
            setcloseicone("")
           

        }
    }

  return (
    <div>
        <button  style={{marginTop:'25%',marginLeft:'50%',display:initial}} onClick={buttonhandle}>Show Image</button>
        <div style={{position:'relative'}}>
        <img
          style={{ marginLeft: "25%", marginTop: "10px", height: "662px",display:image,boxShadow:'20px 40px 20px 20px grey',position:'absolute'}}
          src="https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg"
          alt=""
        />
        <div>
          <button
            style={{display:closeicone, border: "2px solid black",backgroundColor:'grey',borderRadius:'0',position:'absolute',top:'10px',left:'25%',bottom:'0',right:'0'}}
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={closeiconehandle}
          >
            {closeicone}
          </button>
        </div>
      </div>

    </div>
  )
}

export default UseStateimage2