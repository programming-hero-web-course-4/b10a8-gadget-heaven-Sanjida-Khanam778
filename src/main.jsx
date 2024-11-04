import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Statistics from "./Components/Pages/Statistics";
import Dashboard from "./Components/Pages/Dashboard";
import AllProducts from "./Components/Home/AllProducts";
import ViewDetails from "./Components/Pages/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Navigate to='/home/products/allProducts' replace></Navigate>,
        loader: ()=> fetch('./products.json'),
       
      },
      {
        path: '/home',
        element: <Home></Home>,
        children:[
          
          {
            path:'/home/products/:category',
            element:<AllProducts></AllProducts>,
          },
          
         
        ]
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
        
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/about'
      },
      {
        path: '/details',
        element: <ViewDetails></ViewDetails>,
        loader: ()=> fetch('./products.json'),
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
