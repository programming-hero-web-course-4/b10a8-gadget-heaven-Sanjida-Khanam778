// import Banner from "./Banner";

import { NavLink, Outlet } from "react-router-dom";
import Banner from "./Banner";
import './Home.css'

const Home = () => {

  return (
    <div>
        <Banner></Banner>
      <div className="pt-20">
        <h1 className="text-[40px] font-bold text-center text-black">
          Explore Cutting-Edge Gadgets
        </h1>
      </div>
      <div className="grid grid-cols-4 w-10/12 mt-12 mx-auto gap-6">
       <div>
       <div className="bg-white rounded-2xl p-6 space-y-6 flex flex-col">
          <NavLink
            to={`/home/products/allProducts`}
            className={({ isActive }) => (isActive ? "active-category px-6 py-4 bg-[#09080F05] rounded-[32px] " : "px-6 py-4 bg-[#09080F05] rounded-[32px] ")}
          >
            All Product
          </NavLink>
          <NavLink
            to={`/home/products/laptops`}
            className={({ isActive }) => (isActive ? "active-category px-6 py-4 bg-[#09080F05] rounded-[32px] " : "px-6 py-4 bg-[#09080F05] rounded-[32px] ")}
          >
            Laptops
          </NavLink>
          <NavLink
            to={`/home/products/phones`}
            className={({ isActive }) => (isActive ? "active-category px-6 py-4 bg-[#09080F05] rounded-[32px] " : "px-6 py-4 bg-[#09080F05] rounded-[32px] ")}
          >
            Phones
          </NavLink>
          <NavLink
            to={`/home/products/accessories`}
            className={({ isActive }) => (isActive ? "active-category px-6 py-4 bg-[#09080F05] rounded-[32px] " : "px-6 py-4 bg-[#09080F05] rounded-[32px] ")}
          >
            Accessories
          </NavLink>
          <NavLink
            to={`/home/products/smart-watch`}
            className={({ isActive }) => (isActive ? "active-category px-6 py-4 bg-[#09080F05] rounded-[32px] " : "px-6 py-4 bg-[#09080F05] rounded-[32px] ")}
          >
            Smart Watches
          </NavLink>
          <NavLink
            to={`/home/products/macbook`}
            className={({ isActive }) => (isActive ? "active-category px-6 py-4 bg-[#09080F05] rounded-[32px] " : "px-6 py-4 bg-[#09080F05] rounded-[32px] ")}
          >
            MacBook
          </NavLink>
          <NavLink
            to={`/home/products/iphone`}
            className={({ isActive }) => (isActive ? "active-category px-6 py-4 bg-[#09080F05] rounded-[32px] " : "px-6 py-4 bg-[#09080F05] rounded-[32px] ")}
          >
            Iphone
          </NavLink>
        </div>
       </div>

        <div className="col-span-3">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
