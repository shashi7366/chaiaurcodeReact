import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './contexts/userContext/UserContextProvider'
import Profile from './components/Profile/Profile'
import Login from "./components/Login/Login"

function App() {
 

  return (
    <UserContextProvider>
      <Login />
      <Profile/>
    </UserContextProvider>
  )
}

export default App
