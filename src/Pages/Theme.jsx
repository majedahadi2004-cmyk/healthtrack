import {useEffect, useState} from 'react'
import '../Styles/Theme.css'
const Theme=()=>{
    const[theme,setTheme]= useState(()=>localStorage.getItem("theme")|| "Light");

    useEffect(()=>{
        localStorage.setItem("theme",theme);
    })

    const ChangeTheme=()=>{
        if(theme === "Light")
            setTheme("Dark");
        else
            setTheme("Light");
    }
    return(
       <div className={`app ${theme}`}>
       <h1>Current theme: {theme}</h1>
       <button onClick={ChangeTheme}>Theme</button>
       </div>
    )
}
export default Theme;
