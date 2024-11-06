import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard || Gadget Heaven</title>
      </Helmet>
      <div className="bg-[#9538E2] text-white flex flex-col justify-center items-center gap-4 py-8 mb-12">
        <h1 className="font-bold text-3xl">Dashboard</h1>
        <p className="w-6/12 text-center mb-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="gap-6 flex">
          <NavLink className={({isActive})=>`rounded-[32px] text-lg ${isActive?'text-[#9538e2] bg-white font-extrabold':'border border-white font-medium'}`} to="/dashboard/purchase/cart">
            <button className=" px-16 py-4">
              Cart
            </button>
          </NavLink>
          <NavLink className={({isActive})=>`rounded-[32px] text-lg ${isActive?'text-[#9538e2] bg-white font-extrabold':'border border-white font-medium'}`} to="/dashboard/purchase/wishlist">
            <button className="px-16 py-4">
              Wishlist
            </button>
          </NavLink>
        </div>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
