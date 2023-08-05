import React, { useState } from "react";

function UseStateimage1() {
  const [bname, setbname] = useState("Show image");
  const [color, setcolor] = useState("#4CAF50");
  const [image, setimage] = useState("none");
  const [closeicone, setcloseicone] = useState("none");

  const bclick = () => {
    if (bname === "Show image") {
      setbname("Close image");
      setcolor("#f44336");
      setimage("");
      setcloseicone("");
    }
     else{
      setbname("Show image");
      setcolor("#4CAF50");
      setimage("none");
      setcloseicone("none")
    }
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: color,
          border:'0',
          borderRadius: "4px",
          padding: "10px 24px",
          //width: "110px",
          boxSizing: "border-box",
          marginLeft: "45%",
          marginTop:'10px',
          fontSize:'14px',
          fontFamily:'sans-serif',
          fontWeight:'bold',
          transitionDuration:'0.4s',
          
        }}
        onClick={bclick}
      >
        {bname}
      </button>
      <div style={{position:'relative'}}>
        <img
          style={{ marginLeft: "25%", marginTop: "5px", height: "662px",display:image,boxShadow:'20px 40px 20px 20px grey'}}
          src="https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg"
          alt=""
        />
        <div>
          <button
            style={{display:closeicone, border: "2px solid black",backgroundColor:'grey',borderRadius:'0',position:'absolute',top:'5px',left:'25%',bottom:'0',right:'0'}}
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={bclick}
          >
            {closeicone}
          </button>
        </div>
      </div>
    </div>
  );
}

export default UseStateimage1;
