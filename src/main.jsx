import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Router/Router'
import { RouterProvider } from 'react-router'
import InstalledAppContextProvider from './Componenet/Context/InstalledAppContextProvider'
import { ToastContainer } from 'react-toastify'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InstalledAppContextProvider>
      <RouterProvider router= {router}></RouterProvider>
        <ToastContainer />
    </InstalledAppContextProvider>
   
  </StrictMode>
)
