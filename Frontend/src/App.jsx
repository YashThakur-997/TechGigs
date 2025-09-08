import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/footer'
import Login from './components/Login'
import Webdev from './components/Webdev'
import Svgediting from './components/Svgediting'
import PhotoEditing from './components/PhotoEditing'
import Videoediting from './components/Videoediting'
import Aitools from './components/Aitools'
import Uiux from './components/uiux'
import Signup from './components/signup'
import Orders from './components/Orders'
import Portfolio from './components/Portfolio'
function App() {
  const [count, setCount] = useState(0)


  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Homepage /><Footer/></>
    },
    {
      path: "/About",
      element: <><Navbar /><About /></>
    },
    {
      path: "/Contact",
      element: <><Navbar /><Contact /></>
    },
    {
      path: "/Login",
      element: <><Navbar /><Login /></>
    },
    {
      path:"/Webdev",
      element:<><Navbar/><Webdev/></>
    },
    {
      path:"/Svgediting",
      element:<><Navbar/><Svgediting/></>
    },
    {
      path:"/Photoediting",
      element:<><Navbar/><PhotoEditing/></>
    },
    {
      path:"/Videoediting",
      element:<><Navbar/><Videoediting/></>
    },
    {
      path: "/signup",
      element: <><Navbar /><Signup /></>  // Assuming the signup component is similar to Login
    },
    {
      path:"/uiux",
      element:<><Navbar/><Uiux/></>
    },
    {
      path:"/Aitools",
      element:<><Navbar/><Aitools/></>
    },
    {
      path:"/Orders",
      element:<><Navbar/><Orders/></>
    },
    {
      path:"/portfolio",
      element:<><Navbar/><Portfolio/></>
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
