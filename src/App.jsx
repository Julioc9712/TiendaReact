import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
// de cara a internet el de abajo es el que sirve
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// de cara a internet el de arriba es el que sirve

//de cara al server local el que sirve son estos 2
//import 'bootstrap/js/src/dropdown'
//import 'bootstrap/js/dist/carousel.js'
//import 'bootstrap/js/src/button.js'
//de cara al server local el que sirve son estos 2
import './index.css'
import Inicio from './router/Inicio.jsx'
import Servicios from './router/Servicios.jsx'
import Electrodomesticos from './router/Electrodomesticos.jsx'
import Celulares from './router/Celulares.jsx'
import MotoElectrica from './router/MotoElectrica.jsx'




const router = createBrowserRouter([
  {
    path:"/",
    element: <Inicio />
  },
  {
    path:"/services",
    element: <Servicios />
  },
  {
    path:"/electrodomestico",
    element: <Electrodomesticos />
  },
  {
    path:"/celulares",
    element: <Celulares/>
  },
  {
    path:"/motos",
    element: <MotoElectrica/>
  },
  
]);
function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
