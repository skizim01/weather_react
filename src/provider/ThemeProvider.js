import React from "react";
import {Theme, ThemeContext} from "../context/ThemeContext";
import {useState} from "react";
import {ChangeCSS} from "../model/ChangeCSS";
import {storage} from "../model/Storage";

export const ThemeProvider = ({children, props}) => {
    const [theme, setTheme] = useState(storage.getItem("theme") || Theme.LIGHT)
    const changeTheme = (theme) => {
        ChangeCSS(theme)
        storage.setItem("theme", theme)
        setTheme(theme)
    }
    return <ThemeContext.Provider value={{theme, changeTheme}} props={props}>
        {children}
    </ThemeContext.Provider>
}
