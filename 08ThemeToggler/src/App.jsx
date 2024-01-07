import { useState,useEffect } from 'react'

import './App.css'
import { ThemeProvider } from './contexts/themeContext'
import ThemeBtn from './components/ThemeBtn/ThemeBtn'
import Card from './components/Card/Card'

function App() {

  let [mode,setMode]=useState("light");

  useEffect(()=>{
    let el=document.querySelector("html");
    el.classList.remove("light","dark");
    el.classList.add(mode);
  },[mode]);

  function darkMode(){
    setMode("dark");
  }

  function lightMode(){
    setMode("light");
  }
  return (
   <ThemeProvider value={{mode,darkMode,lightMode}}>
    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
   </ThemeProvider>
  )
}

export default App
