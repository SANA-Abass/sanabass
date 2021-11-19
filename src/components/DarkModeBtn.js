import React from 'react';
import {useState} from 'react';

function DarkModeBtn() {
    const [themeMode, setThemeMode] = useState('lightTheme'); //default
    let clickedClass = "clicked";
    const body = document.body;
    const lightTheme = "lightTheme";
    const darkTheme = "darkTheme";
    let theme;

    if(localStorage){
        theme = localStorage.getItem("theme");
    }

    if(theme === lightTheme || theme === darkTheme){
        body.classList.add(theme);
    }else{
        body.classList.add(lightTheme); //default
    }

    const switchTheme = e => {
        if(theme === darkTheme){
            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "lightTheme");
            theme = lightTheme;
        }else{
            body.classList.replace(lightTheme, darkTheme);
            e.target.classList.add(clickedClass);
            localStorage.setItem("theme", "darkTheme");
            theme = darkTheme;
        }
        setThemeMode(theme)
    }



    return (
        <button className={theme === "darkTheme" ? clickedClass : ""} id="darkMode" onClick={e => switchTheme(e)}>
            {theme === "lightTheme" || themeMode === "lightTheme" ? <i className="far fa-moon"></i> : <i className="fas fa-sun"></i>}
        </button>
    );
}

export default DarkModeBtn;