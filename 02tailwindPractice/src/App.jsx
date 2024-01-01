import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className={`flex flex-col justify-end min-h-screen items-center`} style={{backgroundColor:color}}>
      <div className="border border-solid container rounded-md mb-2 p-2 bg-white flex-wrap">
        <button onClick={()=>{setColor("#525CEB");}} className="border border-solid rounded-md px-5 py-1 bg-[#525CEB]">color1</button>
        <button onClick={()=>{setColor("#F3CCF3");}} className="border border-solid rounded-md px-5 py-1 bg-[#F3CCF3]">color2</button>
        <button onClick={()=>{setColor("#86B6F6");}} className="border border-solid rounded-md px-5 py-1 bg-[#86B6F6]">color3</button>
        <button onClick={()=>{setColor("#756AB6");}} className="border border-solid rounded-md px-5 py-1 bg-[#756AB6]">color4</button>
      </div>
    </div>
  )
}

export default App
