import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home.tsx'
import Login from './component/Login.tsx'
import Register from './component/Register.tsx'
import Add from './component/Add.tsx'
import Detail from './component/detail.tsx'

const router = createBrowserRouter([
  { path: '/profile', element: <App></App>},
  { path: '/', element: <Home/>},
  { path: '/login', element: <Login/>},
  { path: '/register', element: <Register/>},
  { path: '/add', element: <Add/>},
  { path: '/detail', element: <Detail/>}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
