import { Link } from "react-router-dom";

const Banner = () => {
  return (
   <div>
     <div style={{borderRadius:'0 0 32px 32px'}} className="bg-[#9538E2] banner text-white mx-8 px-32 flex flex-col justify-center items-center mb-96">
     
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
        <img className="max-h-[563px] rounded-3xl" src="/banner.jpg" alt="" />
      </div>
    </div>
   </div>
  );
};

export default Banner;