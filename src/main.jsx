import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Statistics from "./Components/Pages/Statistics";
import Dashboard from "./Components/Pages/Dashboard";
import AllProducts from "./Components/Home/AllProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children:[
          {
            path:'/',
            element:<AllProducts></AllProducts>
          }
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
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
