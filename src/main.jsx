import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import StartPage from './Components/StartPage.jsx'
import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom/dist/index.js'
import Layout from './Layout.jsx'
import MainPage from './Components/MainPage.jsx'

const router=createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<StartPage/>}/>
      <Route path='main' element={<MainPage/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

