import {useContext,createContext} from "react";

let themeContext=createContext({
    mode:"light",
    darkMode:()=>{},
    lightMode:()=>{}
});

export let ThemeProvider=themeContext.Provider;


export default function useTheme(){
    return useContext(themeContext);
}

