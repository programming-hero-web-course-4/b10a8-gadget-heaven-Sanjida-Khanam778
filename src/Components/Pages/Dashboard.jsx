import { NavLink, Outlet } from "react-router-dom";
import { MyContext } from "./ViewDetails";

const Dashboard = () => {
  return (
    <div>
      <div className="bg-[#9538E2] text-white flex flex-col justify-center items-center gap-4 py-8 mb-12">
        <h1 className="font-bold text-3xl">Dashboard</h1>
        <p className="w-6/12 text-center mb-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="gap-6 flex">
          <NavLink to="/dashboard/purchase/cart">
            <button className="rounded-[32px] text-[#9538e2] bg-white px-16 py-4 font-extrabold text-lg">
              Cart
            </button>
          </NavLink>
          <NavLink to="/dashboard/purchase/wishlist">
            <button className="rounded-[32px] border border-white px-16 py-4 font-medium text-lg">
              Wishlist
            </button>
          </NavLink>
        </div>
      </div>
      <MyContext.Provider value='none'>

      <Outlet></Outlet>
      </MyContext.Provider>
    </div>
  );
};

export default Dashboard;
