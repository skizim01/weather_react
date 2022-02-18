import {createContext} from "react";
export const  Theme  = Object.freeze({"LIGHT":"light", "DARK":"dark"})

export const ThemeContext = createContext({
        theme: Theme.LIGHT,
        changeTheme: function () {
        }
    }
)
