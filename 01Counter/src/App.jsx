import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  function increment(){
    setCount(function(prevCount){
      console.log("hi",count);
      return count+1;
    })
  }

  function decrement(){
    setCount(function(){
      return count-1;
    })
  }

  return (
    <>
      <h1>React Counter {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  )
}

export default App
