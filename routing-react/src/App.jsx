import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import ParamComp from './components/ParamComp'
import A from './components/A'
import B from './components/B'
import C from './components/C'
import './App.css'
import NotFound from './components/NotFound'


const router = createBrowserRouter([
  {path: '/', element: <div><Navbar /> <Home /> </div>},
  {path: '/about', element: <div> <Navbar /> <About /> </div>},
  {path: '/dashboard', element: <div> <Navbar /> <Dashboard /> </div>,
  // CORRECT (no leading slashes)
  children: [
    {path: 'aa', element: <div> <A /> </div>},
    {path: 'bb', element: <div> <B /> </div>},
    {path: 'cc', element: <div> <C /> </div>}
  ]
  },
  {path: '/me/:id', element: <div> <Navbar/> <ParamComp /> </div>},
  {path: '*', element: <NotFound />}
])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
