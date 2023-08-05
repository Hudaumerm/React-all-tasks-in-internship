import React,{useState} from 'react'

function UseStateThemeChange1() {
    const [theme,settheme]=useState(false);

    const themestyle={
        darktheme:{
            backgroundColor:'grey',
            color:"white",
            padding:'20px'

        },
        lighttheme:{
            backgroundColor:'white',
            color:"grey",
            padding:'20px'

        }
    }
   
  return (
    <div align="center">
        <label for='themechange' value='on'>Enable Dark Theme </label>
        <input id='themechange' type="checkbox" onClick={()=>settheme(prevTheme => !prevTheme)} checked={theme} />
    
        <div style={theme? themestyle.darktheme : themestyle.lighttheme}>
            <h2>Hello Welcome</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, consectetur?</p>
        </div>
    </div>


  )
}

export default UseStateThemeChange1