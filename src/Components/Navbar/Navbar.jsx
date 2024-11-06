import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import { getAllCartItems, getAllWishItems } from "../Utilities/Index";

const Navbar = () => {
  const { pathname } = useLocation();
  const cartItem = getAllCartItems()
  const [data, setData] = useState(cartItem)
  const wishItem = getAllWishItems()
  useEffect(()=>{
    setData(cartItem)
  },[])
  // console.log(data)

  return (
    <div
      className={`${
        pathname.includes("/home")
          ? "bg-[#9538E2] text-white navbar px-32 "
          : "bg-transparent"
      }`}
    >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/products/allProducts">Home</NavLink>
              </li>

              <li>
                <NavLink
                  to="/statistics"
                  className={({ isActive }) =>
                    `${isActive ? "active-routes" : ""}`
                  }
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </div>
          <a className="text-xl font-bold">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal space-x-12">
            <li>
              <NavLink
                to="/home/products/allProducts"
                className={({ isActive }) =>
                  `font-medium ${isActive ? "active-home" : ""}`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  `font-medium ${isActive ? "active-routes" : ""}`
                }
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `font-medium ${isActive ? "active-routes" : ""}`
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `font-medium ${isActive ? "active-routes" : ""}`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          <div className="relative">
            <div className="rounded-full border p-2 bg-white">
              <img src="/cart.png" alt="" />
            </div>
            <div className={`px-3 py-1 bg-white rounded-full absolute -top-3 -right-3 ${cartItem.length===0?'hidden':''}`}>
              <p className="text-red-600 text-sm font-medium">{data.length}</p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-full border p-2 bg-white">
              <img src="/love.png" alt="" />
            </div>
            <div className={`px-3 py-1 bg-white rounded-full absolute -top-3 -right-3 ${cartItem.length===0?'hidden':''}`}>
              <p className="text-red-600 text-sm font-medium">{wishItem.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
