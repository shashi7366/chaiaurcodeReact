import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import Home from "./components/Home/Home.jsx"
import './index.css'

import { RouterProvider,createBrowserRouter, createRoutesFromElements,Route} from 'react-router-dom'
import Github from './components/Github/Github.jsx';
import { fetchFromGithub } from './components/Github/Github.jsx';

// let router=createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>
//   }
// ])

let router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index element={<Home/>} />
      <Route path="home" element={<Home/>} />
      <Route path="github" element={<Github/>} loader={fetchFromGithub}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
