import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
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
            <NavLink>Home</NavLink>
          </li>

          <li>
            <NavLink>Statistics</NavLink>
          </li>
          <li>
            <NavLink>Dashboard</NavLink>
          </li>
          <li>
            <NavLink>About</NavLink>
          </li>
          </ul>
        </div>
        <a className="text-xl font-bold">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal space-x-12">
          <li>
            <NavLink className={({isActive})=>isActive?'active':''} to='/'>Home</NavLink>
          </li>

          <li>
            <NavLink className={({isActive})=>isActive?'active':''} to='/statistics'>Statistics</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive?'active':''} to='/dashboard'>Dashboard</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive?'active':''} to='/about'>About</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        <div className="rounded-full p-2 bg-white"><img src="./cart.png" alt="" /></div>
        <div className="rounded-full p-2 bg-white"><img src="./love.png" alt="" /></div>
      </div>
    </div>
  );
};

export default Navbar;
