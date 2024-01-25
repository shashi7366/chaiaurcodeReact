import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { Provider } from "react-redux";
import store from "./store/store.js"
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom';
import {Home,SignUp} from "./components";

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
     </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
)
