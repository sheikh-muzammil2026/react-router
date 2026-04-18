import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installed from "../pages/Installed";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import AppsDetails from "../pages/AppsDetails";

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout/>,
      children: [
        {
          path: '/',
          element: <Home/>,
          
        },
        {
          path: '/Apps',
          element: <Apps/>,
          // loader: async () => {
          //   const res = await fetch("/data.json");
          //   return res.json();
          // }
        },
        {
          path: '/apps/:id',
          element: <AppsDetails/>
        },
        {
          path: 'installed',
          element: <Installed/>
        },
        {
          path: 'Dashboard',
          element: <Dashboard/>
        }
        // ,
        // {
        //   path: 'appsDetails',
        //   element: <AppsDetails/>
        // }
    
      ],
      errorElement: <NotFound/>
    }
  ]
)