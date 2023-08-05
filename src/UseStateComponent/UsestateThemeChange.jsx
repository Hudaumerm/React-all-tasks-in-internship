import React,{useState} from 'react'

function UsestateThemeChange() {
    const [theme,settheme]=useState("white");
    const [textcolor,settextcolor]=useState("black");
    const handlechange =()=>{
        if(theme==="white"){
        settheme("grey")
        settextcolor("white")
        }
        else{
            settheme("white")
            settextcolor("black")
        }
    }
  return (
    <div align="center">
        <label for='themechange' value='on'>Enable Dark Theme </label>
        <input id='themechange' type="checkbox" onClick={handlechange} />
    
        <div style={{backgroundColor:theme,marginTop:'10px',padding:'20px',color:textcolor}}>
            <h2>Hello Welcome</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, consectetur?</p>
        </div>
    </div>


  )
}

export default UsestateThemeChange