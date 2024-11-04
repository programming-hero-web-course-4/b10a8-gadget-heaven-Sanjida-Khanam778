import { Link, NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Banner = () => {
  return (
   <div>
     <div className="bg-[#9538E2] border-[7px] rounded-[32px] text-white px-32 border-white flex flex-col justify-center items-center mb-96">
      <Navbar></Navbar>
      <div className="flex flex-col justify-center items-center w-10/12 mx-auto text-white m-12 pb-56">
        <h1 className="text-5xl font-bold text-center leading-tight">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="mt-6 mb-8 text-center w-9/12">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="text-xl font-bold rounded-[32px] px-8 py-4 bg-white text-[#9538E2]">
          <Link to='/dashboard'>Shop Now</Link>
        </button>
      </div>
      <div className="p-6 bg-white bg-opacity-30 border-[3px] rounded-[32px] absolute -bottom-2/4" >
        <img className="max-h-[563px] rounded-3xl" src="./banner.jpg" alt="" />
      </div>
    </div>
    <div className="pt-20">
        <h1 className="text-[40px] font-bold text-center text-black">Explore Cutting-Edge Gadgets</h1>

    </div>
    <div className="grid grid-cols-4 w-10/12 mt-12 mx-auto">
        <div className="col-span-1 bg-white rounded-2xl p-6">
            <div className="px-4 py-5"><NavLink to='/' className={({isActive})=> isActive? 'categoty-active':''}>All Product</NavLink></div>
            <div className="px-4 py-5"><NavLink className={({isActive})=> isActive? 'categoty-active':''}>Laptops</NavLink></div>
            <div className="px-4 py-5"><NavLink className={({isActive})=> isActive? 'categoty-active':''}>Phones</NavLink></div>
            <div className="px-4 py-5"><NavLink className={({isActive})=> isActive? 'categoty-active':''}>Accessories</NavLink></div>
            <div className="px-4 py-5"><NavLink className={({isActive})=> isActive? 'categoty-active':''}>Smart Watches</NavLink></div>
            <div className="px-4 py-5"><NavLink className={({isActive})=> isActive? 'categoty-active':''}>MacBook</NavLink></div>
            <div className="px-4 py-5"><NavLink className={({isActive})=> isActive? 'categoty-active':''}>Iphone</NavLink></div>
        </div>
        <div className="col-span-3 border"></div>
    </div>
   </div>
  );
};

export default Banner;
