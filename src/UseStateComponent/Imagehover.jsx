import React, { useState } from "react";

function Imagehover() {
  const [btn, setbtn] = useState(true);
  const [image, setimage] = useState(false);
  const clickbtn = () => {
    setimage(!image);
  };
 
  return (
    <div>
      {image ? (
        <div style={{ position: "relative" ,marginTop:'20px',marginLeft:'25%'}}>
          <img
            src="https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg"
            alt=""
          />
          {image &&
          <div>
            <button onClick={clickbtn}
              style={{
                border: "2px solid black",
                backgroundColor: "grey",
                borderRadius: "0",
                position: "absolute",
                top: "0",
                left: "773px",
                bottom: "0",
                right: "0",
              }}
              type="button"
              className="btn-close"
              aria-label="Close"
            />
          </div>}
        </div>
      ) : (
        <button style={{marginTop:'25%',marginLeft:'50%',backgroundColor:'green',padding:'10px',borderRadius:'5px'}} onClick={clickbtn}>Show Image</button>

      )}
    </div>
  );
}

export default Imagehover;
