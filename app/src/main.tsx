import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import {Screen1} from './pages/Screen1'
import {Screen2} from './pages/Screen2'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Screen1 />,
  },
  {
    path: '/screen2/:input',
    element: <Screen2 />,
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
